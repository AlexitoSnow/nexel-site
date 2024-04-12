export default function Button({text, className}) {
    return (
        <button className={className + " p-2 px-4 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-300 transform transition duration-300 ease-in-out"}>
            {text}
        </button>
    );
}