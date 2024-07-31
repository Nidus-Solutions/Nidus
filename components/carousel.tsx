import { EmblaCarouselType } from "embla-carousel";
import ClassName from "embla-carousel-class-names";
import Autoplay from "embla-carousel-autoplay";
import React, { ReactNode, useCallback, useEffect } from "react";
import style from "@/styles/carousel.module.css";
import useEmblaCarousel from "embla-carousel-react";

interface ContextValue {
    embla: EmblaCarouselType | undefined
    selectedIndex: number
}

interface CarouselProps {
    className?: string
    children: ReactNode
}

export const CarouselContext = React.createContext<ContextValue>({
    embla: undefined,
    selectedIndex: -1
});

const Carousel: React.FC<CarouselProps> = ({ className, children }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [viewportRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false
    }, [ClassName(), Autoplay()]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
            <div className={`${style.viewport} w-full overflow-hidden ${className}`} ref={viewportRef}>
                <div className={`${style.container} flex justify-center`}>
                    {children}
                </div>
            </div>
        </CarouselContext.Provider>
    );
}

export default Carousel;