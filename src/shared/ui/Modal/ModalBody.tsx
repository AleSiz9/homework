import { ReactNode } from 'react';

interface ModalBidyProps {
    children: ReactNode;
    className?: string
}

const ModalBody = ({children, className=''}: ModalBidyProps) => {
    return (
        <>
            {children && (
                <div className={className}>{children}</div>
            )}
        </>
    );
};

export default ModalBody;