import '../App.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import CarrosselImovel from "../components/CarrosselImovel";
import SEO from "../components/SEO";

import type { Imovel } from "../interfaces/Imovel";
import { FaHouse } from "react-icons/fa6";
import { ImEnlarge } from "react-icons/im";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { PiToilet } from "react-icons/pi";
import { TextAnimate } from '../components/magicui/text-animate';
import Footer from '../components/Footer';




export default function ImovelPage() {
  const { id } = useParams();
  
  
  const [imovel, setImovel] = useState<Imovel | null>(null);

  useEffect(() => {
    fetch("/imoveis.json")
      .then((response) => response.json())
      .then((data: Imovel[]) => {
        const encontrado = data.find(
          (imovel) => imovel.idImovel === Number(id)
        );

        setImovel(encontrado ?? null);
      })
      .catch((error) => {
        console.error("Erro ao carregar imóveis:", error);
      });
  }, [id]);

  if (!imovel) {
    return (
      <>
        <Navbar />

        <main>
          <h1>Imóvel não encontrado</h1>
        </main>
      </>
    );
  }

  const endereco = `${imovel.rua}, ${imovel.numero}, ${imovel.bairro}, ${imovel.cidade} - ${imovel.estado}`;

  const mapaUrl = `https://www.google.com/maps?q=${encodeURIComponent(endereco)}&output=embed`;

  const linkImovel = window.location.href;

  const mensagem = `Olá! Tenho interesse neste imóvel e gostaria de receber mais informações.

  Link do imóvel:
  ${linkImovel}`

  const urlWhatsApp = `https://wa.me/5542988912782?text=${encodeURIComponent(mensagem)}`;

  



  return (
    <>
    <SEO
  title={`${imovel.rua}, ${imovel.numero} | Imóvel à venda em ${imovel.cidade}`}
  description={`Imóvel à venda em ${imovel.cidade}, ${imovel.estado}. ${imovel.qtdDormitorios} dormitórios, ${imovel.m2Lote} m² de lote e ${imovel.m2Construido ?? "área construída não informada"} m² construídos. Valor: ${imovel.valor.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
    }
  )}.`}
 />
      <main className="bg-fundo2 w-full">
          <div className="bg-white min-h-screen flex flex-col items-center md:w-2/3 mx-auto">
                <Navbar />
                  <h2 className="w-full p-3 md:p-6 text-black text-2xl md:text-4xl text-left">Imagens do Imóvel : </h2>
                <CarrosselImovel idImovel={imovel.idImovel} />
                <div className="w-full gap-1 md:gap-4">
                <div className="w-full flex items-center justify-between gap-2 mt-4 px-4 md:justify-start md:gap-6 md:px-7 md:mb-6">
                  <div className="flex items-center gap-2">
                    <FaHouse className="text-secundaria w-8" />
                    <p className="text-large text-bold">
                      {imovel.m2Construido
                        ? `${imovel.m2Construido} m² construídos`
                        : "Informação não disponível"}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <ImEnlarge className="text-secundaria w-8" />
                    <p className="text-large text-bold">
                      {imovel.m2Lote
                        ? `${imovel.m2Lote} m² de lote`
                        : "Informação não disponível"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row px-4 md:px-6 gap-2">
                  <div className="flex items-center">
                  <FaMapMarkerAlt className="text-secundaria w-10 mr-4"/> <p className="text-large text-bold pr-2">{imovel.rua}, {imovel.bairro}, {imovel.cidade} - {imovel.estado}</p>
                  </div>

                  <div className="flex items-center">
                  <FaBed className="text-secundaria w-10 mr-4"/> <p className="text-medium md:text-large text-bold pr-2">{imovel.qtdDormitorios} quarto(s) {imovel.qtdSuites > 0 && ` + ${imovel.qtdSuites} suítes`}</p>
                  </div>
                  
                  <div className="flex items-center">
                  <PiToilet className="text-secundaria w-10 mr-4"/> <p className="text-medium md:text-large text-bold pr-2">{imovel.qtdBanheiros} banheiro(s)</p>
                  </div>
                </div>
                <div className="flex flex-wrap px-4 md:px-6">
                    <TextAnimate
                              animation="slideLeft"
                              by="word"
                              className="text-secundaria text-2xl md:text-4xl font-bold mt-4"
                            >
                              {imovel.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </TextAnimate>
                    <a href={urlWhatsApp} target="_blank" rel="noopener noreferrer" className="bg-terciaria duration-400 transition-colors hover:bg-secundaria p-4 w-16 h-auto text-white font-bold rounded ml-4 cursor-pointer text-large md:text-xl min-w-40 md:min-w-50">Mais informações</a>
                    </div>
                    <div className="px-4 md:px-6">
                        <h2 className="text-secundaria text-2xl md:text-4xl mt-4 font-bold">Descrição:</h2>
                        <p className="text-medium md:text-large text-bold pr-2">{imovel.descricao}</p>
                </div>
                <h2 className="text-secundaria  text-2xl md:text-4xl mt-4 font-bold ml-4 md:ml-6 pb-2">Localização:</h2>
                </div>
                <div className="w-5/6">
                  <div className="w-full h-96 mb-6">
                    <iframe
                      src={mapaUrl}
                      className="w-full h-full rounded-xl"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
                
          <Footer />
          </div>

      </main>
    </>
  );
}