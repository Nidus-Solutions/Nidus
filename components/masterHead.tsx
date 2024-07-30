import React, { useRef, useContext } from 'react';
import Image from 'next/image';
import { ScrollContext } from '@/utils/scroll-observer';

const MasterHead: React.FC = () => {
    const refContainer = useRef<HTMLDivElement>(null);
    const { scrollY } = useContext(ScrollContext);

    let progress = 0;

    const { current: elContainer } = refContainer;

    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight);
    }

    return (
        <div
            ref={refContainer}
            className='min-h-screen flex flex-col items-center justify-between sticky top-0 -z-10'
            style={{
                transform: `translateY(${progress * 30}vh)`
            }}
        >
            <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover'>
                <source src='/assets/videos/masthead-bg.mp4' type='video/mp4' />
            </video>
            <div className='z-10 flex-grow-0 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] pb-20 md:pb-3 transition-all durantion-1000'>
                <Image
                    src="/assets/icons/logo.png"
                    width={100}
                    height={100}
                    alt="Scroll Down"
                />
            </div>
            <div className='p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.8)] text-center flex items-center justify-center flex-col'>
                <h1 className='mb-2 text-4xl xl:text-7xl'>Nidus</h1>
                <span className='mb-2 text-2xl xl:text-2xl tracking-widest'>
                    Onde criatividade e tecnologia se encontram
                </span>
            </div>
            <div className='z-10 flex-grow-0 drop-shadow-[0_5px_3px_rgba(0,0,0,0.5)] pb-20 md:pb-10 transition-all durantion-1000'>
                <Image
                    src="/assets/icons/arrow-down.png"
                    width={128 / 3}
                    height={144 / 3}
                    alt="Scroll Down"
                />
            </div>
        </div >
    )
}

export default MasterHead;