import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader";
import {profileReducer} from "entities/Profile/model/slice/profileSlice";
import {useTranslation} from "react-i18next";

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const {t} = useTranslation();
    return (<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div>
            {t("ProfilePage")}
        </div>
    </DynamicModuleLoader>
    );
};

export default ProfilePage;