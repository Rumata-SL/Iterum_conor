import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader";
import {profileActions, profileReducer} from "entities/Profile/model/slice/profileSlice";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {ReactNode, useCallback, useEffect} from "react";
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadOnly,
    ProfileCard,
    ProfileKey
} from "entities/Profile";
import {classNames} from "shared/lib/classNames/classNames";
import {useAppSelector} from "shared/lib/hooks/useAppSelector";
import {ProfilePageHeader} from "../ui/ProfilePageHeader/ProfilePageHeader";

export interface ProfilePageProps {
    className?: string;
    children?: ReactNode;
    disableApiCalls?: boolean;
}

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = ({className, disableApiCalls}: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const form = useAppSelector(getProfileForm);
    const isLoading = useAppSelector(getProfileIsLoading);
    const error = useAppSelector(getProfileError);
    const readOnly = useAppSelector(getProfileReadOnly);


    useEffect(() => {
        if (!disableApiCalls) {
            dispatch(fetchProfileData());
        }
    }, [dispatch, disableApiCalls]);

    const handleTextChange = useCallback((
        field: ProfileKey,
        value: string
    ) => {
        dispatch(profileActions.updateProfileField({field, value}));
    }, [dispatch]);

    const handleNumberChange = (field: ProfileKey, value: string) => {
        const numValue = value ? Number(value) : 0;
        dispatch(profileActions.updateProfileField({field, value: numValue}));
    };

    return (<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames("", {}, [className])}>
            <ProfilePageHeader/>
            <ProfileCard
                form={form}
                handleTextChange={handleTextChange}
                handleNumberChange={handleNumberChange}
                isLoading={isLoading}
                error={error}
                readOnly={readOnly}
            />
        </div>
    </DynamicModuleLoader>
    );
};

export default ProfilePage;