import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    overlayClassName?: string;
    contentClassName?: string;
}

const Modal = ({
    children,
    onClose,
    isOpen,
    overlayClassName = '',
    contentClassName = ''
}: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleTabKey = (e: React.KeyboardEvent) => {
        if (e.key === 'Tab') {
            const focusableElements = modalRef.current?.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            if (!focusableElements || focusableElements.length === 0) return;

            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    };

    return (
        <>
            {isOpen && createPortal(
                <div
                    className={overlayClassName}
                    role='presentation'
                    onClick={onClose}
                >
                    <div
                        className={contentClassName}
                        ref={modalRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                        onKeyDown={handleTabKey}
                    >
                        {children}
                    </div>
                </div>,
                document.body

            )}
        </>
    );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;