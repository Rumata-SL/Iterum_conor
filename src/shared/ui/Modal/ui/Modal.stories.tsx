import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Modal} from "shared/ui/Modal";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: "shared/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    // parameters: {
    //     layout: "centered", // ← центрирует компонент по горизонтали и вертикали
    // },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur cum dignissimos dolores
                ducimus eligendi excepturi illo laboriosam maiores, minus molestias numquam, optio possimus quaerat,
                quasi quos saepe sunt tempora.`,
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur cum dignissimos dolores
                ducimus eligendi excepturi illo laboriosam maiores, minus molestias numquam, optio possimus quaerat,
                quasi quos saepe sunt tempora.`,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];