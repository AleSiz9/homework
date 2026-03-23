import { useGetPhotosByAlbumQuery } from '@/entities/photo/api/photoApi';
import { useParams } from 'react-router-dom';

const PhotosPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data: photos, isLoading, error } = useGetPhotosByAlbumQuery(Number(id))
    if (isLoading) return <div>Загрузка</div>
    if (error) return <div>Ошибка {error.message}</div>;
    //можно разбить на слои ниже но тк доп интерактива нету оставил так
    return (
        <div>
            {photos?.map(photo => (
                <div key={photo.id}>
                    <p>{photo.title}</p>
                </div>
            ))}
        </div>
    )
};

export default PhotosPage;