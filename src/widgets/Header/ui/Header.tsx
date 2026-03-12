import ThemeSwitcher from "@/features/ThemeSwitcher/ui/ThemeSwitcher";
import Modal from "@/shared/ui/Modal/Modal";
import s from './header.module.css'

const Header = () => {

    return (
        <header className={s.header}>
            <Modal />
            <ThemeSwitcher />
        </header>
    );
};

export default Header;