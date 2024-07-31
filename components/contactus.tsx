import React, { useState, useCallback } from "react";
import Image from "next/image";
import axio from "axios";

const ContactUs: React.FC = () => {

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    });

    const [inputs, setInputs] = useState({
        company: "",
        email: "",
        message: ""
    });

    const handlOnChange = useCallback((e: { persist: () => void; target: { id: any; value: any; }; }) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
        });
    }, []);

    const handleServerResponse = useCallback((ok: any, msg: any) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg }
            });
            setInputs({
                company: "",
                email: "",
                message: ""
            });
        } else {
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg }
            });
        }
    }, []);

    const handleOnSubmit = useCallback((e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axio({
            method: "POST",
            url: process.env.NEXT_PUBLIC_CONTACT_FORM,
            data: inputs
        })
            .then(() => {
                handleServerResponse(true, "Mensagem enviada com sucesso! Entraremos em contato em breve.");
            })
            .catch((error) => {
                handleServerResponse(false, "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.");
                console.error(error.response.data.error);
            });
    }, [inputs, handleServerResponse]);

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
                <form onSubmit={handleOnSubmit} className="flex flex-col gap-4 mt-10 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
                    {status.info.error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">Error</strong>:{' '}
                            <span className="block sm:inline">{status.info.msg}</span>
                        </div>
                    )}

                    {status.submitted && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">Enviado</strong>:{' '}
                            <span className="block sm:inline">{status.info.msg}</span>
                        </div>
                    )}

                    <input
                        className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
                        type="text"
                        name="company"
                        id="company"
                        placeholder="Seu nome ou da empresa"
                        onChange={handlOnChange}
                        value={inputs.company}
                        required
                    />
                    <input
                        className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email para contato"
                        onChange={handlOnChange}
                        value={inputs.email}
                        required

                    />
                    <textarea
                        className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"
                        id="message"
                        name="message"
                        maxLength={1048576}
                        placeholder="Escreva sua mensagem"
                        onChange={handlOnChange}
                        value={inputs.message}
                        required

                    ></textarea>
                    <div className="text-center mt-10">
                        <button
                            type="submit"
                            className="bg-white text-black outline-none border-2 border-white rounded-3xl px-8 py-2"
                        >
                            {status.submitting ? "Enviando..." : "Enviar"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;