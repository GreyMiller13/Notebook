import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import React, { ChangeEvent, FC, useState } from 'react';
import styles from './AddPostDropDown.module.scss';

interface IAddPostDropDown {
  isShow: boolean;
  onSuccessFinal: () => void;
}

const dropDownVariants = {
  open: {
    opacity: 1,
    height: 'auto',
    margin: '16px 0 48px 0',
  },
  collapsed: { opacity: 0, height: 0, margin: '0px' },
};

export const AddPostDropDown: FC<IAddPostDropDown> = ({ isShow, onSuccessFinal }) => {
  const [form, setForm] = useState({
    title: '',
    body: '',
  });

  function changeHandler(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function savePost() {
    const body = {
      title: form.title,
      body: form.body,
      userId: 1,
      createdAt: new Date(),
    };
    if (body.title !== '' && body.body !== '') {
      const { data } = await axios.post('http://localhost:3000/posts', body);
    } else {
      alert('Empty data');
    }

    setForm({
      title: '',
      body: '',
    });

    onSuccessFinal();
  }
  return (
    <AnimatePresence >
      {isShow ? (
        <motion.div
          variants={dropDownVariants}
          initial="collapsed"
          animate="open"
          exit="collapsed"
          transition={{
            bounce: false,
            duration: 0.3,
          }}
        >
          <input
            className={styles.AddPost_container__input}
            type="text"
            placeholder="Post title"
            value={form.title}
            name="title"
            onChange={changeHandler}
          />
          <textarea
            className={styles.AddPost_container__textarea}
            name="body"
            placeholder="Post body"
            value={form.body}
            onChange={changeHandler}
          ></textarea>
          <button className={styles.AddPost_container__button} onClick={savePost}>
            Save
          </button>
        </motion.div>
      ) : (
        <></>
      )}
    </AnimatePresence>
  );
};
