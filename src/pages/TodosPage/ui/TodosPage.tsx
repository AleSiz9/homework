import { useGetTodosByUserQuery } from "@/entities/todos/api/todoApi";
import { useParams } from "react-router-dom";
import s from './TodosPage.module.css'

const TodosPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data: todos, isLoading, error } = useGetTodosByUserQuery(Number(id));
    //можно разбить на слои ниже но тк доп интерактива нету оставил так
    if (error) return <div>Ошибка {error.message}</div>;

    return (
        <div className={s.page}>
            <h1 className={s.title}>Задачи пользователя {id}</h1>
            {isLoading ?
                <div>Загрузка...</div>
                :
                <div className={s.todoList}>
                    {todos?.map(todo => (
                        <div key={todo.id} className={s.todoItem}>
                            <p className={s.todoTitle}>{todo.title}</p>
                            <span className={`${s.todoStatus} ${todo.completed ? s.statusCompleted : s.statusPending}`}>
                                {todo.completed ? '✅ Выполнено' : '⏳ В процессе'}
                            </span>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default TodosPage;