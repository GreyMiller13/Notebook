import React, { ChangeEvent, FC, useState } from 'react';
import axios from 'axios';
import styles from './AddPost.module.scss';
import { IPost } from '../../types/IPost';
import { AddPostDropDown } from '../AddPostDropDown/AddPostDropDown';

interface AddPostProps {
  onSuccessFinal: () => void;
}

const AddPost: FC<AddPostProps> = ({ onSuccessFinal }) => {

  const [showForm, setShowForm] = useState(false);

  function showAddForm() {
    setShowForm((prev) => !prev);
  }


  return (
    <div className={styles.AddPost_container}>
      <p className={styles.AddPost_container__title}>Create your note</p>
      <button className={styles.AddPost_container__button} onClick={showAddForm}>
        {showForm ? <p>Cancel</p> : <p>Create</p>}
      </button>
      <AddPostDropDown isShow={showForm} onSuccessFinal={onSuccessFinal}/>
    </div>
  );
};

export default AddPost;
