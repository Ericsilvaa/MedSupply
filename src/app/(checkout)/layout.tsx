import type { ReactNode } from 'react';

import NavigationLayout from '@/components/layouts/NavigationLayout';

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return <NavigationLayout>{children}</NavigationLayout>;
}
