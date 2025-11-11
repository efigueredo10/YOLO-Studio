'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import {
  BrainCircuit,
  Library,
  PlayCircle,
  Video,
  Github,
  Home,
  Database,
  MonitorPlay,
} from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from '@/components/ui/button';

export function MainNav() {
  const pathname = usePathname();

  const menuItems = {
    home: { href: '/', label: 'Home', icon: Home },
    core: [
      { href: '/modules/training', label: 'Train Models', icon: BrainCircuit },
      { href: '/modules/testing', label: 'Test Models', icon: PlayCircle },
    ],
    management: [
      { href: '/modules/sources', label: 'Video Sources', icon: Database },
      { href: '/modules/models', label: 'Model Library', icon: MonitorPlay },
    ],
  };

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="h-6 w-6 text-primary"
          >
            <rect width="256" height="256" fill="none" />
            <path
              d="M88,134.4,40,160V96l48,25.6a8,8,0,0,1,0,12.8Z"
              opacity="0.2"
            />
            <path
              d="M168,134.4,216,160V96l-48,25.6a8,8,0,0,0,0,12.8Z"
              opacity="0.2"
            />
            <path
              d="M32,90.8V160a8,8,0,0,0,4.2,7.2L88,192.8a8.2,8.2,0,0,0,7.6,0l51.8-25.6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M32,90.8,83.8,65.2a8.2,8.2,0,0,1,7.6,0L143.2,90.8"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <line
              x1="88"
              y1="134.4"
              x2="88"
              y2="192.8"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <polyline
              points="40 96 40 160"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M224,90.8V160a8,8,0,0,1-4.2,7.2l-51.8,25.6a8.2,8.2,0,0,1-7.6,0L108.6,167.2"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M224,90.8,172.2,65.2a8.2,8.2,0,0,0-7.6,0L112.8,90.8"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <line
              x1="168"
              y1="134.4"
              x2="168"
              y2="192.8"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <polyline
              points="216 96 216 160"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
          <span className="font-headline text-lg font-semibold">YOLO Studio</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === menuItems.home.href}
              tooltip={menuItems.home.label}
            >
              <Link href={menuItems.home.href}>
                <menuItems.home.icon />
                <span>{menuItems.home.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarGroup>
          <SidebarGroupLabel>Core</SidebarGroupLabel>
            <SidebarMenu>
              {menuItems.core.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.label}
                  >
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
            <SidebarMenu>
              {menuItems.management.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.label}
                  >
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-2">
        <div className="flex flex-1 items-center justify-center gap-2">
            <Button asChild variant="ghost" size="icon" aria-label="GitHub">
              <Link href="https://github.com" target="_blank">
                <Github />
              </Link>
            </Button>
            <ThemeToggle />
        </div>
      </SidebarFooter>
    </>
  );
}
