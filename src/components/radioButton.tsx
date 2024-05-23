export default function RadioButton ({name, title}:{name:string, title:string}) {
    return (
        <div className="mx-6">
            <input 
                type="radio" 
                name={name}
                className="mx-3 font-semibold text-orange-500 border-orange-500" 
                />
            {title}
        </div>
    )
}