import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import React from "react";
import {CountrySelect} from "entities/Country/ui/CountrySelect";

export default {
    title: "entities/CountrySelect",
    component: CountrySelect,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    // parameters: {
    //     layout: "centered", // ← центрирует компонент по горизонтали и вертикали
    // },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) =>
    <CountrySelect {...args} />;

export const CountrySelectLight = Template.bind({});
CountrySelectLight.args = {};

export const CountrySelectDark = Template.bind({});
CountrySelectDark.args = {};
CountrySelectDark.decorators = [ThemeDecorator(Theme.DARK)];