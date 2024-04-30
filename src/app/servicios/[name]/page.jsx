import { services } from '@/lib/const';
import WhatsAppButton from '@/components/whatsapp_button';

export default function Servicio({ params }) {
  const { name } = params;
  const servicio = services.find((servicio) => servicio.slug === name);

  if (!servicio) {
    return <div>Servicio no encontrado</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center bg-gray-800 text-white ">
      <img src={servicio.big_image} alt={servicio.name} className="w-full h-auto max-w-full rounded-lg"  />
      <div className='p-2 flex justify-between items-center w-full'>
        <h2 className="text-2xl font-bold mb-2 w-1/2">{servicio.name}</h2>
        <p className="text-lg font-semibold mb-2">${servicio.price}</p>
      </div>
      <div className='flex justify-between items-center w-full'>
        <b><p className="text-gray-300 p-2 mb-4 w-2/3">{servicio.description}</p></b>
          <ul className="h-1/2 space-y-2">
            {servicio.features.map((feature, index) => (
              <li key={index} className="flex items-center  ">
                <span className="mr-2 bg-green-500 rounded-full w-2 h-2"></span>
                {feature}
              </li>
            ))}
          </ul>
      </div>
      <WhatsAppButton servicio={servicio} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = services.map((service) => ({ params: { name: service.slug } }));
  return { paths, fallback: false };
}

export async function generateStaticParams() {
  return services.map((post) => ({ slug: post.slug }));
}