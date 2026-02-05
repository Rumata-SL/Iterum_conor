import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import React from "react";
import {LoginForm} from "features/AuthByUsername/ui/LoginForm/LoginForm";
import {StateDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
    title: "features/LoginForm",
    component: LoginForm,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StateDecorator({
    loginForm: {
        username: "admin",
        password: "123",
    }
})];


export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StateDecorator({
    loginForm: {
        username: "admin",
        password: "123",
    }
}), ThemeDecorator(Theme.DARK)];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StateDecorator({
    loginForm: {
        username: "admin",
        password: "123",
        error: "error",
    }
}), ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StateDecorator({
    loginForm: {
        isLoading: true,
    }
}), ThemeDecorator(Theme.DARK)];