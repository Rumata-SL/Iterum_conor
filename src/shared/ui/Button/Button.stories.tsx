import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Button, ThemeButton} from "./Button";
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
    theme: ThemeButton.CLEAR,
};
export const ClearDark = Template.bind({});
ClearDark.args = {
    children: "Button",
    theme: ThemeButton.CLEAR,
};

ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
    children: "Button",
    theme: ThemeButton.OUTLINE,
};
export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: "Button",
    theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];