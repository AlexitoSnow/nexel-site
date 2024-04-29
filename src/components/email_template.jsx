export default function EmailTemplate({ message }) {
    return (
        <div>
            <h1>Nexel</h1>
            <p>Hola, hemos recibido tu solicitud, pronto nos contactaremos contigo</p>
            <p>Adjuntamos una copipa de tu mensaje:</p>
            <p>{message}</p>
        </div>
    );
}