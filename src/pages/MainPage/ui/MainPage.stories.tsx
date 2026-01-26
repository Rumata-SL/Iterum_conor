import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import MainPage from "./MainPage";

export default {
    title: "pages/MainPage",
    component: MainPage,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    // parameters: {
    //     layout: "centered", // ← центрирует компонент по горизонтали и вертикали
    // },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () =>
    <MainPage/>;

export const MainPageLight = Template.bind({});
MainPageLight.args = {
    children: "MainPage",
    theme: Theme.LIGHT
};
export const MainPageDark = Template.bind({});
MainPageDark.args = {
    children: "MainPage",
    theme: Theme.DARK
};

MainPageDark.decorators = [ThemeDecorator(Theme.DARK)];

