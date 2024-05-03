import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData";

export default function Post({post}) {

const user = Users.filter(u=>u.id===1)

console.log(user[0].username)

console.log(user)

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" />
                    <span className="postUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>

                </div>
                <div className="postTopRight"></div>
            <MoreVertIcon />
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt="" />
                </div> 
            <div className="postBottom">
                <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/like.png" />
                <img className="likeIcon" src="/assets/heart.png" alt="" /> 
                <span className="postLikeCounter">{post.like}</span>
                </div>
                <div className="postBottomRight"></div>
                <span className="postCommentText">{post.comment}</span>
            </div>

        </div>
    </div>
  )
}
