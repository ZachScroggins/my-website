'use client';

import { useSidebar } from '@/components/ui/sidebar';
import { FiMenu } from 'react-icons/fi';

export default function SidebarToggle() {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      type="button"
      onClick={toggleSidebar}
      className="flex items-center justify-center rounded p-2 md:hidden"
    >
      <FiMenu className="h-6 w-6 rounded text-gray-400 hover:text-gray-100" />
    </button>
  );
}
