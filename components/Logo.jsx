import Link from 'next/link';

const Logo = () => {
  return (
    <div className="w-10">
      <Link href="/" passHref>
        <a>
          <img src="/logo.png" alt="logo" />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
