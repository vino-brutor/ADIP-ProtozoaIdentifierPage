type options = {
    label: string
    value: string
}

type SelectFieldProps = {
    label: string
    value: string
    options: options[]
    name: string
    onChange: (e: any) => void
}


export default function SelectField({label, value, options, name, onChange}: SelectFieldProps) {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <select
                className="form-select"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required
            >
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );

}