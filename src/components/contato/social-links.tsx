import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export function SocialLinks() {
    const socialLinks = [
        { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
        { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
        { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
        { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
        { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' }
    ];

    return (
        <div className='flex flex-wrap gap-2'>
            {socialLinks.map((social) => (
                <Button key={social.name} variant='outline' size='icon' className='h-9 w-9 rounded-full' asChild>
                    <Link href={social.href} target='_blank' rel='noopener noreferrer'>
                        <social.icon className='h-4 w-4' />
                        <span className='sr-only'>{social.name}</span>
                    </Link>
                </Button>
            ))}
        </div>
    );
}
