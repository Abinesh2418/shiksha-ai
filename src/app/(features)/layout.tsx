
'use client';

import Link from "next/link";
import Image from "next/image";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
} from "@/components/ui/sidebar";
import { NavItems } from "@/components/nav-items";
import AuthGuard from "@/components/auth-guard";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function AppLayout({ children }: { children: React.ReactNode }) {

  return (
    <AuthGuard>
      <SidebarProvider>
        <div className="flex">
          <Sidebar>
            <SidebarHeader className="flex items-center justify-center p-6">
              <Link href="/lesson-planner" className="block">
                <div className="w-20 h-20 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 shadow-lg">
                  <Image 
                    src="/assets/Logo_2.png"
                    alt="Shiksha AI Logo"
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </Link>
            </SidebarHeader>
            <SidebarContent>
              <NavItems />
            </SidebarContent>
          </Sidebar>
          <SidebarInset>
            <div className="relative flex-1">
              {children}
              <ThemeSwitcher />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </AuthGuard>
  );
}
