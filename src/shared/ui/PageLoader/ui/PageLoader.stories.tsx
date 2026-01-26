import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {PageLoader} from "./PageLoader";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: "shared/PageLoader",
    component: PageLoader,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    // parameters: {
    //     layout: "centered", // ← центрирует компонент по горизонтали и вертикали
    // },
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) =>
    <PageLoader {...args} />;

export const PageLoaderLight = Template.bind({});
PageLoaderLight.args = {
    children: "PageLoader",
};
export const PageLoaderDark = Template.bind({});
PageLoaderDark.args = {
    children: "PageLoader",
};
PageLoaderDark.decorators = [ThemeDecorator(Theme.DARK)];