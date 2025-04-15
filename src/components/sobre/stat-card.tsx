interface StatCardProps {
    value: string;
    label: string;
}

export function StatCard({ value, label }: StatCardProps) {
    return (
        <div className='text-center'>
            <p className='text-3xl font-bold'>{value}</p>
            <p className='text-muted-foreground mt-1 text-sm'>{label}</p>
        </div>
    );
}
