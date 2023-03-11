/// <reference types="react" />
import { Meta, Story } from "@storybook/react";
import { AllotmentProps } from "../src";
declare const _default: Meta<import("@storybook/react").Args>;
export default _default;
export declare const Simple: Story;
export declare const Vertical: Story<{
    children: import("react").ReactNode;
    defaultSizes?: number[] | undefined;
    proportionalLayout?: boolean | undefined;
    separator?: boolean | undefined;
    sizes?: number[] | undefined;
    vertical?: boolean | undefined;
    onChange?: ((sizes: number[]) => void) | undefined;
    onReset?: (() => void) | undefined;
    onVisibleChange?: ((index: number, visible: boolean) => void) | undefined;
} & import("../src/allotment").CommonProps & {
    numViews: number;
}>;
export declare const Horizontal: Story<{
    children: import("react").ReactNode;
    defaultSizes?: number[] | undefined;
    proportionalLayout?: boolean | undefined;
    separator?: boolean | undefined;
    sizes?: number[] | undefined;
    vertical?: boolean | undefined;
    onChange?: ((sizes: number[]) => void) | undefined;
    onReset?: (() => void) | undefined;
    onVisibleChange?: ((index: number, visible: boolean) => void) | undefined;
} & import("../src/allotment").CommonProps & {
    numViews: number;
}>;
export declare const PersistSizes: Story<{
    numViews: number;
    vertical: boolean;
}>;
export declare const Nested: Story;
export declare const Closable: Story;
export declare const Reset: Story<AllotmentProps>;
export declare const CustomReset: Story<AllotmentProps>;
export declare const Resize: Story<AllotmentProps>;
export declare const DefaultSize: Story<AllotmentProps>;
export declare const ConfigureSash: Story;
export declare const PaneClassName: Story;
export declare const Visible: Story<AllotmentProps>;
export declare const VisibleWithAnimation: Story<AllotmentProps>;
export declare const OnReset: Story;
export declare const FixedSize: Story;
export declare const PreferredSize: Story;
export declare const NoSeparator: Story;
//# sourceMappingURL=basic.stories.d.ts.map