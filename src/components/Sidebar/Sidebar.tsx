import Logo from './Logo';
import Profile from './Profile';
import Footer from './Footer';

const Sidebar = () => {
  return (
    <aside className="sticky left-0 top-0 h-full w-[194px] xs:flex hidden items-center">
      <div className="flex flex-col items-center justify-between h-[90%] rounded-xl bg-[#B2C9AD] p-4 w-full">
        <Logo />
        <div className="flex flex-col items-center gap-12 w-full">
          <Profile />
          <Footer />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
