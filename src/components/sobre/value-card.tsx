interface ValueCardProps {
    title: string;
    description: string;
}

export function ValueCard({ title, description }: ValueCardProps) {
    return (
        <div className='rounded-lg border border-slate-100 p-6 transition-all hover:shadow-sm'>
            <h3 className='mb-2 text-lg font-medium'>{title}</h3>
            <p className='text-muted-foreground text-sm'>{description}</p>
        </div>
    );
}
