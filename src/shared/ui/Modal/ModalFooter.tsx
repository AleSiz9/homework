import { ReactNode } from 'react';

interface ModalFooterProps {
    children: ReactNode;
    className?: string;
}

const ModalFooter = ({ children, className = '' }: ModalFooterProps) => {
    return (
        <>
            {children && (
                <div className={className}>{children}</div>
            )}
        </>
    );
};

export default ModalFooter;