import type { PropsWithChildren } from "react";

interface ModalHeaderProps {
    className?: string;
}

const ModalHeader = ({ children, className = '' }: PropsWithChildren<ModalHeaderProps>) => {
    return (
        <>
            {children && (
                <div className={className}>{children}</div>
            )}
        </>
    )
}

export default ModalHeader
