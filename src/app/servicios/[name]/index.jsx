import Servicio from '@/app/servicios/[name]/page.jsx';

export async function getStaticProps({ params }) {
    const { name } = params;
    const service = services.find((service) => service.slug === name);
    return { props: { service } };
}

export default Servicio;
