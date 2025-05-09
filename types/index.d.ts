import { ReactNode } from "react";

export { }

declare global {
    interface ServiceItem {
        title: string;
        description: string;
        image: string;
    }

    interface NavData {
        name: string,
        href: string
    }

    interface ButtonProps {
        children: ReactNode,
        className: string
    }

    interface CardData {
        id: number
        src: string
        text: string
    }
}
