import {Story} from "@storybook/react";
import cls from "./PositionDecorator.module.scss";

export const PositionDecorator = (story: () => Story) => (
    <div className={cls.PositionDecorator}>
        {story()}
    </div>
);