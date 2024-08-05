
import React from "react";

const TrustedBy: React.FC = () => {
    return (
        <section className="bg-white text-black min-h-screen flex flex-col justify-center gap-16 md:gap-32">
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-xl lg:text-2xl tracking-tight text-center px-10 !leading-[1.5rem]">
                    <span className="whitespace-nowrap font-bold">Nidus!</span>{' '}
                    <span className="whitespace-nowrap">Seu significado vindo do latin é &ldquo; ninho &rdquo;. Isso que queremos para sua empresa</span>
                </h3>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="container mx-auto lg:max-w-[70%] lh:px-10">
                    <h3 className="text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem]">
                        Acreditamos em uma boa comunicação e em um processo de desenvolvimento totalmente transparente.
                    </h3>
                </div>
            </div>
        </section>
    )
};

export default TrustedBy;