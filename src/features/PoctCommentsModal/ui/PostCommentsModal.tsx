import { IPostCard } from "@/entities/post/ui/type";
import Button from "@/shared/ui/Button/Button";
import { Modal } from "@/shared/ui/Modal";
import { CommentList } from "@/widgets/CommentList";
import { IComment } from "@/entities/comment";
import s from './PostCommentsModal.module.css'

interface PostCommentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  comments: IComment[];
  post: IPostCard
}

const PostCommentsModal = ({ isOpen, onClose, comments, post }: PostCommentsModalProps) => {

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      overlayClassName={s.postCommentModal__overlay}
      contentClassName={s.postCommentModal__content}
    >
      <Modal.Header className={s.modalHeader}>
        <h2 className={s.postTitle}>{post.title}</h2>
        <p className={s.postBody}>{post.body}</p>
      </Modal.Header>
      <Modal.Body className={s.modalBody}>
        <CommentList comments={comments} />
      </Modal.Body>
      <Modal.Footer className={s.modakFooter}>
        <Button onClick={onClose}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PostCommentsModal