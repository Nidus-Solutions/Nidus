import React from 'react'
import Member from './member';

const AboutUs: React.FC = () => {
    return (
        <section className='flex flex-col bg-white py-20 text-3xl md:text-4xl'>
            <div className='conteiner mx-auto px-11 '>
                <p className='mb-10 leading-tight max-w-5xl mx-auto text-3xl lg:text-4xl tracking-tight '>
                    <strong>Nossa missão é transformar ideias em soluções digitais inovadoras.</strong>
                    {' '}Somos apaixonados por tecnologia e design, e nos dedicamos a oferecer as melhores soluções em websites, sistemas e design para nossos clientes.
                </p>
                <div className='leading-tight max-w-5xl mx-auto text-[25px] md:text-3xl lg:text-4xl tracking-tight flex flex-col gap-2'>
                    <p>Nossos serviços</p>
                    <p>- <strong>Da Ideia ao Ar</strong>: Design e desenvolvimento completos para os sites e sistemas de nossos clientes.</p>
                    <p>- <strong>Otimização de desempenho</strong>: Otimização de sites e sistemas para melhorar a experiência do usuário.</p>
                    <p>- <strong>Design</strong>: Design de logos e identidades visuais para empresas e marcas.</p>
                </div>
            </div>
            <div className='container mx-auto px-11 text-center mt-28'>
                <div className='p-6 md:p-12 font-bold z-10 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex flex-col items-center justify-center flex-col'>
                    <h3 className='mb-6 text-4xl xl:text-5xl'>Nossa Equipe</h3>
                </div>
                <div className='mt-10 grid grid-cols-1 md:grid-cols-3 md:gap-10 '>
                    <Member
                        name='João Gustavo Bispo'
                        socialId='@jgbiispo'
                        link='https://www.instagram.com/jgbiispo'
                        id='jgbiispo'
                        role='Desenvolvedor'
                    />
                    <Member
                        name='Thaigo Viana'
                        socialId='@thiago_viana'
                        link='https://www.instagram.com/thiago_viana'
                        id='thiago'
                        role='Desenvolvedor'
                    />
                    <Member
                        name='Gabriela Margelo'
                        socialId='@gaby_margelo'
                        link='https://www.instagram.com/gaby_margelo'
                        id='gaby'
                        role='Designer'
                    />
                </div>
            </div>
        </section >
    )
}

export default AboutUs;