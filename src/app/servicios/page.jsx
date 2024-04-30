import { services } from '@/lib/const';
import ServiceCard from "./service_card";


export default function Servicios() {

  return (
    <main className="flex flex-col items-center space-y-8 justify-between p-16">
      <h1 className="text-4xl mb-8 text-center ">
        Tenemos una gran cantidad de servicios de los cuales podrás elegir
      </h1>
      <section className="flex flex-wrap justify-center">
        {
          
          services.map((service, index) => (
            <div key={index} className=" m-4"> {/* Tamaño fijo para todos los contenedores */}
              <ServiceCard service={service} />
            </div>
          ))
        }
      </section>
    </main>
  );
}
