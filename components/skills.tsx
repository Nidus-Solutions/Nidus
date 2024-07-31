import React, { useContext, useRef } from "react";
import style from "@/styles/skills.module.css";
import { ScrollContext } from "@/utils/scroll-observer";

const opacityForBlock = (sectionProgesss: number, blockNo: number) => {
    const progress = sectionProgesss - blockNo;
    if (progress >= 0 && progress <= 1) return 1;
    return 0.2;
};

const Skills: React.FC = () => {
    const { scrollY } = useContext(ScrollContext);
    const refContainer = useRef<HTMLDivElement>(null);

    const numOfPages = 2;
    let progress = 0;

    if (refContainer.current) {
        const { clientHeight, offsetTop } = refContainer.current;
        const screenH = window.innerHeight;
        const halfH = screenH / 2;
        const percentY = (scrollY + screenH - offsetTop) / (clientHeight + screenH);

        Math.min(
            clientHeight + halfH,
            Math.max(0, scrollY + screenH - offsetTop - halfH) / clientHeight
        );

        progress = Math.min(numOfPages - 0.5, Math.max(0, percentY * numOfPages));

    }

    return (
        <div ref={refContainer} className="bg-black text-white">
            <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py36 flex flex-col justify-center items-center text-4xl md:text-6xl lh:text-7xl tracking-tight font-semibold">
                <div className="leading-[1.15]">
                    <div
                        className={style.skillText}
                        style={{ opacity: opacityForBlock(progress, 0) }}
                    >
                        Conhecemos nossas ferramentas de cabo a rabo.
                    </div>
                    <span
                        className={`${style.skillText} inline-block after:content-['_']`}
                        style={{ opacity: opacityForBlock(progress, 1) }}
                    >
                        Nossa equipe já contribuiu com diversos commits para projetos open-source e já estamos
                        trabalhando com as tecnologias mais recentes do mercado.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Skills;