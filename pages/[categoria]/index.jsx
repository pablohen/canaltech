import { getNoticias } from '../../libs/prismic';
import ChamadaNoticia from '../../components/ChamadaNoticia';
import { useRouter } from 'next/router';
import MenuPrincipal from './../../components/MenuPrincipal';

const PaginaCategoria = ({ noticias }) => {
  if (!noticias) return <div>Carregando...</div>;

  const router = useRouter();
  const { categoria } = router.query;

  console.log(noticias);

  return (
    <div className="flex flex-col sm:flex-row">
      <MenuPrincipal />
      <div>
        <h1>Categoria: {categoria}</h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 m-4 h-px">
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
      </div>
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
