import { useState, useEffect } from "react";
import type { Imovel } from "../interfaces/Imovel";

import { FaHouse } from "react-icons/fa6";
import { ImEnlarge } from "react-icons/im";

interface DestaqueProps {
  idImovel: number;
}

export default function CardDestaque({ idImovel }: DestaqueProps) {
  const [imovel, setImovel] = useState<Imovel | null>(null);

  useEffect(() => {
    fetch("/imoveis.json")
      .then((response) => response.json())
      .then((data: Imovel[]) => {
        const encontrado = data.find(
          (item) => item.idImovel === Number(idImovel)
        );

        setImovel(encontrado ?? null);
      })
      .catch((error) => {
        console.error("Erro ao carregar imóveis:", error);
      });
  }, [idImovel]);

  if (!imovel) {
    return <h1>Imóvel não encontrado</h1>;
  }

  return (
    <div className="mb-6 flex flex-col cursor-pointer justify-center">
      <a href={`/imovel/${imovel.idImovel.toString()}`}><img src={`imagens/${imovel.idImovel}/1.jpg`} className="w-75 object-cover aspect-video duration-300 hover:w-77" /></a>
      <div className="flex items-center justify-start gap-2 mt-4">
      <div className="flex items-center gap-2">
                    <FaHouse className="text-secundaria w-6" />
                    <p className="text-large text-bold">
                      {imovel.m2Construido
                        ? `${imovel.m2Construido} m² construído`
                        : "Não disponível"}
                    </p>
                  </div>
      
      <div className="flex items-center gap-2">
                          <ImEnlarge className="text-secundaria w-6" />
                          <p className="text-large text-bold">
                            {imovel.m2Lote
                              ? `${imovel.m2Lote} m² de lote`
                              : "Não disponível"}
                          </p>
                        </div>
                      </div>
        <div className="flex items-center justify-between gap-2 mt-1">
      <h2 className="text-secundaria text-xl md:text-2xl font-bold">{imovel.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
      <a href={`/imovel/${imovel.idImovel}`} className="flex justify-center bg-terciaria duration-400 transition-colors hover:bg-secundaria p-2 w-28 h-auto text-white font-bold rounded ml-4 cursor-pointer">
        Ver detalhes
      </a>
    </div>
    </div>
  );
}