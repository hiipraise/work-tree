import React from "react";
import "./profile.css";

let noOflike = 20;

const ContactCard = () => {
  const [likes, setLikes] = React.useState(noOflike);
  const [isLikes, setIsLike] = React.useState(false);
  const LikeAndUnlike = () => {
    return (
      <>
        <button
          onClick={() => {
            if (!isLikes) {
              setLikes(likes + 1);
              setIsLike(!isLikes);
            } else {
              setLikes(likes - 1);
              setIsLike(!isLikes);
            }
          }}
          className="likeunlike"
        >
          {(isLikes && "unlike") || "like"}
        </button>
      </>
    );
  };
  return (
    <div className="box2">
      <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="photo of" />

      <h2>Username</h2>
      <p>@Username || {likes} likes</p>
      <LikeAndUnlike />
    </div>
  );
};

export default ContactCard;
