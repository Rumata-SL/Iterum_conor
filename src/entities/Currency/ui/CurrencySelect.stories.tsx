import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {CurrencySelect} from "entities/Currency";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: "entities/CurrencySelect",
    component: CurrencySelect,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    // parameters: {
    //     layout: "centered", // ← центрирует компонент по горизонтали и вертикали
    // },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) =>
    <CurrencySelect {...args} />;

export const CurrencySelectLight = Template.bind({});
CurrencySelectLight.args = {};

export const CurrencySelectDark = Template.bind({});
CurrencySelectDark.args = {};
CurrencySelectDark.decorators = [ThemeDecorator(Theme.DARK)];