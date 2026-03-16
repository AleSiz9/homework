import ThemeSwitcher from "@/features/ThemeSwitcher/ui/ThemeSwitcher";
import s from './header.module.css'
import { ProjectInfoModal } from "@/features/ProjectInfoModal";

const Header = () => {

    return (
        <header className={s.header}>
            <ProjectInfoModal />
            <ThemeSwitcher />
        </header>
    );
};

export default Header;