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
SidebarLight.decorators = [StoreDecorator({
    user: {
        authData: {}
    }
})];

export const SidebarDark = Template.bind({});
SidebarDark.args = {
    children: "Sidebar",
};

SidebarDark.decorators = [StoreDecorator({
    user: {
        authData: {}
    }
}), ThemeDecorator(Theme.DARK)];


export const SidebarAuth = Template.bind({});
SidebarAuth.args = {
    children: "Sidebar",
};

SidebarAuth.decorators = [StoreDecorator({
    user: {}
}), ThemeDecorator(Theme.DARK)];