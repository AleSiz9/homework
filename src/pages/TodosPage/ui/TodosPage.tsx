import { useParams } from "react-router-dom";


const TodosPage = () => {
    const {id} = useParams<{id: string}>()
    return (
        <div>
            Это задачи пользователя id{id}
        </div>
    );
};

export default TodosPage;