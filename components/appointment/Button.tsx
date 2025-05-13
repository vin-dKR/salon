import React from 'react';

interface ButtonProps {
    maxWidth?: string;
    label: string;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
    maxWidth = '300px',
    label,
    disabled = false,
    onClick,
}) => {
    return (
        <div
            className={`relative self-end w-full lg:w-80 p-[1px] rounded-lg mb-4 ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
                }`}
            style={{ maxWidth, height: '48px' }}
        >
            <div className='absolute -top-1 -left-1 bg-gradient-to-br from-white to-pink-500 filter blur-xs w-[102%] h-[102%]' />
            {/* Background layer */}
            <div className="absolute inset-[1px] bg-gradient-to-br from-white to-pink-500 rounded-[7px] overflow-hidden z-0">
                <div className="absolute inset-[2px] bg-gradient-to-tr from-white to-pink-500 filter blur-xs rounded-[7px] z-0" />
            </div>

            {/* Button content */}
            <button
                className="relative z-20 w-full h-full flex items-center justify-center text-gray-800 font-medium rounded-[6px] px-3 transition-colors duration-200"
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </button>
        </div>
    );
};

export default Button;
