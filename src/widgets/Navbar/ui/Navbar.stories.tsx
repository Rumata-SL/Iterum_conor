import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Navbar} from "./Navbar";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
    title: "widgets/Navbar",
    component: Navbar,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarLight = Template.bind({});
NavbarLight.args = {
    children: "Navbar",
};
NavbarLight.decorators = [StoreDecorator({
    user: {
        authData: undefined,
    }
})];

export const NavbarDark = Template.bind({});
NavbarDark.args = {
    children: "Navbar",
};
NavbarDark.decorators = [ThemeDecorator(Theme.DARK)];
NavbarDark.decorators = [StoreDecorator({
    user: {
        authData: undefined,
    }
})];

export const NavbarLogout = Template.bind({});
NavbarLogout.args = {
    children: "Navbar",
};
NavbarLogout.decorators = [ThemeDecorator(Theme.DARK)];
NavbarLogout.decorators = [StoreDecorator({
    user: {
        authData: {
            username: "admin",
            id: "1",
        }
    }
})];
