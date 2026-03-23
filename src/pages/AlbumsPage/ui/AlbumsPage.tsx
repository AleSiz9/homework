import { useGetAlbumsByUserQuery } from "@/entities/album/api/albumsApi";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@/shared/ui/Button/Button";
import s from './AlbumsPage.module.css';


const AlbomsPage = () => {
//можно разбить на слои ниже но тк доп интерактива нету оставил так
    const {id} = useParams<{id: string}>()
    const {data: albums, isLoading, error} = useGetAlbumsByUserQuery(Number(id))
    const [limit, setLimit] = useState(3)
    const step = 3
    const visible = useMemo(() => albums?.slice(0, limit), [albums, limit])
    const handleShowMore = () => setLimit(prev => prev + step)

    if (isLoading) return <div>Загрузка альбомов...</div>;
    if (error) return <div>Ошибка {error.message}</div>;
    return (
        <div>
            <h2 className={s.title}>Альбомы пользователя {id}</h2>
            {albums?.length === 0 ? (
                <p className={s.empty}>У пользователя нет альбомов</p>
            ) : (
                <>
                    <div className={s.grid}>
                        {visible?.map(album => (
                            <Link
                                key={album.id}
                                to={`/albums/${album.id}/photos`}
                                className={s.card}
                            >
                                <div className={s.cardContent}>
                                    <p className={s.cardTitle}>{album.title}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {limit < (albums?.length ?? 0) && (
                        <Button
                            className={s.showMore}
                            onClick={handleShowMore}
                            variant="secondary"
                        >
                            Показать ещё
                        </Button>
                    )}
                </>
            )}
        </div>
    );
};

export default AlbomsPage;