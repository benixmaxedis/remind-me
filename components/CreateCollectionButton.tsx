'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import SideBar from '@/components/CreateCollectionSheet';

function CreateCollectionButton() {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (open: boolean) => setOpen(open);

  return (
    <div className="w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px]">
      <Button
        variant={'outline'}
        className="dark:text-white w-full dark:bg-neutral-950 bg-white"
        onClick={() => setOpen(true)}
      >
        <span className="bg-gradient-to-r from-red-500 to-orange-500 hover:to-orange-800 bg-clip-text text-transparent">
          Create Collection
        </span>
      </Button>
      <SideBar open={open} onOpenChange={handleOpenChange} />
    </div>
  );
}

export default CreateCollectionButton;
