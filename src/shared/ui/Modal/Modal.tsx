import { ReactNode, useEffect, useRef } from 'react';
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
    const previousFocusRef = useRef<HTMLElement | null>(null);
    const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    useEffect(() => {
        if (isOpen) {
            previousFocusRef.current = document.activeElement as HTMLElement;

            const focusable = modalRef.current?.querySelectorAll(focusableSelector);
            if (focusable && focusable.length > 0) {
                (focusable[0] as HTMLElement).focus();
            } else {
                modalRef.current?.focus();
            }
        } else {
            previousFocusRef.current?.focus()
        }
    }, [isOpen]);

    const handleTabKey = (e: React.KeyboardEvent) => {
        if (e.key === 'Tab') {
            const focusableElements = modalRef.current?.querySelectorAll(focusableSelector);
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
                        onClick={(e) => e.stopPropagation()}
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