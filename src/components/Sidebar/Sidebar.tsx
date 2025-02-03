import Image from 'next/image';
import Link from 'next/link';

import Footer from './Footer';
import Profile from './Profile';

const Sidebar = () => {
  return (
    <aside className="sticky left-0 top-0 h-full w-[194px] xs:flex hidden items-center">
      <div className="flex flex-col items-center justify-between h-[90%] rounded-xl bg-[#B2C9AD] p-4 w-full">
        <Link href="/">
          <Image
            src="https://github.com/user-attachments/assets/21af14de-59cb-4848-a058-5476e4bcb2b5"
            alt="logo"
            width={162}
            height={100}
            quality={100}
            className="rounded-2xl"
          />
        </Link>
        <div className="flex flex-col items-center gap-12 w-full">
          <Profile />
          <Footer />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
