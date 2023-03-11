export interface Document {
    title: string;
    icon: string;
}
export declare const ACTIVITIES: string[];
export declare const DOCUMENTS: {
    title: string;
    icon: string;
}[];
export type AppProps = {
    activity: number;
    activityBar: boolean;
    editorVisible: boolean;
    openEditors: Document[];
    panelVisible: boolean;
    primarySideBar: boolean;
    primarySideBarPosition: "left" | "right";
    secondarySideBar: boolean;
    onActivityChanged: (activity: number) => void;
    onEditorVisibleChanged: (visible: boolean) => void;
    onOpenEditorsChanged: (documents: Document[]) => void;
    onPanelVisibleChanged: (visible: boolean) => void;
};
export declare const App: ({ activity, activityBar, editorVisible, openEditors, panelVisible, primarySideBar, primarySideBarPosition, secondarySideBar, onActivityChanged, onEditorVisibleChanged, onOpenEditorsChanged, onPanelVisibleChanged, }: AppProps) => JSX.Element;
//# sourceMappingURL=app.d.ts.map