import { useRouter } from 'next/router';
import { getNoticia } from '../../libs/prismic';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';
import MenuPrincipal from './../../components/MenuPrincipal';

const PaginaNoticia = ({ noticia }) => {
  const router = useRouter();
  if (router.isFallback) return <div>Carregando...</div>;

  const { titulo, subtitulo, corpo } = noticia.data;
  const categorias = noticia.tags;
  const imagemUrl = noticia.data?.imagem?.url;
  const imagemLargura = noticia.data?.imagem?.dimensions?.width;
  const imagemAltura = noticia.data?.imagem?.dimensions?.height;

  return (
    <div className="flex flex-col sm:flex-row">
      <MenuPrincipal />

      <div className="p-4 space-y-4">
        <h1 className="text-3xl">{titulo}</h1>

        <div>
          <Link href="/" passHref>
            <a className="pr-2">Home</a>
          </Link>
          {categorias &&
            categorias.map((categoria) => {
              return (
                <Link href={`/${categoria}`} passHref key={categoria}>
                  <a className="pr-2">{categoria}</a>
                </Link>
              );
            })}
        </div>

        {imagemUrl && (
          <img
            src={imagemUrl}
            alt={titulo}
            width={imagemLargura}
            height={imagemAltura}
            className="w-full"
          />
        )}
        <RichText render={corpo} />
      </div>
    </div>
  );
};

export default PaginaNoticia;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const uid = params.uid;
  const res = await getNoticia(uid);
  const noticia = res.results[0];

  return {
    props: {
      noticia,
    },
  };
};
