interface HeroProps {
  imagem: string;
  titulo: string;
  subtitulo: string;
}

import { TextAnimate } from "./magicui/text-animate";



function Hero({ imagem, titulo, subtitulo}: HeroProps) {
  
  
  return (

    <section className="relative w-full h-[500px] flex items-center p-5 overflow-hidden">
            <img 
        src={imagem} 
        alt="Imagem de destaque" 
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      

      <div className="absolute inset-0 bg-black/50 z-10 hover:bg-black/75 duration-2200"></div>

      <div className="relative z-10 text-white px-4 md:px-10 max-w-3xl">
        
        <TextAnimate animation="slideUp" by="word" duration={2} className="text-2xl text-left md:text-4xl mb-4 max-w-4/5">
          {titulo}
        </TextAnimate>
        
        <p className="text-l text-left md:text-1xl mb-2">
          {subtitulo}
        </p>
        

      </div>
      
    </section>
  )
}

export default Hero