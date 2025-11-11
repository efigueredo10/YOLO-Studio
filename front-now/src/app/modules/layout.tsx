import { MainNav } from '@/components/layout/main-nav';
import { Sidebar, SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export default function ModulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <MainNav />
      </Sidebar>
      <SidebarInset>
        <div className="flex-1">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
