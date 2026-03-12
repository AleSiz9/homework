import { useRef, useState } from 'react';
import Button from '../Button/Button';
import { createPortal } from 'react-dom';
import s from './modal.module.css'

const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const openButtonRef = useRef<HTMLButtonElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    const handleShowModal = () => {
        setShowModal(prev => !prev)
    }

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
            <Button
                className={s.buttonModal__open}
                ref={openButtonRef}
                onClick={handleShowModal}
            >
                Информация о проекте
            </Button>
            {showModal && createPortal(
                <div
                    className={s.overlay}
                    role='presentation'

                >
                    <div
                        className={s.content}
                        ref={modalRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                        onKeyDown={handleTabKey}
                    >
                        <p id='modal-description' className={s.description}>
                            Здесь будет информауия о проекте
                        </p>
                        <Button
                            ref={closeButtonRef}
                            onClick={handleShowModal}
                        >
                            Закрыть
                        </Button>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default Modal;