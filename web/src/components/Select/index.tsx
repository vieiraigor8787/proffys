import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string; label: string
    }>;
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
    return (
        <div className='select-block'>
            <label htmlFor={name}>{label}</label>
            <select defaultValue="" id={name} {...rest}>
                <option value="" disabled hidden>selecione uma opção</option>
              {options.map(option => {
                  return <option key={option.value} value={option.value}>{option.label}</option>
              })}
            </select>
        </div>
    )
}

export default Select;