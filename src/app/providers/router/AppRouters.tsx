import AlbumsPage from '@/pages/AlbumsPage';
import MainPage from '@/pages/MainPage';
import PhotosPage from '@/pages/PhotosPage';
import PostPage  from '@/pages/PostPage';
import TodosPage from '@/pages/TodosPage';
import UserPage from '@/pages/UserPage';
import UserPostsPage from '@/pages/UserPostsPage';
import MainLayout from '@/shared/layouts/MainLayout/MainLayout';
import { Navigate, Route, Routes } from 'react-router-dom';


const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="posts">
          <Route index element={<MainPage />} />
          <Route path=":id" element={<PostPage />} />
        </Route>
        <Route path="users/:id" element={<UserPage />}>
          <Route index element={<Navigate to='posts' replace />}/>
          <Route path="albums" element={<AlbumsPage />} />
          <Route path="todos" element={<TodosPage />} />
          <Route path="posts" element={<UserPostsPage />} />
        </Route>
        <Route path='albums/:id'>
            <Route path='photos' element={<PhotosPage />}/>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouters