import Link from 'next/link';

const IconeMenuPrincipal = ({ Icone, link = '#' }) => {
  return (
    <Link href={link} passHref>
      <a className="group transform transition-all hover:bg-gray-700 rounded-full my-1 hidden sm:flex">
        <Icone className="text-gray-500 transform transition-all group-hover:text-white h-6 m-2" />
      </a>
    </Link>
  );
};

export default IconeMenuPrincipal;
