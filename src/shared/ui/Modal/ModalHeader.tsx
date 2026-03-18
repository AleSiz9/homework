import { ReactNode } from "react"

interface ModalHeaderProps {
    children?: ReactNode;
    className?: string;
}

const ModalHeader = ({ children, className = '' }: ModalHeaderProps) => {
    return (
        <>
            {children && (
                <div className={className}>{children}</div>
            )}
        </>
    )
}

export default ModalHeader
