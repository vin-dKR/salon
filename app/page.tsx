import LandingHome from "@/components/home/Home";
import Portfolio from "@/components/portfolio/Portfolio";

export default function Home() {
    return (
        <div className="bg-theme h-full">
            <LandingHome />
            <Portfolio />
        </div>
    );
}
