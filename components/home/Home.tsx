"use client"
import TopFaded from "../svgs/TopFaded"
import { AnimatedTestimonials } from "../ui/AnimatedTestemonials"
import Navbar from "./Navbar"

const testimonials = [
    { id: 1, src: "/imgs/testemonials/testemonial1.jpg" },
    { id: 2, src: "/imgs/testemonials/testemonial2.jpg" },
    { id: 3, src: "/imgs/testemonials/testemonial3.jpg" },
    { id: 4, src: "/imgs/testemonials/testemonial4.jpg" },
]

const LandingHome = () => {
    return (
        <div>
            <div className="">
                <TopFaded className="w-[350px] lg:w-[1400px]" />
            </div>

            <Navbar />

            <div className="relative flex flex-col lg:flex-row justify-between w-[90%] lg:w-[70%] lg:mx-0 left-1/2 -translate-x-[50%]">

                <div className="lg:hidden block">
                    <AnimatedTestimonials testimonials={testimonials} />
                </div>

                <div className="flex flex-col ">
                    <div className="text-8xl lg:text-[200px] text-black font-instrument lg:mt-42">
                        mexico
                    </div>

                    <h1 className="
                    text-9xl lg:text-[200px] font-bold font-thebocone
                    text-transparent
                    bg-clip-text
                    bg-[url(/imgs/hair.png)]
                ">
                        SALON
                    </h1>
                </div>

                <div className="hidden lg:block mt-10">
                    <AnimatedTestimonials testimonials={testimonials} />
                </div>
            </div>
        </div>
    )
}

export default LandingHome
