import { getNoticias } from '../libs/prismic';
import ChamadaNoticia from './../components/ChamadaNoticia';
import MenuPrincipal from './../components/MenuPrincipal';
import { separaDadosNoticia } from './../utils/separaDadosNoticia';

const Home = ({ noticias }) => {
  if (!noticias) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="flex flex-col sm:flex-row">
      <MenuPrincipal />

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 m-4 h-px">
        {noticias.map((noticia, index) => {
          const {
            key,
            titulo,
            subtitulo,
            link,
            imagemUrl,
            imagemLargura,
            imagemAltura,
            categorias,
          } = separaDadosNoticia(noticia);
          return (
            <ChamadaNoticia
              key={key}
              titulo={titulo}
              subtitulo={subtitulo}
              link={link}
              imagemUrl={imagemUrl}
              imagemLargura={imagemLargura}
              imagemAltura={imagemAltura}
              categorias={categorias}
              posicao={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await getNoticias();
  const noticias = res.results;

  return {
    props: {
      noticias,
    },
  };
};
