import Footer from './Footer';
import Profile from './Profile';

const Sidebar = () => {
  return (
    <aside className="sticky left-0 top-0 flex h-full w-[194px] flex-col items-center justify-end gap-12 rounded-xl bg-[#B2C9AD] p-4">
      <Profile />
      <Footer />
    </aside>
  );
};

export default Sidebar;
