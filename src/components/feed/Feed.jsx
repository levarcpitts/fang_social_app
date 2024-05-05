import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import { Posts } from "../../dummyData"
import { useState, useEffect } from "react"
import axios from "axios";

export default function Feed() {
  const [posts,setPosts] = useState([]);
  const [text,setText] = useState("");
  useEffect(()=>{
    const fetchPosts = async () => {
    const res = await axios.get("posts/timeline/66305968a8b069a3d916c03f");
    setPosts(res.data)
    };
    fetchPosts();
  },[])
  
  return (
    <div className="feed">
      <div className="feedWrapper">
      <Share />
           {posts.map((p)=> ( 
             <Post key={p._id} post={p}/>
          ))} 
          
        </div>
    </div>
  )
}
