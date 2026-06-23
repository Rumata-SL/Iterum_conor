import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {Card} from "./Card";
import {Text} from "shared/ui/Text";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: "shared/Card",
    component: Card,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) =>
    <Card {...args} />;

export const PrimaryCard = Template.bind({});
PrimaryCard.args = {
    children: <Text title={"Text Lorem"} text={"Text Lorem"}/>
};

export const CardDark = Template.bind({});
CardDark.args = {
    children: <Text title={"Text Lorem"} text={"Text Lorem"}/>
};
CardDark.decorators = [ThemeDecorator(Theme.DARK)];