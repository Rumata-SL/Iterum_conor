import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Theme} from "app/providers/ThemeProvider";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ProfilePage from "./ProfilePage";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
    title: "pages/ProfilePage",
    component: ProfilePage,
    argTypes: {
        backgroundColor: {control: "color"},
    },

} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () =>
    <ProfilePage/>;

export const ProfilePageLight = Template.bind({});
ProfilePageLight.args = {
    children: "ProfilePage",
    theme: Theme.LIGHT
};
ProfilePageLight.decorators = [StoreDecorator({
    profile: {
        isLoading: false,
    }
})];

export const ProfilePageDark = Template.bind({});
ProfilePageDark.args = {
    children: "ProfilePage",
    theme: Theme.DARK
};
ProfilePageDark.decorators = [StoreDecorator({
    profile: {
        isLoading: false,
    }
}), ThemeDecorator(Theme.DARK)];