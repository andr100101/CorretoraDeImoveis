import { useEffect, useState } from "react";

import WaCarousel from "@awesome.me/webawesome/dist/react/carousel/index.js";
import WaCarouselItem from "@awesome.me/webawesome/dist/react/carousel-item/index.js";

interface CarouselImovelProps {
  idImovel: number;
}

export default function CarouselImovel({
  idImovel,
}: CarouselImovelProps) {
  const [imagens, setImagens] = useState<string[]>([]);

  useEffect(() => {
  const encontrarImagens = async () => {
    const encontradas: string[] = [];

    for (let i = 1; i <= 16; i++) {
      const caminho = `/imagens/${idImovel}/${i}.jpg`;

      const existe = await new Promise<boolean>((resolve) => {
        const img = new Image();

        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);

        img.src = caminho;
      });

      if (!existe) {
        break;
      }

      encontradas.push(caminho);
    }

    setImagens(encontradas);
  };

  encontrarImagens();
}, [idImovel]);

  if (imagens.length === 0) {
    return null;
  }

  return (
    <WaCarousel
      pagination
      navigation
      mouseDragging
      loop
    >
      {imagens.map((imagem, index) => (
        <WaCarouselItem key={imagem}>
          <img
            src={imagem}
            alt={`Imagem ${index + 1} do imóvel`}
            className="w-full h-full object-cover"
          />
        </WaCarouselItem>
      ))}
    </WaCarousel>
  );
}