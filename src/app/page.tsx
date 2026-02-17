"use client";
import AppSidebar from "@/components/custom/app-sidebar";
import Header from "@/components/custom/header";
import PostCard from "@/components/custom/post-card";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <>
      <SidebarProvider defaultOpen={false} className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <AppSidebar className="pt-14 shrink-0" />

          <SidebarInset className="flex-1 min-w-0 overflow-auto ">
            <div className="mt-14"></div>
            <main className="w-full p-4">
              <PostCard />
              <PostCard />
              <PostCard />
              <p>Loading...</p>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
}
