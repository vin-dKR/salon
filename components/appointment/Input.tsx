"use client"
import React from 'react';

interface InputProps {
    maxWidth?: string;
    placeholder?: string;
    label?: string;
    type: 'text' | 'email' | 'tel' | 'date' | 'time' | 'select';
    options?: string[]; // For select type
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Input: React.FC<InputProps> = ({
    maxWidth = '300px',
    placeholder = '',
    type,
    options = [],
    value,
    onChange,
}) => {
    return (
        <div
            className={`relative bg-gradient-to-b from-white to-pink-500 p-[1px] rounded-lg overflow-hidden`}
            style={{ maxWidth, height: '48px' }}
        >
            {/* Background layer */}
            <div className="absolute inset-[1px] bg-white rounded-[7px] z-0" />

            {/* Subtle glow effect */}
            <div className="absolute inset-[2px] bg-semipink blur-md rounded-[6px] z-10" />

            {/* Input container */}
            <div className="relative z-20 flex items-center h-full px-3">
                {/*
                {label && (
                    <label className="absolute -top-2 left-3 text-xs text-gray-600 bg-white px-1">
                        {label}
                    </label>
                )}
                */}

                {type === 'select' ? (
                    <div className="relative w-[200px]">
                        <select
                            className="w-full h-full bg-transparent outline-none text-gray-800 placeholder-black/60 rounded-[6px] px-2 appearance-none cursor-pointer"
                            value={value}
                            onChange={onChange}
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                                backgroundPosition: 'right 0.5rem center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '1.5em',
                            }}
                        >
                            {placeholder && (
                                <option value="" disabled className="text-white bg-semipink">
                                    {placeholder}
                                </option>
                            )}
                            {options.map((option, index) => (
                                <option
                                    key={index}
                                    value={option}
                                    className="text-gray-800 bg-semipink hover:bg-pink-50 rounded-lg"
                                >
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                ) : (
                    <input
                        type={type === 'tel' ? 'tel' : type === 'date' ? 'date' : type === 'time' ? 'time' : type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        className="w-full h-full bg-transparent outline-none text-gray-800 placeholder-black/60 rounded-[6px] px-2"
                    />
                )}
            </div>
        </div>
    );
};

export default Input;
