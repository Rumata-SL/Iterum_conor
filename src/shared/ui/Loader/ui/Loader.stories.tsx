import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Loader} from "./Loader";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: "shared/Loader",
    component: Loader,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    // parameters: {
    //     layout: "centered", // ← центрирует компонент по горизонтали и вертикали
    // },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) =>
    <Loader {...args} />;

export const LoaderLight = Template.bind({});
LoaderLight.args = {
    children: "Loader",
};
export const LoaderDark = Template.bind({});
LoaderDark.args = {
    children: "Loader",
};
LoaderDark.decorators = [ThemeDecorator(Theme.DARK)];
