import Appointment from "@/components/appointment/AppointmentPage";
import BentoWrapper from "@/components/bento/BentoWrapper";
import Footer from "@/components/footer/Footer";
import LandingHome from "@/components/home/Home";
import Portfolio from "@/components/portfolio/Portfolio";

export default function Home() {
    return (
        <div className="bg-theme h-full pb-40">
            <LandingHome />
            <Portfolio />
            <BentoWrapper />
            <Appointment />
            <Footer />
        </div>
    );
}
