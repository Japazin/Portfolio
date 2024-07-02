import React, { useState, Children, ReactNode } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import "./App.css";

const VISIBILIDADE_MAXIMA = 3;

interface CartaoProps {
  titulo: string;
  conteudo: string;
}

const CONTEUDO_CARTOES: CartaoProps[] = [
  {
    titulo: "Programador Full Stack",
    conteudo:
      "Ajudando pessoas com o que sei. Segue na base que você vai longe!",
  },
  {
    titulo: "Node.js",
    conteudo:
      "Node.js é um ambiente de execução JavaScript construído no motor JavaScript V8 do Chrome.",
  },
  {
    titulo: "MongoDB",
    conteudo:
      "MongoDB é um banco de dados NoSQL orientado a documentos.",
  },
  {
    titulo: "AWS S3",
    conteudo:
      "AWS S3 é um serviço de armazenamento de objetos oferecido pela Amazon Web Services.",
  },
  {
    titulo: "React",
    conteudo:
      "React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
  },
  {
    titulo: "GIT",
    conteudo:
      "Git é um sistema de controle de versão distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.",
  },
];

const Cartao: React.FC<CartaoProps> = ({ titulo, conteudo }) => (
  <div className="cartao">
    <h2>{titulo}</h2>
    <p>{conteudo}</p>
  </div>
);

interface CarroselProps {
  children: ReactNode;
}

const Carrosel: React.FC<CarroselProps> = ({ children }) => {
  const [atualAtivo, setAtualAtivo] = useState(0);
  const TOTAL_DE_CARDS = CONTEUDO_CARTOES.length;

  return (
    <div className="carrosel-geral">
      {atualAtivo > 0 && (
        <button
          className="navegacao esquerda"
          onClick={() => setAtualAtivo((i) => i - 1)}
        >
          <TiChevronLeftOutline />
        </button>
      )}
      {Children.map(children, (elementoFilho, i) => (
        <div
          className="conteudo-geral"
          key={i}
          style={{
            "--atualAtivo": i === atualAtivo ? 1 : 0,
            "--compensacao": (atualAtivo - i) / 3,
            "--direcao": Math.sign(atualAtivo - i),
            "--abs-compensacao": Math.abs(atualAtivo - i) / 3,
            pointerEvents: atualAtivo === i ? "auto" : "none",
            opacity:
              Math.abs(atualAtivo - i) >= VISIBILIDADE_MAXIMA ? "0" : "1",
            display:
              Math.abs(atualAtivo - i) > VISIBILIDADE_MAXIMA ? "none" : "block",
          } as React.CSSProperties}
        >
          {elementoFilho}
        </div>
      ))}
      {atualAtivo < TOTAL_DE_CARDS - 1 && (
        <button
          className="navegacao direita"
          onClick={() => setAtualAtivo((i) => i + 1)}
        >
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

export const AppSlider: React.FC = () => (
  <div className="app">
    <Carrosel>
      {CONTEUDO_CARTOES.map((cartao, i) => (
        <Cartao key={i} titulo={cartao.titulo} conteudo={cartao.conteudo} />
      ))}
    </Carrosel>
  </div>
);

export default AppSlider;
