import { getNoticias } from '../libs/prismic';
import ChamadaNoticia from './../components/ChamadaNoticia';
import MenuPrincipal from './../components/MenuPrincipal';

const Home = ({ noticias }) => {
  if (!noticias) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="flex flex-col sm:flex-row">
      <MenuPrincipal />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4 h-auto">
        {noticias.map((noticia, index) => {
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
