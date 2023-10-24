import { UserButton } from '@clerk/nextjs';

import ThemeSwitcher from '@/components/ThemeSwitcher';
import Logo from '@/components/Logo';

function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between p-4 px-8 h-[60px]">
      <Logo />
      <div className="flex gap-4 items-center">
        <ThemeSwitcher />
        <UserButton />
      </div>
    </nav>
  );
}

export default Navbar;
