import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Theme} from "app/providers/ThemeProvider";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ProfilePage from "./ProfilePage";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import avatarImg from "shared/assets/test/storibook_avatar.jpg";
import {ValidateProfileError} from "entities/Profile/model/types/profile";

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
        form: {
            firstName: "John",
            lastName: "Snow",
            age: 35,
            currency: Currency.EU,
            country: Country.Germany,
            city: "Winterfall",
            userName: "admin",
            avatar: avatarImg
        },
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
        form: {
            firstName: "John",
            lastName: "Snow",
            age: 35,
            currency: Currency.EU,
            country: Country.Germany,
            city: "Winterfall",
            userName: "admin",
            avatar: avatarImg
        },
    },
}), ThemeDecorator(Theme.DARK)];

export const ProfilePageLoading = Template.bind({});
ProfilePageLoading.args = {
    children: "ProfilePage",
};
ProfilePageLoading.decorators = [StoreDecorator({
    profile: {
        isLoading: true,
        error: undefined,
        readonly: false,
        form: undefined,
    }
}), ThemeDecorator(Theme.DARK)];

export const ProfilePageWithValidateErrors = Template.bind({});
ProfilePageWithValidateErrors.args = {
    children: "ProfilePage",

};
ProfilePageWithValidateErrors.decorators = [StoreDecorator({
    profile: {
        isLoading: false,
        error: undefined,
        readonly: false,
        validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
        form: {
            firstName: "",
            lastName: "",
            age: 35,
            currency: Currency.EU,
            country: Country.Germany,
            city: "Winterfall",
            userName: "admin",
            avatar: avatarImg
        },
    }
}), ThemeDecorator(Theme.DARK)];