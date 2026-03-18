import { useParams } from "react-router-dom";

const CommentsPage = () => {
    const {id} = useParams<{id: string}>()
    return (
        <div>
            это коментарии пользователя id{id}
        </div>
    );
};

export default CommentsPage;