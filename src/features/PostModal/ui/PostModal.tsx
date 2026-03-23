import { memo } from "react";
import { Modal } from "@/shared/ui/Modal";
import { CommentList } from "@/widgets/CommentList";
import Button from "@/shared/ui/Button/Button";
import { useGetPostQuery } from "@/entities/post/api/postsApi";
import s from './PostModal.module.css'

interface PostCommentsModalProps {
    isOpen: boolean;
    onClose: () => void;
    id: number
}

const PostModal = memo(({ isOpen, onClose, id}: PostCommentsModalProps) => {
    const {data: post} = useGetPostQuery(id)
    if (!post) return null;
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <Modal.Header className={s.modalHeader}>
                <h2 className={s.postTitle}>{post.title}</h2>
                <p className={s.postBody}>{post.body}</p>
            </Modal.Header>
            <Modal.Body className={s.modalBody}>
                <CommentList id={id} />
            </Modal.Body>
            <Modal.Footer className={s.modalFooter}>
                <Button className={s.btn__position}
                variant="secondary"
                onClick={onClose}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default PostModal