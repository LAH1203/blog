import Footer from './Footer';
import Profile from './Profile';

const Sidebar = () => {
  return (
    <aside className="sticky left-0 top-0 h-full w-[194px] flex items-center">
      <div className="flex flex-col items-center justify-end gap-12 h-[90%] rounded-xl bg-[#B2C9AD] p-4">
        <Profile />
        <Footer />
      </div>
    </aside>
  );
};

export default Sidebar;
