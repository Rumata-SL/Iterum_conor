import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ErrorPage} from "./ErrorPage";

export default {
    title: "widgets/ErrorPage",
    component: ErrorPage,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    // parameters: {
    //     layout: "centered", // ← центрирует компонент по горизонтали и вертикали
    // },
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) =>
    <ErrorPage {...args} />;

export const ErrorPageStory = Template.bind({});
ErrorPageStory.args = {
    children: "ErrorPage",
};
