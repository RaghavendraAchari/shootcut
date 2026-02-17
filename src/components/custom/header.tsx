import { SidebarTrigger, useSidebar } from "../ui/sidebar";

export default function Header() {
  const { isMobile } = useSidebar();

  return (
    <header className="fixed top-0 left-0 right-0 z-100 h-16 lg:h-14 flex items-center px-4 backdrop-blur-lg border-b border-b-slate-500">
      {isMobile ? <SidebarTrigger /> : null}
      <img src="/applogo.png" alt="app-logo" className="size-6 -ml-1 mr-4" />
      <h1 className="text-lg font-semibold">ShootNCut</h1>
    </header>
  );
}
