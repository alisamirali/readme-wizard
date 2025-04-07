
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ReadmeForm, { ReadmeData } from "@/components/ReadmeForm";
import ReadmePreview from "@/components/ReadmePreview";

const Index = () => {
  const [readmeData, setReadmeData] = useState<ReadmeData>({
    projectName: "",
    description: "",
    features: "",
    installation: "```bash\nnpm install\n```",
    usage: "```javascript\n// Example code\nconst example = 'Hello, world!';\nconsole.log(example);\n```",
    license: "MIT",
    contributing: "",
    tests: "",
    template: "standard",
    badges: []
  });

  const handleUpdateReadme = (data: ReadmeData) => {
    setReadmeData(data);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="flex flex-col gap-6">
          <section className="space-y-4 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-readme-primary to-readme-accent bg-clip-text text-transparent">
              README Wizard
            </h1>
            <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
              Create beautiful, professional README files for your projects in minutes.
              No more staring at a blank file - get started quickly with our templates.
            </p>
          </section>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ReadmeForm onUpdateReadme={handleUpdateReadme} />
            <ReadmePreview data={readmeData} />
          </div>
        </div>
      </main>
      
      <footer className="py-6 border-t">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            Built with ❤️ for developers everywhere
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} README Wizard
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
