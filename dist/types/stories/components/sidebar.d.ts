import { Document } from "./app";
export type SidebarProps = {
    title: string;
    documents: Document[];
    openEditors: Document[];
    onOpenEditorsChange: (documents: Document[]) => void;
};
export declare const Sidebar: ({ title, documents, openEditors, onOpenEditorsChange, }: SidebarProps) => JSX.Element;
//# sourceMappingURL=sidebar.d.ts.map