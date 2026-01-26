import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ThemeSwitcher} from "./ThemeSwitcher";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: "shared/ThemeSwitcher",
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    // parameters: {
    //     layout: "centered", // ← центрирует компонент по горизонтали и вертикали
    // },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) =>
    <ThemeSwitcher {...args} />;

export const ThemeSwitcherLight = Template.bind({});
ThemeSwitcherLight.args = {
    children: "ThemeSwitcher",
};
export const ThemeSwitcherDark = Template.bind({});
ThemeSwitcherDark.args = {
    children: "ThemeSwitcher",
};
ThemeSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];
