import '@fortawesome/fontawesome-free/css/all.min.css';

export default function TextFormField({ label, placeholder, type = 'text', multiline = false, width, icon }) {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium">{label}</label>
            {
                multiline ?
                    <textarea width={width ? width : ''} placeholder={placeholder} className="rounded-md text-blue-500 bg-gray-900 p-3 h-32" />
                    :
                    icon ?
                        <div className="relative rounded-md text-blue-500 bg-gray-900">
                            <i className={icon + " absolute top-1/2 left-3 transform -translate-y-1/2"} />
                            <input type={type} placeholder={placeholder} className="pl-8 rounded-md text-blue-500 bg-gray-900 p-3 w-full" />
                        </div>
                        :
                        <input type={type} placeholder={placeholder} className="rounded-md text-blue-500 bg-gray-900 p-3 w-full" />
            }
        </div>
    );
}