import { Grid, Typography } from "@mui/material";
import Style from "./SobreCss.module.css";
export const Project = () => {
  return (
    <>
      <Typography>
        {" "}
        <Grid>
          <Typography>
            <div className={Style.portfolio}>
              <h1>Portfólio de Desenvolvedor</h1>
              <p>
                Olá! Meu nome é Mateus Felipe e sou um desenvolvedor júnior com
                paixão por criar soluções eficientes e inovadoras. Tenho
                experiência em várias tecnologias e estou sempre em busca de
                novos desafios para aprimorar minhas habilidades. Aqui você
                encontrará alguns dos meus projetos mais recentes, nos quais
                demonstro minhas capacidades em desenvolvimento web e
                programação.
              </p>

              <div className={Style.projects}>
                <h2>Projetos Recentes</h2>
                <ul>
                  <li>
                    <strong>Sales Tracker:</strong>{" "}
                    <a href="https://saletracker.netlify.app" target="_blank">Sales Tracker</a> - Meu primeiro sistema, com
                    ele você consegue adicionar um produto, uma categoria, uma
                    imagem, ter o produto em estoque, realizar a compra e venda
                    desse produto, ver a diferença em gráfico das movimentações,
                    adicionar um usuário que possa fazer login. Foram utilizados
                    Node.js, React, Next.js, MongoDB, AWS S3, HTML, CSS.
                  </li>
                  <li>
                    <strong>Portifolio:</strong>
                    <a href="https://allanpimentel.netlify.app" target="_blank">Portfólio</a> - Freela feito a partir de um
                    template, utilizando HTML, CSS e Bootstrap.
                  </li>
                </ul>
              </div>
            </div>
          </Typography>
        </Grid>
      </Typography>
    </>
  );
};
