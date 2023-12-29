'use client';
import { SidebarProvider } from "@/components/layout/context";
import Sidebar from "@/components/layout/sidebar";

export default function BaseLayout({ children }) {
    return (
        <SidebarProvider>
            <div className=" w-full top-10 flex relative gap-8 h-screen">
                <Sidebar />
                <main className="flex justify-center text-justify">{children}</main>
            </div>
        </SidebarProvider>
    );
};
