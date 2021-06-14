import { getNoticias } from '../../libs/prismic';
import ChamadaNoticia from '../../components/ChamadaNoticia';
import { useRouter } from 'next/router';
import MenuPrincipal from './../../components/MenuPrincipal';
import { separaDadosNoticia } from './../../utils/separaDadosNoticia';
import { NextSeo } from 'next-seo';

const PaginaCategoria = ({ noticias }) => {
  if (!noticias) return <div>Carregando...</div>;

  const router = useRouter();
  const { categoria } = router.query;

  return (
    <div className="flex flex-col sm:flex-row">
      <NextSeo title={`Notícias sobre ${categoria}`} />

      <MenuPrincipal />
      <div>
        <h1>Categoria: {categoria}</h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 m-4 h-px">
          {noticias.map((noticia) => {
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
