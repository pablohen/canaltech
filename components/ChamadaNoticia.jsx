import Link from 'next/link';
import { calculaTamanhoGrid } from './../utils/calculaTamanhoGrid';

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
        <div className="relative group w-full min-h-full rounded overflow-hidden">
          <img
            src={imagemUrl}
            alt={titulo}
            width={imagemLargura}
            height={imagemAltura}
            style={{ backgroundSize: 'cover' }}
            className="w-full min-h-full transform transition-all hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 m-4 space-y-2">
            <p className="text-white text-sm font-bold">{subtitulo}</p>
            <p className="text-white text-base font-bold">{titulo}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ChamadaNoticia;
