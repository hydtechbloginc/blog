import React from "react";

import {
  Comment,
 // CommentLink,
  //CommentLinkContainer,
} from "../Components/Post/Comment";

const CommentsSection = ({postUrl, comments}) => {
  return (
    <>

      {comments.map((v, id) => (
        <Comment comment={v} key={id} />
      ))}
    </>
  );
};

export default CommentsSection;
