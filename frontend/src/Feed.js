import {useState,useEffect} from "react";
import axios from "axios";

export default function Feed(){
  const [posts,setPosts]=useState([]);
  const [text,setText]=useState("");
  const user=JSON.parse(localStorage.getItem("user"));

  const fetchPosts=async()=>{
    const res=await axios.get("http://localhost:5000/api/posts");
    setPosts(res.data);
  };

  useEffect(()=>{fetchPosts()},[]);

  const createPost=async()=>{
    await axios.post("http://localhost:5000/api/posts",{
      userId:user._id,
      username:user.username,
      text
    });
    fetchPosts();
  };

  const likePost=async(id)=>{
    await axios.put(`http://localhost:5000/api/posts/like/${id}`,{userId:user._id});
    fetchPosts();
  };

  return(
    <div>
      <h2>Create Post</h2>
      <input onChange={e=>setText(e.target.value)}/>
      <button onClick={createPost}>Post</button>

      {posts.map(p=>(
        <div key={p._id}>
          <h4>{p.username}</h4>
          <p>{p.text}</p>
          <button onClick={()=>likePost(p._id)}>❤️ {p.likes.length}</button>
        </div>
      ))}
    </div>
  );
}
