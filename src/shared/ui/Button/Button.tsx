import { ButtonHTMLAttributes, forwardRef} from "react";
import s from './button.module.css'

export type ButtonVarian = 'primary' | 'secondary' | 'outline' 

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVarian; 
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        className='',
        children,
        variant = 'primary',
        ...otherProps
    }, ref) => {

        const buttonClasses = [
        s.button,
        s[variant],
        className
    ].filter(Boolean).join(' ');

    return (
        <button
        ref={ref}
            className={buttonClasses}
            {...otherProps}
        >
            {children}
        </button>
    );

});

export default Button;