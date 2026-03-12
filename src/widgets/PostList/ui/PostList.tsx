import PostCard from "@/entities/post/ui/PostCard";
import { mockPostcard } from "@/shared/mock/posts";
// import s from './PostLict.module.css'

const PostList = () => {

    return (
        <>
            <PostCard cards={mockPostcard}/>
        </>
    );
};

export default PostList;