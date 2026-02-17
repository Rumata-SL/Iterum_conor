import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {Select} from "shared/ui/Select";

export default {
    title: "shared/Select",
    component: Select,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    // parameters: {
    //     layout: "centered", // ← центрирует компонент по горизонтали и вертикали
    // },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) =>
    <Select {...args} />;

export const SelectLight = Template.bind({});
SelectLight.args = {
    label: "Select",
    options: [
        {value: "value1", content: "content1"},
        {value: "value2", content: "content2"},
    ],
};
export const SelectDisabled = Template.bind({});
SelectDisabled.args = {
    label: "Select",
    options: [
        {value: "value1", content: "content1"},
        {value: "value2", content: "content2"},
    ],
    disabled: true,
};