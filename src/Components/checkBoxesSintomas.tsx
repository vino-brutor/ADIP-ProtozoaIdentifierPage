import React from "react";

interface CheckBoxesProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckBoxes({ label, options, selected, onChange }: CheckBoxesProps) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <div className="row">
        {options.map((option, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id={`checkbox-${label}-${index}`}
                value={option}
                checked={selected.includes(option)}
                onChange={onChange}
              />
              <label className="form-check-label" htmlFor={`checkbox-${label}-${index}`}>
                {option}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}