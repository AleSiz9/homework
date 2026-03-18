import Button from '@/shared/ui/Button/Button';
import Modal from '@/shared/ui/Modal/Modal';
import { useState } from 'react';
import s from './ProgectInfoModal.module.css'

const ProjectInfoModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleIsModalOpen = () => {
        console.log(isModalOpen)
        setIsModalOpen(true)
    }

    const handleModalClose = () => {
        console.log(isModalOpen)
        setIsModalOpen(false)
    }

    return (
        <>
            <Button onClick={handleIsModalOpen}>Информация о проекте</Button>
            <Modal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                overlayClassName={s.projectInfoModal__оverlay}
                contentClassName={s.projectInfoModal__content}
            >
                <Modal.Header>О проекте</Modal.Header>
                <Modal.Body>Тут описание</Modal.Body>
                <Button onClick={handleModalClose}>Закрыть</Button>
                <Modal.Footer>это футер</Modal.Footer>
            </Modal>
        </>
    );
};

export default ProjectInfoModal;