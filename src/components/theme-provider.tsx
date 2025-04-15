'use client';

import * as React from 'react';

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return <h1>This is never prerendered</h1>;

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
