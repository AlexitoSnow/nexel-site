import Link from 'next/link';
import Image from 'next/image';
import { links } from '@/app/lib/const';

export default function NavBar() {

    return (
        <nav className="flex flex-row space-x-5 w-auto p-8 border-b border-gray-500">
            <Image
                src="/favicon.ico"
                alt="Logo"
                width={50}
                height={50}
            />
            <section className='flex flex-row space-x-20'>
                {links.map((link) => (
                    <Link key={link.href} href={link.href}>
                        {link.text}
                    </Link>
                ))}
            </section>
        </nav>
    );
}