"use client"
import Image from "next/image"
import Input from "./Input"
import Button from "./Button"

const Appointment = () => {
    return (
        <div className="relative mt-40 w-[90%] xl:w-[60%] mx-auto rounded-3xl border border-white/20 overflow-hidden">
            <div className="absolute bg-[url(/svgs/rays.svg)] w-[100%] bg-no-repeat bg-cover bg-theme h-[100%] z-0" />
            <div className="relative flex flex-col md:flex-row justify-between p-4 sm:p-8 md:p-16 z-10">
                <div className="w-full md:w-[40%] mb-6 md:mb-0">
                    <Image
                        src="/imgs/appoinment/image.png"
                        alt=""
                        height={1000}
                        width={1000}
                        className="w-full h-auto object-cover"
                    />
                </div>

                <div className="flex flex-col w-full md:w-[50%]">
                    <div className="flex flex-col gap-6 sm:gap-10 mb-8 sm:mb-16">
                        <h1 className="text-xl sm:text-2xl md:text-3xl text-black font-bold text-center">Book an Appointment</h1>

                        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
                            <Input
                                maxWidth="100%"
                                label="Name"
                                placeholder="enter the name"
                                type="email"
                            />

                            <Input
                                maxWidth="100%"
                                label="Service Type"
                                placeholder="service type"
                                type="select"
                                options={['make up', 'spa', 'pre bridal']}
                            />
                        </div>

                        <div>
                            <Input
                                maxWidth="100%"
                                label="Email Address"
                                placeholder="Enter your email"
                                type="email"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
                            <Input
                                maxWidth="100%"
                                label="Select Date"
                                type="date"
                            />
                            <Input
                                maxWidth="100%"
                                label="Select Time"
                                type="time"
                            />
                        </div>
                    </div>
                    <Button
                        maxWidth="100%"
                        label="Submit"
                        onClick={() => alert('Button clicked!')}
                    />
                </div>
            </div>
        </div>
    )
}

export default Appointment
