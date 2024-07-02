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
    titulo: "Programador CS",
    conteudo:
      "Ajudando pessoas com o que sei. Segue na base que você vai longe!",
  },
  {
    titulo: "HTML",
    conteudo:
      "HTML é uma linguagem de marcação utilizada na construção de páginas na Web.",
  },
  {
    titulo: "CSS",
    conteudo:
      "CSS é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em uma linguagem de marcação como HTML.",
  },
  {
    titulo: "JavaScript",
    conteudo:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multi-paradigma.",
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
