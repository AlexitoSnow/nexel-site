import Link from "next/link";
import Image from "next/image";
import Button from "./components/Button";
import ContactForm from "./components/ContactForm";

export default function Home() {
  var tecnologias = [

  ];
  return (
    <main className="flex min-h-screen flex-col">
      <section>
        <Image
          src="/assets/images/landing.svg"
          alt="Imagen de bienvenida"
          width={400}
          height={400}
          className="w-full"
        />
        <section className="z-10 flex flex-col space-y-5 text-center items-center w-1/2 absolute top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-white text-3xl md:text-5xl font-bold">Tu negocio al siguiente nivel</h1>
          <Link href="/servicios">
            <Button text="Comenzar"/>
          </Link>
        </section>
      </section>
      <section className="px-5">
      <section className="flex flex-col md:flex-row py-4">
          <div className="w-1/2 space-y-4 flex flex-col justify-center">
            <h2 className="text-4xl font-bold">Nuestras Tecnologías</h2>
            <p className="text-lg">
              Trabajamos con tecnologías de vanguardia y específicamente
              elegidas para tus necesidades.
            </p>
          </div>
          <Image src="https://skillicons.dev/icons?i=nextjs,tailwind,react,html,javascript,css,mongodb,figma,astro&perline=3" width={400} height={200} />
        </section>
        <section className="flex flex-col md:flex-row py-4">
          <div className="w-1/2 space-y-4 flex flex-col justify-center md:items-start items-center">
            <h2 className="text-4xl font-bold">Lo que Ofrecemos</h2>
            <p className="text-lg">
              Diseñar una tienda web ajustada a tus necesidades, con posicionamiento y experiencia de usuario.
            </p>
          </div>
          <Image src="/assets/images/responsive_ecomerce.svg" width={500} height={200} />
        </section>
      </section>
    </main>
  );
}