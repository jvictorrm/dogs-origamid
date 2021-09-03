import React, { useContext, useEffect, useRef, useState } from 'react'
import { CommentsList, Container } from './styles';
import { AuthContext } from '../../../contexts/AuthContext';
import PhotoCommentsForm from '../PhotoCommentsForm';

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef(null);
  const { data } = useContext(AuthContext);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments])

  return (
    <Container>
      <CommentsList ref={commentsSection}>
        {comments.map(comment => 
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        )}
      </CommentsList>
      {data && <PhotoCommentsForm id={props.id} setComments={setComments}/>}
    </Container> 
  )
}

export default PhotoComments
