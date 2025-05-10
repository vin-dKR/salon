"use client"

import InnerParabola from "../svgs/InnerParabola"
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
        <div className="relative">
            <div className="">
                <TopFaded className="w-[350px] lg:w-[1400px]" />
                <InnerParabola />
            </div>

            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between w-[90%] lg:w-[70%] mt-10  xl:mt-40 lg:mx-0 left-1/2 -translate-x-[50%]">

                <div className="lg:hidden block pt-20">
                    <AnimatedTestimonials testimonials={testimonials} />
                </div>

                <div className="flex flex-col ">
                    <div className="text-8xl lg:text-[150px] xl:[200px] text-black font-instrument -mt-20 md:mt-50">
                        mexico
                    </div>

                    <h1 className="
                    text-9xl lg:text-[150px] xl:text-[200px] font-bold font-thebocone
                    text-transparent
                    bg-clip-text
                    bg-[url(/imgs/hair.png)]
                ">
                        SALON
                    </h1>
                </div>

                <div className="hidden lg:block mt-20">
                    <AnimatedTestimonials testimonials={testimonials} />
                </div>
            </div>

            <div className="relative h-15 flex items-center justify-center text-black">
                <div className="absolute rounded-3xl left-1/2 -translate-x-[50%] inset-0 bg-semipink border-4 border-white filter blur-sm w-[90%] lg:w-[60%] z-0"></div>
                <p className="relative text-sm md:lg lg:text-2xl text-shadow-md">
                    we offer A class cut, we have done 100k cut so far till 2025.
                </p>
            </div>

        </div>
    )
}

export default LandingHome
