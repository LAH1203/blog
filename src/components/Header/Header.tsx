'use client';

import { useState } from 'react';

import cn from '@/utils/cn';

import Logo from '../Sidebar/Logo';
import Profile from '../Sidebar/Profile';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = (): void => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div className="sticky top-0 left-0 w-full xs:hidden" suppressHydrationWarning>
      <header className="px-2 w-full flex justify-end items-center z-10 h-12 bg-[#E0EBE0]">
        <div
          className={cn(
            'w-7 h-7 cursor-pointer',
            !isExpanded && 'flex flex-col justify-center gap-[6px]',
            isExpanded && 'relative',
          )}
          onClick={toggleIsExpanded}
        >
          <p
            className={cn(
              'w-full rounded-sm h-[1.5px] bg-[#4B5945] transition-all duration-300',
              isExpanded && 'absolute top-[50%] left-0 rotate-45',
            )}
          />
          <p
            className={cn(
              'w-full rounded-sm h-[1.5px] bg-[#4B5945] transition-all duration-600',
              isExpanded && 'absolute top-[50%] left-0 rotate-135',
            )}
          />
          <p
            className={cn(
              'w-full rounded-sm h-[1.5px] bg-[#4B5945] transition-all duration-300',
              isExpanded && 'hidden',
            )}
          />
        </div>
      </header>
      <div
        className={cn(
          'flex justify-center items-center relative w-full h-0 px-8 bg-[#E0EBE0] transition-all duration-300',
          isExpanded && 'h-[calc(100dvh-3rem)]',
        )}
      >
        <div
          className={cn(
            'absolute top-0 left-[50%] translate-x-[-50%] opacity-0 transition-all duration-300',
            isExpanded && 'opacity-100 delay-300',
          )}
        >
          <Logo onClick={toggleIsExpanded} />
        </div>
        <div
          className={cn(
            'w-full opacity-0 transition-all duration-300',
            isExpanded && 'opacity-100 delay-300',
          )}
        >
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Header;
