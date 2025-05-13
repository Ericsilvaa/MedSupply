import React from 'react';

import { AssetAttachmentType, handleFileUpload, validFileTypesForUpload } from '@/utils/templates/assets';

import { FiPaperclip } from 'react-icons/fi';
import { MdCheck } from 'react-icons/md';

export const template = () => {
    const [isUploading, setIsUploading] = useState(false);
    const [fileName, setFileName] = useState<string | undefined>(undefined);
    const [assetId, setAssetId] = useState<string | null>(null);
    const hasAttach = watch('has_attach') as AssetAttachmentType;
    const handleFileChange = async (file: File | null) => {
        if (!file) {
            setFileName(undefined);
            setAssetId(null);
            setIsUploading(false);
            return;
        }

        setIsUploading(true);
        setFileName(file.name);

        try {
            console.log('Iniciando upload do arquivo:', file.name);
            const uploadResult = await handleFileUpload({ file });
            console.log('Resultado do upload:', uploadResult);

            if (!uploadResult.success) {
                throw new Error(uploadResult.error || 'Erro ao fazer upload do arquivo');
            }

            const newAssetId = uploadResult.assetId;
            if (!newAssetId) {
                throw new Error('asset_id não retornado pelo upload');
            }

            setAssetId(String(newAssetId));
            setValue('asset_id', newAssetId);
            setValue('has_attach', hasAttach);
            console.log('asset_id obtido com sucesso:', newAssetId);
        } catch (error) {
            console.error('Erro ao fazer upload:', error);
            setAssetId(null);
            setFileName(undefined);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div>
            {/* Quick Answer */}
            {selectedOption === 'quick_answer' && (
                <>
                    <Editor
                        name='message'
                        label='Mensagem'
                        control={control}
                        errors={errors}
                        isChat={false}
                        isHTML={false}
                        defaultValue={template?.message ?? ''}
                        required
                        isActiveMenuBar={false}
                    />
                    <div className='flex w-full flex-col gap-y-2 lg:flex-row lg:gap-x-7'>
                        <div className='w-full'>
                            <Select
                                placeholder='Selecione um tipo de arquivo'
                                id='has_attach'
                                name='has_attach'
                                type='text'
                                typeValue='attach'
                                options={attachmentOptions}
                                label='Envio de arquivo'
                                control={control}
                                errors={errors}
                                defaultValue={template && template.has_attach}
                            />
                        </div>
                        <div className='w-full'>
                            {hasAttach && validFileTypesForUpload.includes(hasAttach) && (
                                <div className='text-color-light dark:text-color-dark relative flex items-center justify-start gap-2'>
                                    <FiPaperclip className='h-[1.625rem] w-[1.4375rem] cursor-pointer' />
                                    {!fileName && <span>Adicionar Arquivo</span>}
                                    <input
                                        type='file'
                                        id='asset_id'
                                        name='asset_id'
                                        accept={`${hasAttach}/*`}
                                        onChange={(e) => {
                                            e.preventDefault();
                                            handleFileChange(e.target.files ? e.target.files[0] : null);
                                        }}
                                        className='absolute h-0 w-0 cursor-pointer px-14 py-4 opacity-0'
                                        disabled={isUploading}
                                    />
                                    {fileName && <span>{fileName}</span>}
                                    {isUploading && (
                                        <div className='flex h-full w-8 items-center justify-center'>
                                            <div className='border-orange-light dark:border-orange-dark h-4 w-4 animate-spin rounded-full border-t-2'></div>
                                        </div>
                                    )}
                                    {assetId && !isUploading && <MdCheck size={20} className='text-green-600' />}
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
