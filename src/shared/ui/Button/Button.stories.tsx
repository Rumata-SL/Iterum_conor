import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Button, ThemeButton} from "./Button";

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "Button",
};

export const Clear = Template.bind({});
Clear.args = {
    children: "Button",
    theme: ThemeButton.CLEAR,
};