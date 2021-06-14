export const separaDadosNoticia = (noticia) => {
  const key = noticia.uid;
  const titulo = noticia.data.titulo;
  const subtitulo = noticia.data.subtitulo;
  const link = noticia.uid;
  const imagemUrl = noticia.data?.imagem?.url;
  const imagemLargura = noticia.data?.imagem?.dimensions?.width;
  const imagemAltura = noticia.data?.imagem?.dimensions?.height;
  const categorias = noticia.tags;

  return {
    key,
    titulo,
    subtitulo,
    link,
    imagemUrl,
    imagemLargura,
    imagemAltura,
    categorias,
  };
};
