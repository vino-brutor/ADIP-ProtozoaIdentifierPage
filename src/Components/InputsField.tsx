type InputsField = {
    label: string
    name: string
    type?: string
}

export default function InputsField({label, name, type = "text"}: InputsField) {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input
                type={type}
                className="form-control"
                id={name}
                name={name}
                required
            />
        </div>
    );

}