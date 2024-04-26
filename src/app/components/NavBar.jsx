'use client';

import Link from 'next/link';
import Image from 'next/image';
import { links } from '@/app/lib/const';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavBar() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-row justify-between w-auto p-2 bg-gray-900">
            <Link href="/">
                <Image
                    src="/nexel_white.svg"
                    alt="Logo"
                    width={50}
                    height={50}
                />
            </Link>
            <section className='flex flex-row space-x-5'>
                {links.map((link) => (
                    <Link key={link.href}
                    href={link.href}
                    className={
                        clsx(
                            'text-1xl text-white p-2 px-4 rounded-lg hover:bg-blue-300 transform transition duration-300 ease-in-out',
                            'cursor-pointer',
                            pathname === link.href ? 'bg-blue-400' : 'bg-transparent'
                        )
                    }
                    >
                        {link.text}
                    </Link>
                ))}
            </section>
        </nav>
    );
}