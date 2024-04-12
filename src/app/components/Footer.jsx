import Image from 'next/image';

export default function Footer () {
    return (
        <footer className="flex flex-row w-full items-center p-4 mt-8 border-t border-gray-500 space-x-2">
            <p>© {new Date().getFullYear()} Nexel - Desarrollado en</p>
            <Image src="https://skillicons.dev/icons?i=nextjs" width={20} height={20} />
        </footer>
    );
}