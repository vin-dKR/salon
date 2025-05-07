import { navData } from "@/constant/navbar"
import Link from "next/link"
import Button from "../ui/Button"

const Navbar = () => {
    return (
        <div className="relative flex w-full items-center justify-center mt-8 lg:mt-10">
            <div className="flex items-center justify-between px-12 w-[90%] lg:w-[60%] h-18 rounded-2xl border-4 border-white">
                <div className="absolute left-1/2 -translate-x-[50%] inset-0 bg-semipink filter blur-sm w-[90%] lg:w-[60%] z-0"></div>
                <span className="text-5xl text-black font-instrument z-[1]">maxico</span>

                <div className=" grid grid-cols-3 gap-8 justify-items-center items-center z-[1]">
                    {navData.map((data) => (
                        <Link key={data.name} href={data.href}>
                            <span className="hidden lg:block text-xl">{data.name}</span>
                        </Link>
                    ))}
                </div>

                <Button />
            </div>
        </div>
    )
}

export default Navbar
