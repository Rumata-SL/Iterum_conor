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

const Template: ComponentStory<typeof ProfilePage> = (args) =>
    <ProfilePage {...args}/>;

export const ProfilePageLight = Template.bind({});
ProfilePageLight.args = {
    children: "ProfilePage",
};
ProfilePageLight.decorators = [StoreDecorator({

    profile: {
        isLoading: false,
        error: undefined,
        readonly: false,
        data: undefined,
    }
})];

export const ProfilePageDark = Template.bind({});
ProfilePageDark.args = {
    children: "ProfilePage",

};
ProfilePageDark.decorators = [StoreDecorator({

    profile: {
        isLoading: false,
        error: undefined,
        readonly: false,
        data: undefined,
    },
}), ThemeDecorator(Theme.DARK)];

export const ProfilePageWithData = Template.bind({});
ProfilePageWithData.args = {
    children: "ProfilePage",
};
ProfilePageWithData.decorators = [StoreDecorator({
    profile: {
        isLoading: false,
        error: undefined,
        readonly: false,
        data: {
            firstName: "John",
            lastName: "Doe"
        }
    }
}), ThemeDecorator(Theme.DARK)];