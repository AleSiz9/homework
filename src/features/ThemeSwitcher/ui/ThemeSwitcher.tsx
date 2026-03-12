import { useTheme } from '@/shared/lib/theme/ThemeContext';
import Button from '@/shared/ui/Button/Button';

const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            onClick={toggleTheme}
        >
            {theme === 'dark' ? 'Светлая тема' : 'Темная тема'}
        </Button>
    );
};

export default ThemeSwitcher;