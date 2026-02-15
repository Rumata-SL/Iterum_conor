import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {NotFoundPage} from "./NotFoundPage";

export default {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    // parameters: {
    //     layout: "centered", // ← центрирует компонент по горизонтали и вертикали
    // },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) =>
    <NotFoundPage {...args}/>;

export const NotFoundPageLight = Template.bind({});
NotFoundPageLight.args = {
    children: "NotFoundPage",
};
export const NotFoundPageDark = Template.bind({});
NotFoundPageDark.args = {
    children: "NotFoundPage",
};

NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)];

