import { getNoticias } from '../libs/prismic';
import ChamadaNoticia from './../components/ChamadaNoticia';

const Home = ({ noticias }) => {
  if (!noticias) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>home</h1>

      {noticias.map((noticia) => {
        return (
          <ChamadaNoticia
            key={noticia.uid}
            titulo={noticia.data.titulo}
            subtitulo={noticia.data.subtitulo}
            link={noticia.uid}
            imagemUrl={noticia.data?.imagem?.url}
            imagemLargura={noticia.data?.imagem?.dimensions?.width}
            imagemAltura={noticia.data?.imagem?.dimensions?.height}
            categorias={noticia.tags}
          />
        );
      })}
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
