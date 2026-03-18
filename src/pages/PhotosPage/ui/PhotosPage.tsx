import { useParams } from 'react-router-dom';

const PhotosPage = () => {
    const { id } = useParams<{ id: string }>();
    return (
        <div>
            Фотографии альбома {id}
        </div>
    )
};

export default PhotosPage;