import { Link, useParams } from "react-router-dom";


const AlbomsPage = () => {
    const albums = [
      { id: 1, name: "Альбом 1", userId: 1 },
      { id: 2, name: "Альбом 2", userId: 1 },
      { id: 3, name: "Альбом 1", userId: 2 },
      { id: 3, name: "Альбом 1", userId: 3 },
    ];
    const {id} = useParams<{id: string}>()
    const userAlbums = albums.filter(album => album.userId === Number(id));
    return (
        <div >
            это альбомы пользователя id{id}
            {userAlbums.map(album => (
                <div key={album.id} >
                    <Link to={`/albums/${album.id}/photos`}>{album.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default AlbomsPage;