'use client';

import { useState } from 'react';

import Image, { ImageProps } from 'next/image';

import { Image as ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
    src: string;
    fallbackSrc?: string;
    alt: string;
}

export default function ImageWithFallback({
    src,
    fallbackSrc = '/fallback-product.svg',
    alt,
    ...rest
}: ImageWithFallbackProps) {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    return hasError ? (
        <div className='flex h-full w-full items-center justify-center bg-gray-100'>
            <ImageIcon className='h-8 w-8 text-gray-400' />
        </div>
    ) : (
        <Image
            {...rest}
            src={imgSrc}
            alt={alt}
            onError={() => {
                if (imgSrc !== fallbackSrc) {
                    setImgSrc(fallbackSrc);
                } else {
                    setHasError(true);
                }
            }}
        />
    );
}
