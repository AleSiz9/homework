import { useTheme } from '@/shared/lib/theme/ThemeContext';
import Button from '@/shared/ui/Button/Button';
import { FiMoon, FiSun } from 'react-icons/fi';
import s from './switcher.module.css'

const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            className={s.btn__padding}
            onClick={toggleTheme}
        >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
        </Button>
    );
};

export default ThemeSwitcher;