import Prismic from 'prismic-javascript';

export const API_URL = process.env.API_URL;
export const API_TOKEN = process.env.API_TOKEN;

export const client = Prismic.client(API_URL, { accessToken: API_TOKEN });

export const getNoticias = async (categoria) => {
  let consultaNoticias = '[at(document.type, "noticia")]';
  if (categoria) {
    consultaNoticias += `[at(document.tags, ["${categoria}"])]`;
  }

  const res = await client.query(consultaNoticias);
  return res;
};

export const getNoticia = async (uid) => {
  const res = await client.query(`[at(my.noticia.uid, "${uid}")]`);

  return res;
};

export default { getNoticias };
