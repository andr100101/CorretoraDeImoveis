import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa6";
import "../App.css";

import Navbar from "../components/Navbar";
import { TextAnimate } from "../components/magicui/text-animate";
import Footer from "../components/Footer";

export default function SobreNosPage() {
  return (
    <main className="bg-fundo2">
      <div className="bg-white min-h-screen flex flex-col items-center md:w-2/3 mx-auto">

        <Navbar />

        <div className="w-full px-6 md:px-10 mt-10 pb-16">

          {/* Título */}
          <TextAnimate
            animation="slideLeft"
            by="word"
            className="text-black text-2xl md:text-4xl"
          >
            Sobre nós
          </TextAnimate>

          {/* Texto institucional */}
          <section className="mt-8">
            <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-5">

              <p>
                Com <strong>12 anos de experiência</strong> no mercado imobiliário,
                atua como corretora de imóveis oferecendo um atendimento próximo,
                profissional e voltado às necessidades de cada cliente.
              </p>

              <p>
                Sua atuação é concentrada principalmente em{" "}
                <strong>Paula Freitas, no Paraná</strong>, cidade onde possui
                conhecimento da região e de suas características, mas também atende
                clientes e oportunidades imobiliárias em outras localidades.
              </p>

              <p>
                Entre os serviços oferecidos estão a{" "}
                <strong>venda, divulgação e avaliação de imóveis</strong>,
                acompanhando cada oportunidade de forma individualizada. O trabalho
                envolve desde a apresentação e divulgação das propriedades até o
                auxílio aos interessados durante o processo de negociação.
              </p>

              <p>
                Atua com <strong>diferentes tipos de imóveis</strong>, incluindo
                imóveis residenciais, comerciais, terrenos, propriedades rurais e
                outras oportunidades disponíveis no mercado. Dessa forma, busca
                atender diferentes necessidades, seja para quem deseja encontrar um
                novo lar, investir, adquirir um terreno ou negociar uma propriedade.
              </p>

              <p>
                Ao longo de sua trajetória profissional, construiu sua experiência
                através do contato direto com compradores, vendedores e proprietários,
                buscando proporcionar um processo de negociação claro, seguro e
                transparente.
              </p>

              <p>
                Se você está procurando um imóvel em <strong>Paula Freitas e região</strong>,
                ou deseja divulgar e avaliar uma propriedade para venda, entre em
                contato para conhecer as oportunidades disponíveis.
              </p>

            </div>
          </section>

          {/* Contato */}
          <section className="mt-14">

            <TextAnimate
              animation="slideLeft"
              by="word"
              className="text-black text-2xl md:text-3xl"
            >
              Entre em contato
            </TextAnimate>

            <p className="text-gray-600 mt-3 text-base md:text-lg">
              Acompanhe o trabalho e entre em contato através das redes sociais.
            </p>

            {/* Redes sociais */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/marlipeterhanscorretoraimoveis/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-secundaria hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">
                  <FaInstagram />
                </div>

                <h3 className="text-lg font-semibold text-black">
                  Instagram
                </h3>

                <p className="text-gray-500 mt-1">
                  Acompanhe os imóveis
                </p>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100032787776036"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-secundaria hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">
                  <FaFacebook />
                </div>

                <h3 className="text-lg font-semibold text-black">
                  Facebook
                </h3>

                <p className="text-gray-500 mt-1">
                  Veja nossas novidades
                </p>
              </a>

              {/* WhatsApp */}
              <a
                href="https://api.whatsapp.com/send?phone=5542988912782"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-secundaria hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">
                  <FaWhatsapp />
                </div>

                <h3 className="text-lg font-semibold text-black">
                  WhatsApp
                </h3>

                <p className="text-gray-500 mt-1">
                  Fale diretamente conosco
                </p>
              </a>

            </div>

          </section>

        </div>
        <Footer />
      </div>
    </main>
  );
}