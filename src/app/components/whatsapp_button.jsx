'use client';
import { useRouter } from 'next/navigation';

const WhatsAppButton = ({ servicio }) => {
  const router = useRouter();

  const handlePedirServicio = () => {
    const mensaje = `¡Hola! Me interesa el servicio: ${servicio.name}. ¿Podrías proporcionarme más información?. Si tiene informacion de la tienda que desea puede brindarme informacion para poder crearla. Puedes pedirme caracteristicas de la tienda en linea como: lista de productos, barra de busqueda, orden de productos. Segun eso podria proporcionarle un precio final`;
    const encodedMensaje = encodeURIComponent(mensaje);
    const whatsappURL = `https://wa.me/${servicio.number}?text=${encodedMensaje}`;
    
    // Abre el enlace en una nueva ventana o pestaña
    window.open(whatsappURL, '_blank');
  };  

  return (
    <button
      onClick={handlePedirServicio}
      className="p-2 px-4 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-300 transform transition duration-300 ease-in-out"
    >
      Pedir Servicio
    </button>
  );
};

export default WhatsAppButton;