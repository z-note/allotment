import "xterm/css/xterm.css";
export type PanelProps = {
    maximized: boolean;
    onClose: () => void;
    onMaximize: () => void;
    onMinimize: () => void;
};
export declare const Panel: ({ maximized, onClose, onMaximize, onMinimize, }: PanelProps) => JSX.Element;
//# sourceMappingURL=panel.d.ts.map