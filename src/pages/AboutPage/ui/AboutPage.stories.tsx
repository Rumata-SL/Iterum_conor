import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import AboutPage from "./AboutPage";

export default {
    title: "pages/AboutPage",
    component: AboutPage,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    // parameters: {
    //     layout: "centered", // ← центрирует компонент по горизонтали и вертикали
    // },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () =>
    <AboutPage/>;

export const AboutPageLight = Template.bind({});
AboutPageLight.args = {
    children: "AboutPage",
    theme: Theme.LIGHT
};
export const AboutPageDark = Template.bind({});
AboutPageDark.args = {
    children: "AboutPage",
    theme: Theme.DARK
};

AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)];

