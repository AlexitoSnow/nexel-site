import { services } from '@/lib/const';
import WhatsAppButton from '@/components/whatsapp_button';

export default function Servicio({ params }) {
  const { name } = params;
  const servicio = services.find((servicio) => servicio.slug === name);

  if (!servicio) {
    return <div>Servicio no encontrado</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center p-8 bg-gray-800 text-white ">
      <img src={servicio.image} alt={servicio.name} className="w-full max-w-xs rounded-lg"  />
      <h2 className="text-2xl font-bold mb-2">{servicio.name}</h2>
      <p className="text-lg font-semibold mb-2">${servicio.price}</p>
      <p className="text-gray-300 mb-4">{servicio.description}</p>
      <h3 className="text-xl font-bold mb-2">Características</h3>
      <ul className="list-none pl-0 space-y-2">
        {servicio.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2 bg-green-500 rounded-full w-2 h-2"></span>
            {feature}
          </li>
        ))}
      </ul>
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