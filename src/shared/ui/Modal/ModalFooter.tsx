import type { PropsWithChildren } from "react";

interface ModalFooterProps {
    className?: string;
}

const ModalFooter = ({ children, className = '' }: PropsWithChildren<ModalFooterProps>) => {
    return (
        <>
            {children && (
                <div className={className}>{children}</div>
            )}
        </>
    );
};

export default ModalFooter;