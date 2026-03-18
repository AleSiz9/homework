import ThemeSwitcher from "@/features/ThemeSwitcher/ui/ThemeSwitcher";
import { ProjectInfoModal } from "@/features/ProjectInfoModal";
import s from './header.module.css'
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className={s.header}>
            <ProjectInfoModal />
            <nav className={s.header_nav}>
                <Link to={'/'}>Главная</Link>
            </nav>
            <ThemeSwitcher />
        </header>
    );
};

export default Header;