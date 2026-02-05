import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {Text, TextTheme} from "./Text";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: "shared/Text",
    component: Text,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "Title Lorem",
    text: `Lorem ipsum dolor sit amet,
     consectetur adipisicing elit.
      Asperiores eligendi et exercitationem`
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: "Title Lorem",
    text: `Lorem ipsum dolor sit amet,
     consectetur adipisicing elit.
      Asperiores eligendi et exercitationem`
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: "Title Lorem",
};

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: "Title Lorem",
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyText = Template.bind({});
onlyText.args = {
    text: `Lorem ipsum dolor sit amet,
     consectetur adipisicing elit.
      Asperiores eligendi et exercitationem`
};

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: `Lorem ipsum dolor sit amet,
     consectetur adipisicing elit.
      Asperiores eligendi et exercitationem`
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    theme: TextTheme.ERROR,
    title: "Title Lorem",
    text: `Lorem ipsum dolor sit amet,
     consectetur adipisicing elit.
      Asperiores eligendi et exercitationem`
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    theme: TextTheme.ERROR,
    title: "Title Lorem",
    text: `Lorem ipsum dolor sit amet,
     consectetur adipisicing elit.
      Asperiores eligendi et exercitationem`
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];