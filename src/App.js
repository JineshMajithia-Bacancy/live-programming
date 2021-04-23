import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [likes, setLikes] = useState(100);
  const [dislikes, setDislikes] = useState(25);

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const likeHandler = () => {
    if (disliked) {
      setDisliked(false);
      setDislikes(dislikes - 1);
    }
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  const dislikeHandler = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    }
    if (disliked) {
      setDisliked(false);
      setDislikes(dislikes - 1);
    } else {
      setDisliked(true);
      setDislikes(dislikes + 1);
    }
  };

  return (
    <div>
      <button
        className={liked ? "like-button liked" : "like-button"}
        onClick={likeHandler}
      >
        Like | <span className="likes-counter">{likes}</span>
      </button>
      <button
        className={disliked ? "dislike-button disliked" : "dislike-button"}
        onClick={dislikeHandler}
      >
        Dislike | <span className="dislikes-counter">{dislikes}</span>
      </button>
    </div>
  );
}
