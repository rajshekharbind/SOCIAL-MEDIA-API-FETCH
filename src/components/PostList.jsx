import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useEffect } from "react";



const PostList = () => {
  const {postList ,addInitialPosts } = useContext(PostListData);
//concept of useEfect and fetch dummy api
  useEffect(()=>{
    fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then(data =>{
      addInitialPosts(data.posts);
    });
  },[]);
 
    

  
  return(
  <>
   {postList.length===0 && <WelcomeMessage />}

   {postList.map((post)=>(
    <Post key={post.id} post={post}/>
   ))}
    </>
  );
};
export default PostList;