import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Button, ButtonSize, ButtonTheme} from "./Button";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    // parameters: {
    //     layout: "centered", // ← центрирует компонент по горизонтали и вертикали
    // },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <div
    style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: "100px"}}>
    <Button {...args} /></div>;

export const Primary = Template.bind({});
Primary.args = {
    children: "Button",
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: "Button",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
    children: "Button",
    theme: ButtonTheme.CLEAR,
};
export const ClearDark = Template.bind({});
ClearDark.args = {
    children: "Button",
    theme: ButtonTheme.CLEAR,
};

ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
    children: "Button",
    theme: ButtonTheme.OUTLINE,
};
export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: "Button",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
};
export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: "Button",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
};
export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: "Button",
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
    children: "Button",
    theme: ButtonTheme.BACKGROUND,
};
// Background.decorators = [ThemeDecorator(Theme.DARK)];
export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: "Button",
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
// BackgroundInverted.decorators = [ThemeDecorator(Theme.DARK)];
export const Square = Template.bind({});
Square.args = {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M
};
export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
};
export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
};