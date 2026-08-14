import './App.css'
import 'lenis/dist/lenis.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import CardDestaque from './components/CardDestaque'
import heroImage from './assets/hero.jpg'
import { TextAnimate } from './components/magicui/text-animate'

import ImovelPage from './pages/imovelPage'
import CatalogoPage from './pages/catalogoPage'
import SobreNosPage from './pages/sobreNosPage'

import type { Imovel } from './interfaces/Imovel'
import { useState, useEffect } from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'
import Footer from './components/Footer'

function Home() {

  const [imoveis, setImoveis] = useState<Imovel[]>([])

  useEffect(() => {
    document.title = 'Imóveis em Paula Freitas e Região | Marli Peterhans'

    const description =
      'Encontre imóveis à venda em Paula Freitas e região. Casas, terrenos, chácaras e outros imóveis com Marli Peterhans Corretora de Imóveis.'

    let meta = document.querySelector('meta[name="description"]')

    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', description)

    fetch("/imoveis.json")
      .then((response) => response.json())
      .then((data: Imovel[]) => {
        setImoveis(data)
      })
      .catch((error) => {
        console.error("Erro ao carregar imóveis:", error)
      })
  }, [])

  const ultimosIds = imoveis
    .slice(-6)
    .reverse()
    .map((imovel) => imovel.idImovel)

  return (
    <main className="bg-primaria">
      <div className="bg-white min-h-screen flex flex-col items-center md:w-2/3 mx-auto">

        <Navbar />

        <Hero
          imagem={heroImage}
          titulo="Encontre o imóvel ideal para você em Paula Freitas e Região!"
          subtitulo="Venda e avaliação de terrenos, imóveis, chácaras e outros"
        />

        <div className="w-full max-w-7xl px-6 md:px-10 mt-10">

          <TextAnimate
            animation="slideLeft"
            by="word"
            className="text-black text-2xl md:text-4xl mb-6 pl-6"
          >
            Imóveis em destaque
          </TextAnimate>

          <div className="flex flex-wrap items-center justify-center gap-12">
            {ultimosIds.map((id) => (
              <CardDestaque
                key={id}
                idImovel={id}
              />
            ))}
          </div>

          <div className="m-6 justify-center items-center flex flex-col md:flex-row gap-4">
            <a
              href="/catalogo"
              className="bg-terciaria duration-400 transition-colors hover:bg-secundaria p-4 w-1/3 not-md:w-2/3 text-center h-auto text-white font-bold rounded ml-4 cursor-pointer text-large md:text-2xl mt-6 mb-10"
            >
              Ver todos
            </a>
          </div>

          <TextAnimate
            animation="slideLeft"
            by="word"
            className="text-black text-2xl md:text-4xl mb-6 pl-6"
          >
            Acompanhe nossas redes sociais
          </TextAnimate>

          <div className="flex flex-row-reverse justify-center gap-4">

            <a
              href="https://www.instagram.com/marlipeterhanscorretoraimoveis/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-1/2 border-2 border-gray-200 rounded-xl p-6 pl-12 pr-12 flex flex-col items-center justify-center text-center hover:border-secundaria hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-3">
                <FaInstagram />
              </div>

              <h3 className="text-lg font-semibold text-black">
                Instagram
              </h3>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100032787776036"
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-1/2 border-2 border-gray-200 rounded-xl p-6 pl-12 pr-12 flex flex-col items-center justify-center text-center hover:border-secundaria hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-3">
                <FaFacebook />
              </div>

              <h3 className="text-lg font-semibold text-black">
                Facebook
              </h3>
            </a>

          </div>

        </div>

        <Footer />

      </div>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/imovel/:id" element={<ImovelPage />} />

        <Route path="/catalogo" element={<CatalogoPage />} />

        <Route path="/sobre" element={<SobreNosPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App