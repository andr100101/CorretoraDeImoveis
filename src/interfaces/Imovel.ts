export interface Imovel {
  idImovel: number;
  rua: string;
  numero: string | null;
  estado: string;
  bairro: string;
  cidade: string;
  m2Lote: number;
  m2Construido: number | null;
  qtdBanheiros: number;
  qtdDormitorios: number;
  qtdSuites: number;
  descricao: string;
  valor: number;
}