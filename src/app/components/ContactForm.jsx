import TextFormField from "./TextFormField";
import Button from "./Button";

export default function ContactForm() {
    return (
    <section className="flex flex-col space-y-2 items-center mx-4 md:mx-0">
        <h2 className="text-2xl font-bold">Contáctanos</h2>
        <form className="flex flex-col space-y-4 w-full md:w-1/2">
            <TextFormField icon="far fa-envelope" label="Correo Electrónico" placeholder="usuario@ejemplo.com" type="email" />
            <TextFormField icon="fa-solid fa-pencil" label="Asunto" placeholder="¿Sobre qué quieres hablar?" />
            <TextFormField label="Contenido" placeholder="Cuéntanos lo que tienes en mente..." multiline={true} />
            <Button text="Enviar" className="mx-auto" />
        </form>
    </section>
    );
}