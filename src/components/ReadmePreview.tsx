
import React from "react";
import ReactMarkdown from "react-markdown";
import { Card, CardContent } from "@/components/ui/card";
import { ReadmeData, generateMarkdown } from "./ReadmeForm";
import { Braces } from "lucide-react";

interface ReadmePreviewProps {
  data: ReadmeData;
}

const ReadmePreview: React.FC<ReadmePreviewProps> = ({ data }) => {
  const markdown = generateMarkdown(data);

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Preview</h2>
        <div className="flex items-center text-xs text-muted-foreground gap-1">
          <Braces className="h-3 w-3" />
          <span>README.md</span>
        </div>
      </div>
      
      <Card className="overflow-hidden border shadow-sm">
        <CardContent className="p-0">
          <div className="rounded-t-md border-b bg-muted/50 px-4 py-2 text-xs font-medium">
            README.md Preview
          </div>
          <div className="p-6 max-h-[calc(100vh-280px)] overflow-y-auto markdown-body">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReadmePreview;
