import Item from './Item';

const Header = () => {
  return (
    <ul className="flex justify-end items-center gap-4 w-full h-full box-border py-0 px-4 bg-white list-none">
      <Item to="/about">ABOUT</Item>
      <Item to="/">POSTS</Item>
      <Item to="https://github.com/lah1203" target="_blank">
        GITHUB
      </Item>
    </ul>
  );
};

export default Header;
