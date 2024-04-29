import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

export default function ServiceCard({service}) {
    return (
        <div className="flex flex-col justify-center items-center w-full md:w-auto p-4 rounded-lg bg-black text-white">
          <Image className="w-1/2 h-1/2" src={service.image} alt="" width={300} height={120} />
          <h1 className="text-lg">{service.name}</h1>
          <Link href={'/servicios/' + service.slug}>
            <Button text="Ver más"/>
          </Link>
        </div>
    );
}