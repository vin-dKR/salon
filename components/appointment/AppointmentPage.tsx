"use client"
import Image from "next/image"
import Input from "./Input"
import Button from "./Button"

const Appointment = () => {
    return (
        <div className="relative mt-40 w-[90%] xl:w-[60%] mx-auto rounded-3xl border border-white/20">
            <div className="flex flex-row justify-between p-16">
                <div className="w-[40%]">
                    <Image
                        src="/imgs/appoinment/image.png"
                        alt=""
                        height={1000}
                        width={1000}
                    />
                </div>

                <div className="flex flex-col w-[50%] ">
                    <div className="flex flex-col gap-10 mb-16">
                        <h1 className="text-3xl text-black font-bold text-center">Book an Appointment</h1>

                        <div className="flex flex-row justify-between">
                            <Input
                                maxWidth="250px"
                                label="Name"
                                placeholder="enter the name"
                                type="email"
                            />

                            <Input
                                maxWidth="300px"
                                label="Service Type"
                                placeholder="service type"
                                type="select"
                                options={['make up', 'spa', 'pre bridal']}
                            />
                        </div>

                        <div>
                            <Input
                                maxWidth="400px"
                                label="Email Address"
                                placeholder="Enter your email"
                                type="email"
                            />
                        </div>

                        <div className="flex flex-row justify-between">
                            <Input
                                maxWidth="300px"
                                label="Select Date"
                                type="date"
                            />
                            <Input
                                maxWidth="300px"
                                label="Select Time"
                                type="time"
                            />
                        </div>
                    </div>
                    <Button
                        maxWidth="300px"
                        label="Submit"
                        onClick={() => alert('Button clicked!')}
                    />
                </div>
            </div>
        </div>
    )
}

export default Appointment
