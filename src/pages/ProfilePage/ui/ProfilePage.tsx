import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader";
import {profileReducer} from "entities/Profile/model/slice/profileSlice";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {ReactNode, useEffect} from "react";
import {fetchProfileData, ProfileCard} from "entities/Profile";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "features/AuthByUsername/ui/LoginForm/LoginForm.module.scss";

export interface ProfilePageProps {
    className?: string;
    children?: ReactNode;
}

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = ({className}: ProfilePageProps) => {
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <ProfileCard/>
        </div>
    </DynamicModuleLoader>
    );
};

export default ProfilePage;