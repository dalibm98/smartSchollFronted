import { User } from "./user";

export interface Course {
    id: number;
    title: string;
    description: string;
    pdfFile: File | null;
    user: User | null;
    pdfFilePath :string;
    downloadPDF: () => void; // Assurez-vous que cette propriété est présente et correctement définie

  }