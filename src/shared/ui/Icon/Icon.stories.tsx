import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {Icon} from "./Icon";
import icons from "../../assets/icons/Articles.svg";

export default {
    title: "shared/Icon",
    component: Icon,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) =>
    <Icon {...args} />;

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
    Svg: icons,
};