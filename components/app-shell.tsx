import Header from "@/components/header/header";
import { ThemeProvider } from "@/components/theme-provider";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="cake-shop-theme">
      <div className="bg-background flex min-h-screen flex-col transition-colors duration-300 dark:bg-slate-950">
        <Header />
        <main className="w-full flex-1 transition-colors duration-300">
          {children}
        </main>
        <footer className="border-border text-muted-foreground w-full border-t p-6 text-center text-sm transition-colors duration-300">
          &copy; {new Date().getFullYear()} Cake Shop. All rights reserved.
        </footer>
      </div>
    </ThemeProvider>
  );
}
