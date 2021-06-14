import formataData from './formataData';

export const separaDadosNoticia = (noticia) => {
  const key = noticia.uid;
  const titulo = noticia.data.titulo;
  const subtitulo = noticia.data.subtitulo;
  const corpo = noticia.data.corpo;
  const link = noticia.uid;
  const imagemUrl = noticia.data?.imagem?.url;
  const imagemLargura = noticia.data?.imagem?.dimensions?.width;
  const imagemAltura = noticia.data?.imagem?.dimensions?.height;
  const categorias = noticia.tags;
  const dataPublicacao = formataData.padrao(noticia.first_publication_date);
  const dataAtualizacao = formataData.padrao(noticia.last_publication_date);

  return {
    key,
    titulo,
    subtitulo,
    corpo,
    link,
    imagemUrl,
    imagemLargura,
    imagemAltura,
    categorias,
    dataPublicacao,
    dataAtualizacao,
  };
};
