import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ProfileCard} from "entities/Profile";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import avatarImg from "../../../../shared/assets/test/storibook_avatar.jpg";

export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {
        backgroundColor: {control: "color"},
    },

} as ComponentMeta<typeof ProfileCard>;

const form = {
    id: "1",
    firstName: "John",
    lastName: "Snow",
    age: 35,
    currency: Currency.EU,
    country: Country.Germany,
    city: "Winterfall",
    userName: "admin",
    avatar: avatarImg
};

const Template: ComponentStory<typeof ProfileCard> = (args) =>
    <ProfileCard {...args}/>;

export const ProfileCardLight = Template.bind({});
ProfileCardLight.args = {
    form: form
};

export const ProfileCardDark = Template.bind({});
ProfileCardDark.args = {
    form: form
};
ProfileCardDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ProfileCardIsLoading = Template.bind({});
ProfileCardIsLoading.args = {
    isLoading: true
};

export const ProfileCardWithError = Template.bind({});
ProfileCardWithError.args = {
    error: "true"
};
