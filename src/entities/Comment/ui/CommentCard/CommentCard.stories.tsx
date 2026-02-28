import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {CommentCard} from "./CommentCard";
import avatarIcon from "../../../../shared/assets/test/storibook_avatar.jpg";

const data = {
    id: "1",
    text: "comment",
    user: {
        id: "1",
        username: "user",
        avatar: avatarIcon
    }
};

export default {
    title: "entities/CommentCard",
    component: CommentCard,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) =>
    <CommentCard {...args} />;

export const PrimaryCommentCard = Template.bind({});
PrimaryCommentCard.args = {
    comment: data,
};

export const LoadingCommentCard = Template.bind({});
LoadingCommentCard.args = {
    isLoading: true,
};