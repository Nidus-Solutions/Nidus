import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./Review";

const Testimonials: React.FC = () => {

    return (
        <Carousel className="bg-white text-black py-10 lg:py-20">
            <CarouselItem index={0}>
                <Review by="Carlos Silva">
                    Trabalhar com a equipe da Nidus foi uma experiência incrível. A dedicação e o profissionalismo são visíveis em cada etapa do projeto.
                </Review>
            </CarouselItem>

            <CarouselItem index={1}>
                <Review by="Ana Souza">
                    A qualidade do trabalho entregue pela Nidus é simplesmente excepcional. Eles realmente entendem as necessidades do cliente e entregam soluções personalizadas.
                </Review>
            </CarouselItem>

            <CarouselItem index={2}>
                <Review by="Mariana Oliveira">
                    A Gaby fez um trabalho magnífico no design do nosso site. A estética e a funcionalidade estão perfeitas.
                </Review>
            </CarouselItem>

            <CarouselItem index={4}>
                <Review by="Rafael Costa">
                    A Nidus superou todas as nossas expectativas. A atenção aos detalhes e a comunicação eficaz fizeram toda a diferença no resultado final.
                </Review>
            </CarouselItem>

            <CarouselItem index={4}>
                <Review by="Fernanda Gomes">
                    A equipe da Nidus é altamente competente e profissional. Eles entregaram um sistema robusto e eficiente que superou nossas expectativas.
                </Review>
            </CarouselItem>

            <CarouselItem index={5}>
                <Review by="Rodrigo Pereira">
                    Fiquei impressionado com a rapidez e a eficiência com que a Nidus entregou nosso projeto. Recomendo fortemente seus serviços.
                </Review>
            </CarouselItem>

            <CarouselItem index={6}>
                <Review by="Bruna Martins">
                    A Gaby transformou nossa visão em realidade com seu talento em design. Estamos extremamente satisfeitos com o resultado final.
                </Review>
            </CarouselItem>

            <CarouselItem index={7}>
                <Review by="Lucas Fernandes">
                    Thiago é um gênio da programação. Sua capacidade de encontrar soluções criativas para desafios técnicos é notável.
                </Review>
            </CarouselItem>

            <CarouselItem index={8}>
                <Review by="Juliana Rocha">
                    A parceria com a Nidus foi uma das melhores decisões que tomamos. A qualidade do trabalho e o compromisso com prazos são incomparáveis.
                </Review>
            </CarouselItem>
        </Carousel>
    );
}

export default Testimonials;