import Link from 'next/link';

interface ItemProps {
  to: string;
  children: string;
  target?: string;
}

const Item = ({ to, target, children }: ItemProps) => {
  return (
    <li>
      <Link
        href={to}
        target={target}
        className="text-[0.9rem] bg-gradient-header-item bg-no-repeat bg-header-item-before transition-all duration-[0.6s] cursor-pointer hover:bg-header-item-after"
      >
        {children}
      </Link>
    </li>
  );
};

export default Item;
