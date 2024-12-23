import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "./AdminSidebar";
import { Outlet } from "react-router-dom";

export function AdminLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />
        <main className="flex-1 p-8">
          <div className="container mx-auto">
            <SidebarTrigger className="mb-4" />
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}