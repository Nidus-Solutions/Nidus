import React, { useContext, useCallback } from "react";
import { CarouselContext } from "@/components/carousel";
import styles from "@/styles/carousel.module.css";

interface CarouselItemProps {
    index: number
    children: JSX.Element
}

const CarouselItem: React.FC<CarouselItemProps> = ({ index, children }) => {
    const { embla: emblaApi, selectedIndex } = useContext(CarouselContext);
    const isActive = selectedIndex === index;
    const handleClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollTo(index);
    }, [emblaApi, index]);

    return (
        <div
            className={`${styles.slide} realative ${isActive ? 'active' : ''}`}
            onClick={handleClick}
        >
            {children}
        </div>
    );
}

export default CarouselItem;