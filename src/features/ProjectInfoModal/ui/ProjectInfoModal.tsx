import Button from '@/shared/ui/Button/Button';
import Modal from '@/shared/ui/Modal/Modal';
import { useState } from 'react';
import { FiInfo } from 'react-icons/fi';
import s from './ProgectInfoModal.module.css'

const ProjectInfoModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleIsModalOpen = () => {
        setIsModalOpen(true)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <Button className={s.btn__padding} onClick={handleIsModalOpen}>
                <FiInfo size={20} />
            </Button>
            <Modal
                isOpen={isModalOpen}
                onClose={handleModalClose}
            >
                <Modal.Header className={s.infoModalHeader}>
                    О проекте
                    <Button
                    variant='secondary'
                    onClick={handleModalClose}
                    >
                        Закрыть
                        </Button>
                </Modal.Header>
                <Modal.Body>Тут описание</Modal.Body>
                <Modal.Footer>это футер</Modal.Footer>
            </Modal>
        </>
    );
};

export default ProjectInfoModal;