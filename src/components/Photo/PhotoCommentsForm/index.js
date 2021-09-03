import React, { useState } from 'react';
import {ReactComponent as EnviarIcon } from '../../../assets/enviar.svg';
import { COMMENT_POST } from '../../../config/api';
import useFetch from '../../../hooks/useFetch';
import ErrorContainer from '../../ErrorContainer';
import { FormContainer, SendButton, TextareaMessage } from './styles';

const PhotoCommentsForm = ({id, setComments}) => {
  const {request, error} = useFetch();
  const [comment, setComment] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, {comment});
    const { response , json } = await request(url, options);
    if (response.ok) {
      setComment('')
      setComments(comments  => [...comments, json])
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TextareaMessage 
        id="comment"
        placeholder="Comente..."
        name="comment"
        value={comment} 
        onChange={({target}) => setComment(target.value)}
      />

      <SendButton>
        <EnviarIcon />
      </SendButton>

      {error && <ErrorContainer error={error} />}
    </FormContainer>
  )
}

export default PhotoCommentsForm
