import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";
import MapmundiSection from "../components/animacion_mapamundi";

export default function Home() {
  var tecnologias = [

  ];
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative">
        <Image
          src="/assets/images/landing.svg"
          alt="Imagen de bienvenida"
          width={400}
          height={400}
          className="w-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
          <div className="max-w-full md:max-w-2xl text-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
              Tu negocio al siguiente nivel
            </h1>
            <Link href="/servicios" className="inline-block">
              <Button text="Comenzar" />
            </Link>
          </div>
        </div>
      </section>


      <MapmundiSection/>
      <section className="px-5">
        <section className="flex flex-col md:flex-row py-8">
          <div className="w-full md:w-1/2 flex flex-col items-center mb-4 md:mb-0">
            <h2 className="text-4xl font-bold text-center">Nuestras Tecnologías</h2>
            <p className="text-lg text-center">
              Trabajamos con tecnologías de vanguardia y específicamente elegidas para tus necesidades.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="https://skillicons.dev/icons?i=nextjs,tailwind,react,html,javascript,css,mongodb,figma,astro&perline=3"
              width={400}
              height={200}
              alt="Tecnologías utilizadas"
              className="max-w-full h-auto"
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row py-8">
          <div className="w-full md:w-1/2 flex flex-col items-center mb-4 md:mb-0">
            <h2 className="text-4xl font-bold text-center">Lo que Ofrecemos</h2>
            <p className="text-lg text-center">
              Diseñar una tienda web ajustada a tus necesidades, con posicionamiento y experiencia de usuario.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/assets/images/responsive_ecomerce.svg"
              width={500}
              height={200}
              alt="Imagen de tienda web responsive"
              className="max-w-full h-auto"
            />
          </div>
        </section>
      </section>
    </main>
  );
}