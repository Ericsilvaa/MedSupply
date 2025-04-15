import Image from 'next/image';

interface TeamMemberProps {
    name: string;
    role: string;
    image: string;
}

export function TeamMember({ name, role, image }: TeamMemberProps) {
    return (
        <div className='flex flex-col items-center'>
            <div className='relative mb-4 h-40 w-40 overflow-hidden rounded-full'>
                <Image src={image || '/placeholder.svg'} alt={name} fill className='object-cover' />
            </div>
            <h3 className='text-lg font-medium'>{name}</h3>
            <p className='text-muted-foreground text-sm'>{role}</p>
        </div>
    );
}
