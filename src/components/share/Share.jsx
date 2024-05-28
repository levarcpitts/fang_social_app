import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Cancel } from "@mui/icons-material";
import PermMediaRoundedIcon from '@mui/icons-material/PermMediaRounded';


export default function Share({isOpen, onClosee, childreen }) {


  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);
  const [width, setWidth] = useState('70vh');
  const [height, setHeight] = useState('170px')
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);


 
  const toggleExpansion = () => {
    console.log(`'${height}'` )
    if (expanded) {
      setWidth('70vh');
      setHeight('170px');
      setExpanded(false);
      setIsVisible(isVisible)
    }else {
      setWidth('70vh');
      setHeight('600px');
      setIsVisible(!isVisible);
      setExpanded(true);
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err)
      }
    }
    try{
       await axios.post("/posts", newPost);
       window.location.reload()
    }catch(err){

    }
  }

  if (!isOpen) return null;

  return (
    <div className="share" style={{ width: width, height: height}}>
    <div className="shareWrapper">
      <div className="shareTop">
        {/* <img className="shareProfileImg" src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" /> */}
        <input
          placeholder={`What's on your mind ${user.username.charAt(0).toUpperCase() + user.username.slice(1)}?`}
          className="shareInput"
          ref={desc}
        />
        <div className="mediaButtonWrapper">
        <PermMediaRoundedIcon sx={{ fontSize: 20 }} onClick={toggleExpansion} cursor="pointer" />
        </div>
      </div>
      {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
      <form className="shareBottom" onSubmit={submitHandler}>
      <div className={`shareOptions ${isVisible ? 'visible' : 'hidden'}`}>
              <label htmlFor="file" className="shareOption">
                  <PermMediaIcon htmlColor="lightgray" className="shareIcon"/>
                  <span className="shareOptionText">Photo or Video</span>
                  <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
              </label>
              <div className="shareOption">
                  <LabelIcon htmlColor="lightgray" className="shareIcon"/>
                  <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                  <RoomIcon htmlColor="lightgray" className="shareIcon"/>
                  <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                  <EmojiEmotionsIcon htmlColor="lightgray" className="shareIcon"/>
                  <span className="shareOptionText">Feelings</span>
              </div>
          </div>
          <button className="shareButton" type="submit">Share</button>
      </form>
    </div>
  </div>
  );
}
