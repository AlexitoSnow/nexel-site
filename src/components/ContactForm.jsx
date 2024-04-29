'use client';

import TextFormField from "./TextFormField";
import Button from "./Button";
import sendForm from "@/lib/email_sender";

export default function ContactForm() {
    return (
    <section className="flex flex-col space-y-2 items-center mx-4 md:mx-0">
        <h2 className="text-2xl font-bold">Contáctanos</h2>
        <form className="flex flex-col space-y-4 w-full md:w-1/2">
            <TextFormField icon="far fa-envelope" label="Correo Electrónico" placeholder="usuario@ejemplo.com" type="email" />
            <TextFormField icon="fa-solid fa-pencil" label="Asunto" placeholder="¿Sobre qué quieres hablar?" />
            <TextFormField label="Contenido" placeholder="Cuéntanos lo que tienes en mente..." multiline={true} />
            <Button text="Enviar" className="mx-auto"
                onClick={async (event) => {
                    event.preventDefault();
                    const form = event.target.form;
                    const email = form[0].value;
                    const subject = form[1].value;
                    const content = form[2].value;
                    await sendForm(email, subject, content).then(() => alert('Email sent successfully'))
                    .catch(error => alert('Failed to send email:', error));
                    // Limpiar los textfield
                    form[0].value = "";
                    form[1].value = "";
                    form[2].value = "";
                }}
            />
        </form>
    </section>
    );
}