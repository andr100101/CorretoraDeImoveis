import "../App.css";

import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardDestaque from "../components/CardDestaque";
import SEO from "../components/SEO";
import type { Imovel } from "../interfaces/Imovel";

import { TextAnimate } from "../components/magicui/text-animate";

export default function CatalogoPage() {
  const [imoveis, setImoveis] = useState<Imovel[]>([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    fetch("/imoveis.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro HTTP ao carregar imoveis.json: ${response.status}`);
        }

        return response.json();
      })
      .then((data: Imovel[]) => {
        setImoveis(data.sort(() => Math.random() - 0.5));
      })
      .catch((error) => {
        console.error("Erro ao carregar imóveis:", error);
      });
  }, []);

  const imoveisFiltrados = imoveis.filter((imovel) => {
    const termo = pesquisa.toLowerCase().trim();

    if (!termo) return true;

    return (
      imovel.rua.toLowerCase().includes(termo) ||
      imovel.bairro.toLowerCase().includes(termo) ||
      imovel.cidade.toLowerCase().includes(termo) ||
      imovel.estado.toLowerCase().includes(termo) ||
      (imovel.descricao?.toLowerCase().includes(termo) ?? false)
    );
  });

  return (
    <main className="bg-fundo2">

      <SEO
        title="Imóveis à venda em Paula Freitas | Marli Peterhans"
        description="Confira todos os imóveis disponíveis para venda em Paula Freitas e região. Encontre casas, terrenos, chácaras e imóveis comerciais com Marli Peterhans Corretora de Imóveis."
      />

      <div className="bg-white min-h-screen flex flex-col items-center md:w-2/3 mx-auto">

        <Navbar />

        <div className="w-full px-6 md:px-10 mt-10">

          <TextAnimate
            animation="slideLeft"
            by="word"
            className="text-black text-2xl md:text-4xl"
          >
            Todos os imóveis
          </TextAnimate>

          <div className="w-full mt-6">
            <input
              type="text"
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
              placeholder="Pesquise por rua, bairro ou cidade..."
              className="w-full border-2 border-gray-300 rounded-lg p-3 text-black outline-none focus:border-secundaria"
            />
          </div>

          <p className="text-gray-600 mt-4">
            {imoveisFiltrados.length} imóvel(is) encontrado(s)
          </p>

          <div className="flex flex-wrap items-center justify-center gap-12 mt-6 pb-10">

            {imoveisFiltrados.map((imovel) => (
              <CardDestaque
                key={imovel.idImovel}
                idImovel={imovel.idImovel}
              />
            ))}

          </div>

          {imoveisFiltrados.length === 0 && (
            <div className="w-full text-center py-16">

              <h2 className="text-2xl font-bold text-gray-600">
                Nenhum imóvel encontrado
              </h2>

              <p className="text-gray-500 mt-2">
                Tente pesquisar por outro endereço, bairro ou cidade.
              </p>

            </div>
          )}

        </div>

        <Footer />

      </div>

    </main>
  );
}