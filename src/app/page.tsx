import { ComponentShowcase } from "@/components/component-showcase";
import { Header } from "@/components/header";
import { APP_NAME, APP_DESCRIPTION } from "@/constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {APP_NAME}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {APP_DESCRIPTION}
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with:</span>
              <span className="font-mono">Next.js 15</span>
              <span>•</span>
              <span className="font-mono">React 19</span>
              <span>•</span>
              <span className="font-mono">TypeScript</span>
              <span>•</span>
              <span className="font-mono">Tailwind CSS v4</span>
              <span>•</span>
              <span className="font-mono">shadcn/ui</span>
            </div>
          </div>
        </div>
        <ComponentShowcase />
      </main>
    </div>
  );
}
