import { services } from '@/app/lib/const';

export default function Servicio({ params }) {
  const service = services.find((service) => service.slug === params.name);

  if (!service) {
    return <div>Servicio no encontrado</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center p-8 bg-gray-800 text-white rounded-lg">
      <img
        src={service.image}
        alt={service.name}
        className="w-full max-w-xs"
      />
      <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
      <p className="text-lg font-semibold mb-2">${service.price}</p>
      <p className="text-gray-300 mb-4">{service.description}</p>
      <h3 className="text-xl font-bold mb-2">Características</h3>
      <ul className="list-none pl-0 space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2 bg-green-500 rounded-full w-2 h-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function generateStaticParams() {
  return services.map((post) => ({
    slug: post.slug,
  }));
}