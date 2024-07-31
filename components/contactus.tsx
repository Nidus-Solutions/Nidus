import React, { useState, useCallback } from "react";
import Image from "next/image";

const ContactUs: React.FC = () => {

    return (
        <div className="bg-black text-white flex flex-col justify-center items-center min-h-screen">
            <div className="flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6">
                <div>
                    <Image
                        src={"/assets/Logo-img.png"}
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                </div>
                <h2 className="text-4xl font-bold">Fale com a gente</h2>
                <form className="flex flex-col gap-4 mt-10 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
                    <input
                        className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
                        type="text"
                        name="companyName"
                        id="companyName"
                        placeholder="Seu nome ou da empresa"
                        required
                    />
                    <input
                        className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email para contato"
                        required
                    />
                    <textarea
                        className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"
                        id="menssage"
                        name="menssage"
                        maxLength={1048576}
                        placeholder="Escreva sua mensagem"
                        required
                    ></textarea>
                    <div className="text-center mt-10">
                        <button
                            type="submit"
                            className="bg-white text-black outline-none border-2 border-white rounded-3xl px-8 py-2"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;