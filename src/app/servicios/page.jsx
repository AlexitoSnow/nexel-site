import { services } from '@/lib/const';
import ServiceCard from "./service_card";


export default function Servicios() {

  return (
    <main className="flex flex-col items-center space-y-16 justify-between p-16">
      <h1 className="text-4xl mb-8 text-center ">
        Tenemos una gran cantidad de servicios de los cuales podrás elegir
      </h1>
      <section className="flex flex-wrap justify-center space-x-4 space-y-4">
        {
          services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))
        }
      </section>
    </main>
  );
}
