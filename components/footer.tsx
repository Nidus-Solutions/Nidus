import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <footer className="min-h-full flex items-center justify-center bg-black text-white pt-10">
            <div className="flex flex-col items-center justify-center">
                <span className="text-[16px] font-light" >&copy; 2024 Nidus Solution. Todos os direitos reservados.</span>
            </div>
        </footer>
    )
}

export default Footer;