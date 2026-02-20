'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { PostMetadata } from '@/types/post';

interface PostItemProps {
  item: PostMetadata;
}

const PostItem = ({ item }: PostItemProps) => {
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const ref = useRef<HTMLLIElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const rx = hovered ? (mouse.y - 0.5) * -8 : 0;
  const ry = hovered ? (mouse.x - 0.5) * 8 : 0;

  return (
    <a
      href={`/post/${item.category}/${item.fileName.split('.')[0]}`}
      className="h-full xs:max-w-[320px] max-w-full w-full"
    >
      <li
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setMouse({ x: 0.5, y: 0.5 });
        }}
        onMouseMove={handleMove}
        className="relative flex flex-col items-center w-full h-full rounded-xl bg-white overflow-hidden"
        style={{
          transform: `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(${hovered ? -4 : 0}px)`,
          boxShadow: hovered
            ? '0 20px 60px -12px rgba(0,0,0,0.12), 0 0 12px 4px rgba(0,0,0,0.05)'
            : '0 0 12px 2px rgba(0,0,0,0.05)',
          transition: hovered
            ? 'box-shadow 0.4s cubic-bezier(.16,1,.3,1), transform 0.15s ease-out'
            : 'box-shadow 0.5s cubic-bezier(.16,1,.3,1), transform 0.5s cubic-bezier(.16,1,.3,1)',
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(500px circle at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(75,89,69,0.06), transparent 50%)`,
            opacity: hovered ? 1 : 0,
          }}
        />

        <div className="relative w-full h-[100px]">
          {item.thumbnail ? (
            <Image
              src={item.thumbnail}
              alt={item.title}
              className="rounded-t-xl object-cover bg-gray-200"
              sizes="100% 100px"
              fill
            />
          ) : (
            <div className="flex items-center justify-center rounded-t-xl object-cover bg-[#F6F9F6] size-full text-6xl">
              🐢
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between gap-4 w-full px-6 pt-4 pb-6">
          <div className="flex flex-col gap-1">
            <span className="font-medium text-[#4B5945]">{item.title}</span>
            <span className="text-[#4B5945] text-sm">{item.description}</span>
          </div>
        </div>
      </li>
    </a>
  );
};

export default PostItem;
