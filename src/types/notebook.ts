// src/types/notebook.ts

// Define types for notebook cells
export interface MarkdownCell {
    type: 'markdown';
    source: string;
  }
  
  export interface CodeOutput {
    text?: string[];
    html?: string[];
    image?: string;
  }
  
  export interface CodeCell {
    type: 'code';
    source: string;
    outputs: CodeOutput[];
  }
  
  export type NotebookCell = MarkdownCell | CodeCell;
  
  // Define the overall notebook structure
  export interface Notebook {
    cells: NotebookCell[];
    metadata?: {
      title?: string;
      description?: string;
      tags?: string[];
      date?: string;
    };
  }
  
  // Project metadata type
  export interface ProjectMetadata {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    tags: string[];
    notebookFile: string;
    date: string;
  }