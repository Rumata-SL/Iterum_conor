import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Sidebar} from "./Sidebar";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
    title: "widgets/Sidebar",
    component: Sidebar,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    // parameters: {
    //     layout: "centered", // ← центрирует компонент по горизонтали и вертикали
    // },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const SidebarLight = Template.bind({});
SidebarLight.args = {
    children: "Sidebar",
};
SidebarLight.decorators = [StoreDecorator({})];

export const SidebarDark = Template.bind({});
SidebarDark.args = {
    children: "Sidebar",
};

SidebarDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
