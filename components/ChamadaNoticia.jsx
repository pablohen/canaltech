import Link from 'next/link';
import { calculaTamanhoGrid } from './../utils/calculaTamanhoGrid';
import { sombraTexto } from './../utils/sombraTexto';

const ChamadaNoticia = ({
  titulo,
  subtitulo,
  link,
  imagemUrl,
  imagemLargura,
  imagemAltura,
  categorias,
  posicao,
}) => {
  const categoria = categorias?.[0];

  return (
    <Link href={`/${categoria}/${link}`} passHref>
      <a className={calculaTamanhoGrid(posicao)}>
        <div className="bg-gray-500 relative w-full rounded overflow-hidden">
          <img
            src={imagemUrl}
            alt={titulo}
            width={imagemLargura}
            height={imagemAltura}
            className="w-full transform transition-all hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 m-4 space-y-2">
            <p className="text-white text-sm font-bold" style={sombraTexto}>
              {subtitulo}
            </p>
            <p className="text-white text-base font-bold" style={sombraTexto}>
              {titulo}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ChamadaNoticia;
