import React from 'react'
import Member from './member';

const AboutUs: React.FC = () => {
    return (
        <section className='flex flex-col bg-white py-20 text-3xl md:text-4xl'>
            <div className='conteiner mx-auto px-11 '>
                <p className='leading-tight max-w-5xl mx-auto text-3xl lg:text-4xl tracking-tight text-justify'>
                    <strong>Nossa missão é transformar ideias em soluções digitais inovadoras.</strong>
                    Somos apaixonados por tecnologia e design, e nos dedicamos a oferecer as melhores soluções em websites, sistemas e design para nossos clientes.
                </p>
            </div>
            <div className='container mx-auto px-11 text-center mt-28'>
                <div className='p-12 font-bold z-10 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex items-center justify-center flex-col'>
                    <h3 className='mb-6 text-4xl xl:text-5xl'>Nossa Equipe</h3>
                </div>
                <div className='mt-10 grid grid-cols-3  gap-6'>
                    <Member
                        name='João Gustavo Bispo'
                        socialId='@jgbiispo'
                        link='https://www.instagram.com/jgbiispo'
                        id='jgbiispo'
                        role='Desenvolvedor'
                    />
                    <Member
                        name='Thaigo Viana'
                        socialId='@th'
                        link='https://www.instagram.com/th'
                        id='th'
                        role='Desenvolvedor'
                    />
                    <Member
                        name='Joana'
                        socialId='@joana'
                        link='https://www.instagram.com/joana'
                        id='joana'
                        role='Designer'
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutUs;