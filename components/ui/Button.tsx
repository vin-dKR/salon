import Link from "next/link"

const Button = ({ children, className }: ButtonProps) => {
    return (
        <div className={`relative text-xl text-black p-1 rounded-lg bg-gradient-to-r from-[#FF67B6] to-[#FBFBFB] border-white hover:opacity-90 transition ${className}`} >
            <div className="relative text-xl text-black px-4 py-2 rounded-lg bg-gradient-to-bl from-[#FF67B6] to-[#FBFBFB] border-white hover:opacity-90 transition">
                <Link href="#appoinment">
                    {children}
                </Link>
            </div>
        </div >
    )
}

export default Button
