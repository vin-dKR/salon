import Appointment from "@/components/appointment/AppointmentPage";
import BentoWrapper from "@/components/bento/BentoWrapper";
import LandingHome from "@/components/home/Home";
import Portfolio from "@/components/portfolio/Portfolio";

export default function Home() {
    return (
        <div className="bg-theme h-full mb-100">
            <LandingHome />
            <Portfolio />
            <BentoWrapper />
            <Appointment />
        </div>
    );
}
