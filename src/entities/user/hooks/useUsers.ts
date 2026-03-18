import { IUser } from "@/entities/comment/model/types";
import { mockUsers } from "@/shared/ui/User/mocks/mocksUsers";
import { useCallback, useEffect, useState } from "react";

export const useUsers = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [users, setUsers] = useState<IUser[]>([]);

    async function mockFetch() {
        return new Promise<IUser[]>((resolve) => {
            const delay = Math.random() * 1000 + 500
            setTimeout(() => {
                resolve(mockUsers)
            }, delay)
        }
        )
    }
    const fetchUsers = useCallback(async () => {
        try {
            setLoading(true);
            setError('');
            const result = await mockFetch();
            setUsers(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ошибка');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

        const getUserById = (id: number) => users.find(u => u.id === id)

    return { users, loading, error, refetch: fetchUsers, getUserById };
};