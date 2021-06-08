import { useRouter } from 'next/router';
import { getNoticia } from '../../libs/prismic';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';
import MenuPrincipal from './../../components/MenuPrincipal';
import formataData from './../../utils/formataData';
import { sombraTexto } from './../../utils/sombraTexto';

const PaginaNoticia = ({ noticia }) => {
  const router = useRouter();
  if (router.isFallback) return <div>Carregando...</div>;

  const { titulo, subtitulo, corpo } = noticia.data;
  const categorias = noticia.tags;
  const imagemUrl = noticia.data?.imagem?.url;
  const imagemLargura = noticia.data?.imagem?.dimensions?.width;
  const imagemAltura = noticia.data?.imagem?.dimensions?.height;
  const dataPublicacao = formataData.padrao(noticia.first_publication_date);
  const dataAtualizacao = formataData.padrao(noticia.last_publication_date);

  return (
    <div className="flex flex-col sm:flex-row">
      <MenuPrincipal />

      <div className="">
        <div className="relative h-40 sm:h-80 max-h-full overflow-y-hidden">
          {imagemUrl && (
            <img
              src={imagemUrl}
              alt={titulo}
              width={imagemLargura}
              height={imagemAltura}
              className="w-full"
            />
          )}

          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
            <div className="space-y-4">
              <div>
                <Link href="/" passHref>
                  <a className="text-xs text-white pr-2" style={sombraTexto}>
                    Home
                  </a>
                </Link>
                {categorias &&
                  categorias.map((categoria) => {
                    return (
                      <Link href={`/${categoria}`} passHref key={categoria}>
                        <a
                          className="text-xs text-white pr-2"
                          style={sombraTexto}
                        >
                          {categoria}
                        </a>
                      </Link>
                    );
                  })}
              </div>

              <h1
                className="text-sm sm:text-3xl text-white font-bold"
                style={sombraTexto}
              >
                {titulo}
              </h1>
              <p className="text-white text-sm" style={sombraTexto}>
                {dataPublicacao}
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <RichText render={corpo} />
        </div>
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
  console.log(noticia);

  return {
    props: {
      noticia,
    },
  };
};
