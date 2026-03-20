import ThemeSwitcher from "@/features/ThemeSwitcher/ui/ThemeSwitcher";
import { ProjectInfoModal } from "@/features/ProjectInfoModal";
import { Link } from "react-router-dom";
import s from './header.module.css'

const Header = () => {

    return (
        <header className={s.header}>
            <nav className={s.header_nav}>
                <Link to={'/'}>Главная</Link>
            </nav>
            <div className={s.actions}>
            <ProjectInfoModal />
            <ThemeSwitcher />
            </div>
        </header>
    );
};

export default Header;