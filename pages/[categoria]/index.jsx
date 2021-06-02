import { getNoticias } from '../../libs/prismic';
import ChamadaNoticia from '../../components/ChamadaNoticia';
import { useRouter } from 'next/router';

const PaginaCategoria = ({ noticias }) => {
  if (!noticias) return <div>Carregando...</div>;

  const router = useRouter();
  const { categoria } = router.query;

  console.log(noticias);

  return (
    <div>
      <h1>Categoria: {categoria}</h1>

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

export default PaginaCategoria;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const categoria = params.categoria;
  const res = await getNoticias(categoria);
  const noticias = res.results;

  return {
    props: {
      noticias,
    },
  };
};
