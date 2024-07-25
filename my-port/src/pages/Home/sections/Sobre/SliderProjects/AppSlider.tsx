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
      "Olá! Sou Mateus, um desenvolvedor Full Stack apaixonado por tecnologia desde os 14 anos. Minha principal linguagem de programação é JavaScript, com foco em Node.js. Além do desenvolvimento de software, também tenho amplo conhecimento em infraestrutura de computadores. Atualmente, estou me aprofundando em TypeScript e cursando Análise e Desenvolvimento de Sistemas (ADS). Minha experiência prática abrange várias áreas, incluindo AWS, React, Docker, Git e MongoDB. Adoro desafios e estou sempre em busca de novas oportunidades para expandir minhas habilidades e contribuir para projetos inovadores.",
  },
  {
    titulo: "Meu Projeto de E-commerce",
    conteudo:
      "Desenvolvi um projeto de e-commerce utilizando React no front-end e MongoDB de banco de dados no back-end usei Node.JS. Este projeto permite adicionar produtos, realizar vendas e compras, com todas as transações sendo salvas e exibidas em um dashboard. As imagens dos produtos e dos usuários são armazenadas no AWS S3, proporcionando uma solução completa e integrada para gestão de produtos.",
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
  <div className="app" >
    <Carrosel>
      {CONTEUDO_CARTOES.map((cartao, i) => (
        <Cartao key={i} titulo={cartao.titulo} conteudo={cartao.conteudo} />
      ))}
    </Carrosel>
  </div>
);

export default AppSlider;
