import "@vscode/codicons/dist/codicon.css";
export type ActivityBarProps = {
    checked: number;
    items: string[];
    onClick: (index: number) => void;
};
export declare const ActivityBar: ({ checked, items, onClick }: ActivityBarProps) => JSX.Element;
//# sourceMappingURL=activity-bar.d.ts.map