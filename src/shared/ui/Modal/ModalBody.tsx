import type { PropsWithChildren } from "react";

interface ModalBidyProps {
    className?: string
}

const ModalBody = ({children, className=''}: PropsWithChildren<ModalBidyProps>) => {
    return (
        <>
            {children && (
                <div className={className}>{children}</div>
            )}
        </>
    );
};

export default ModalBody;