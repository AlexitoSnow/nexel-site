import { services } from '@/app/lib/const';

export default function Servicio({ params }) {
    const service = services.find((service) => service.slug === params.name);
    return (
    <div>
        <h1>{service.name}</h1>
        <p>{service.description}</p>
        <p>{service.price}</p>
        <img src={service.image} alt={service.name} />
    </div>
);
}

/*
export async function generateStaticParams() {
    return services.map((post) => ({
      slug: post.slug,
    }))
}
*/