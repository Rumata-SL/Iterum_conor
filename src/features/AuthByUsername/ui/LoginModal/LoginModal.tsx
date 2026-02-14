import {Modal} from "shared/ui/Modal";
import {Suspense} from "react";
import {LoginFormAsync} from "../LoginForm/LoginForm.async";
import {Loader} from "shared/ui/Loader";

export interface LoginModalProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const {onClose, isOpen} = props;


    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            lazy
        >
            <Suspense
                fallback={<Loader/>}
            >
                <LoginFormAsync onSuccess={onClose}/>
            </Suspense>
        </Modal>
    );
};