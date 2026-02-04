import {Modal} from "shared/ui/Modal";
import {LoginForm} from "../LoginForm/LoginForm";

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
            <LoginForm/>
        </Modal>
    );
};