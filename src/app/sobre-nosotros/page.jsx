import Image from "next/image";

export default function SobreNosotros() {
    return (
        <main className="flex min-h-screen flex-col">

          <section className="px-5">

            <section className="flex flex-col md:flex-row py-4 space-y-4">
                <div className="w-1/2 space-y-4 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-center">¿Quienes somos?</h2>
                    <p className="text-2xl">Somos un grupo de desarrolladores especializados en el desarrollo de tiendas online, con un fuerte compromiso en priorizar la experiencia de usuario.</p>
                </div>
                <Image src="" width={500} height={200} />
            </section>

            <section className="flex flex-col md:flex-row py-8">
                <Image src="" width={500} height={200} />
                <div className="w-1/2 space-y-4 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-center">Misión</h2>
                    <p className="text-2xl">
                    Nuestra misión es impulsar el crecimiento de emprendedores al proporcionar soluciones de desarrollo de tiendas online, permitiéndoles alcanzar su máximo potencial y ofreciendo a sus clientes una experiencia de compra excepcional
                    </p>
                </div>
            </section>

            <section className="flex flex-col md:flex-row py-4 space-y-4">
              <div className="w-1/2 space-y-4 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-center ">Visión</h2>
                <p className="text-2xl">
                    Nuestra visión es ser una empresa con alto impacto en la creación de tiendas online a nivel global
                </p>
              </div>
              <Image src="" width={500} height={200} />
            </section>
          </section>
        </main>
      );
}