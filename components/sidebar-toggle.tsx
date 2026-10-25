'use client';

import { useSidebar } from '@/components/ui/sidebar';
import { FiMenu } from 'react-icons/fi';

export default function SidebarToggle() {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      type="button"
      onClick={toggleSidebar}
      className="rounded p-2 text-gray-400 hover:text-gray-100 md:hidden"
    >
      <span className="sr-only">Toggle menu</span>
      <FiMenu className="size-6" aria-hidden="true" />
    </button>
  );
}
