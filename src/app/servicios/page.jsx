import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";


export default function Servicios() {

  return (
    <main className="flex flex-col items-center space-y-16 justify-between p-16">
      <h1 className="text-4xl mb-8 text-center ">
        Tenemos una gran cantidad de servicios de los cuales podrás elegir
      </h1>
      <section className="flex flex-wrap justify-center space-x-4 space-y-4">
        <div className="flex flex-col justify-center items-center w-full md:w-auto p-4 rounded-lg bg-black text-white">
          <Image className="w-1/2 h-1/2" src="/assets/images/sistema1.png" alt="" width={300} height={120} />
          <h1 className="text-lg">Tienda con registro</h1>
          <h1 className="text-lg">Inicio de sesión</h1>
          <Link href="/servicios/tienda-con-registro">
            <Button text="Ver más"/>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center w-full md:w-auto p-4 rounded-lg bg-black text-white">
          <Image className="w-1/2 h-1/2" src="/assets/images/servicio2.png" alt="" width={300} height={120} />
          <h1 className="text-lg">Tienda con</h1>
          <h1 className="text-lg">formulario</h1>
          <Link href="/servicios/tienda-con-formulario">
            <Button text="Ver más"/>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center w-full md:w-auto p-2 rounded-lg bg-black text-white">
          <Image className="w-1/2 h-1/2" src="/assets/images/servicio3.png" alt="" width={300} height={120} />
          <h1 className="text-lg">Tienda con registro</h1>
          <h1 className="text-lg">Botón de pago</h1>
          <Link href="servicios/tienda-con-boton-pago">
            <Button text="Ver más"/>
          </Link>
        </div>
      </section>
    </main>
  );
}
