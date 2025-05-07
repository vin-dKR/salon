"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

import { useEffect, useState } from "react";

type Testimonial = {
    id: number
    src: string;
};

export const AnimatedTestimonials = ({
    testimonials,
    autoplay = false,
}: {
    testimonials: Testimonial[];
    autoplay?: boolean;
}) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const isActive = (index: number) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10;
    };
    return (
        <div className="relative px-4 mx-auto py-10 lg:py-20 antialiased w-[400px] lg:w-[500px] md:px-8 lg:px-12">
            <div className="relative grid grid-cols-1 gap-30 lg:gap-40">
                <div>
                    <div className="relative h-80 w-full">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.src}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: randomRotateY(),
                                    }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index) ? 0 : randomRotateY(),
                                        zIndex: isActive(index)
                                            ? 40
                                            : testimonials.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: randomRotateY(),
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 origin-bottom"
                                >
                                    <div className="rounded-3xl bg-gradient-to-tl from-[#FF67B6] to-[#FBFBFB] border-white p-1">
                                        <div className="w-full bg-white/40 rounded-3xl backdrop-blur-md h-[440px] p-3">
                                            <Image
                                                src={testimonial.src}
                                                alt={`this is ${testimonial.id}`}
                                                width={500}
                                                height={500}
                                                draggable={false}
                                                className="h-[360px] w-full rounded-3xl object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="flex gap-4 pt-12 items-center justify-center md:pt-0">
                    <button
                        onClick={handlePrev}
                        className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100/30 dark:bg-semipink"
                    >
                        <IconArrowLeft className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:rotate-12" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100/30 dark:bg-semipink"
                    >
                        <IconArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:-rotate-12" />
                    </button>
                </div>
            </div>
        </div>
    );
};

