import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Navbar} from "./Navbar";

export default {
    title: "widgets/Navbar",
    component: Navbar,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    // parameters: {
    //     layout: "centered", // ← центрирует компонент по горизонтали и вертикали
    // },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarLight = Template.bind({});
NavbarLight.args = {
    children: "Navbar",
};
export const NavbarDark = Template.bind({});
NavbarDark.args = {
    children: "Navbar",
};
NavbarDark.decorators = [ThemeDecorator(Theme.DARK)];
