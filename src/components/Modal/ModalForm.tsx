import axios from 'axios';
import React, { FC, useState } from 'react';
import { IPost } from '../../types/IPost';
import styles from './Modal.module.scss';

interface IModalFormProps {
  elem: IPost;
  onClose: () => void;
  getPosts: () => void;
}

export const ModalForm: FC<IModalFormProps> = ({ elem, onClose, getPosts }) => {
  const [title, setTitle] = useState(elem.title);
  const [body, setBody] = useState(elem.body);

  async function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    await axios.patch(`http://localhost:3000/posts/${elem.id}`, {
      title: title,
      body: body,
    });
    onClose();
    getPosts();
  }

  return (
    <form className={styles.modal_form__wrapper} onSubmit={submitHandler}>
      <p className={styles.modal_form__title}>Edit your note</p>
      <input
        type="text"
        className={styles.modal_form__input}
        placeholder="Post title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        className={styles.modal_form__textarea}
        placeholder="Post body"
        value={body}
        onChange={(event) => setBody(event.target.value)}
      ></textarea>
      <button className={styles.modal_form__button} type="submit">
        Save
      </button>
    </form>
  );
};
