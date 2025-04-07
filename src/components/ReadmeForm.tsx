
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Copy, Download, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export interface ReadmeData {
  projectName: string;
  description: string;
  features: string;
  installation: string;
  usage: string;
  license: string;
  contributing: string;
  tests: string;
  template: string;
  badges: string[];
}

const initialData: ReadmeData = {
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
};

const ReadmeForm = ({ onUpdateReadme }: { onUpdateReadme: (data: ReadmeData) => void }) => {
  const [formData, setFormData] = useState<ReadmeData>(initialData);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    field: keyof ReadmeData,
    value: string | string[]
  ) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
    onUpdateReadme(updatedData);
  };

  const generateDummyContent = () => {
    const dummyData: ReadmeData = {
      projectName: "Awesome Project",
      description: "This is an amazing project that solves real-world problems using cutting-edge technology.",
      features: "- Feature 1: Lightning-fast performance\n- Feature 2: Beautiful UI\n- Feature 3: API integration\n- Feature 4: Cross-platform compatibility",
      installation: "```bash\n# Clone the repository\ngit clone https://github.com/username/awesome-project.git\n\n# Enter the project directory\ncd awesome-project\n\n# Install dependencies\nnpm install\n\n# Start the development server\nnpm run dev\n```",
      usage: "```javascript\n// Import the package\nimport { awesome } from 'awesome-project';\n\n// Initialize with configuration\nconst app = awesome.init({\n  debug: true,\n  apiKey: 'your-api-key'\n});\n\n// Use the features\napp.doAwesomeThing();\n```",
      license: "MIT",
      contributing: "Contributions are welcome! Please feel free to submit a Pull Request.",
      tests: "```bash\n# Run tests\nnpm run test\n```",
      template: "standard",
      badges: ["npm", "license", "build"]
    };
    
    setFormData(dummyData);
    onUpdateReadme(dummyData);
    
    toast({
      title: "Example content generated",
      description: "The form has been filled with example content.",
    });
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">README Editor</h2>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2"
            onClick={generateDummyContent}
          >
            <Sparkles className="h-4 w-4" />
            <span>Generate Example</span>
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="basics" className="w-full">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="basics">Basics</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="meta">Meta</TabsTrigger>
          <TabsTrigger value="export">Export</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basics" className="space-y-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="projectName">Project Name</Label>
              <Input
                id="projectName"
                value={formData.projectName}
                onChange={(e) => handleInputChange("projectName", e.target.value)}
                placeholder="My Awesome Project"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="A concise description of what your project does"
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="features">Features</Label>
              <Textarea
                id="features"
                value={formData.features}
                onChange={(e) => handleInputChange("features", e.target.value)}
                placeholder="- Feature 1: Description
- Feature 2: Description"
                rows={6}
              />
              <p className="text-xs text-muted-foreground">Use Markdown list format (- Item 1)</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="content" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="installation">Installation Instructions</Label>
            <Textarea
              id="installation"
              value={formData.installation}
              onChange={(e) => handleInputChange("installation", e.target.value)}
              placeholder="```bash
npm install my-package
```"
              rows={5}
              className="font-mono"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="usage">Usage Examples</Label>
            <Textarea
              id="usage"
              value={formData.usage}
              onChange={(e) => handleInputChange("usage", e.target.value)}
              placeholder="```javascript
// Example code
```"
              rows={6}
              className="font-mono"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="code" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contributing">Contributing Guidelines</Label>
              <Textarea
                id="contributing"
                value={formData.contributing}
                onChange={(e) => handleInputChange("contributing", e.target.value)}
                placeholder="Contributions are welcome!"
                rows={4}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tests">Test Instructions</Label>
              <Textarea
                id="tests"
                value={formData.tests}
                onChange={(e) => handleInputChange("tests", e.target.value)}
                placeholder="```bash
npm test
```"
                rows={4}
                className="font-mono"
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="meta" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="license">License</Label>
              <Select 
                value={formData.license} 
                onValueChange={(value) => handleInputChange("license", value)}
              >
                <SelectTrigger id="license">
                  <SelectValue placeholder="Select a license" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MIT">MIT</SelectItem>
                  <SelectItem value="Apache-2.0">Apache 2.0</SelectItem>
                  <SelectItem value="GPL-3.0">GPL 3.0</SelectItem>
                  <SelectItem value="BSD-3-Clause">BSD 3-Clause</SelectItem>
                  <SelectItem value="Custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="template">README Template</Label>
              <Select 
                value={formData.template} 
                onValueChange={(value) => handleInputChange("template", value)}
              >
                <SelectTrigger id="template">
                  <SelectValue placeholder="Select a template" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="minimalist">Minimalist</SelectItem>
                  <SelectItem value="detailed">Detailed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="export" className="space-y-4">
          <div className="space-y-4">
            <div className="rounded-md border p-4 flex flex-col items-center justify-center gap-4">
              <div className="text-center">
                <h3 className="font-medium">Export Options</h3>
                <p className="text-sm text-muted-foreground">Save your README to use in your project</p>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="gap-2" 
                  onClick={() => {
                    navigator.clipboard.writeText(generateMarkdown(formData));
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                    
                    toast({
                      title: "Copied to clipboard",
                      description: "Your README has been copied to your clipboard.",
                    });
                  }}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied" : "Copy to Clipboard"}
                </Button>
                
                <Button 
                  className="gap-2" 
                  onClick={() => {
                    const blob = new Blob([generateMarkdown(formData)], { type: 'text/markdown' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'README.md';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                    
                    toast({
                      title: "README Downloaded",
                      description: "Your README.md file has been downloaded.",
                    });
                  }}
                >
                  <Download className="h-4 w-4" />
                  Download README.md
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Helper function to generate Markdown
function generateMarkdown(data: ReadmeData): string {
  const { 
    projectName, 
    description, 
    features, 
    installation, 
    usage, 
    license, 
    contributing, 
    tests 
  } = data;
  
  return `# ${projectName || "Project Name"}

${description || "A description of the project."}

## Features

${features || "- Feature 1\n- Feature 2"}

## Installation

${installation || "Installation instructions."}

## Usage

${usage || "Usage examples."}

${contributing ? `## Contributing

${contributing}` : ""}

${tests ? `## Tests

${tests}` : ""}

## License

${license} License
`;
}

export default ReadmeForm;
export { generateMarkdown };
