import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  onClick?: () => void;
}

const Logo = ({ onClick }: LogoProps) => {
  return (
    <Link href="/" onClick={onClick}>
      <Image
        src="https://github.com/user-attachments/assets/21af14de-59cb-4848-a058-5476e4bcb2b5"
        alt="logo"
        width={162}
        height={100}
        quality={100}
        className="rounded-2xl"
      />
    </Link>
  );
};

export default Logo;
