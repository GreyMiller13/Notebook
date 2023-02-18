import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IPost } from '../../types/IPost';
import { Loader } from '../Loader/Loader';
import styles from './Page.module.scss';
import dayjs from 'dayjs';

export const Page = () => {
  const { id } = useParams();
  //   Ругается при передаче {}
  const [post, setPost] = useState<IPost>(Object);
  const [isLoading, setIsLoading] = useState(true);

  async function getPost() {
    const { data } = await axios.get(`http://localhost:3000/posts/${id}`);
    setPost(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <article>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.post}>
          <div className={styles.post_header}>
            <p className={styles.post_title}>{post.title}</p>
            <Link to={'/posts'}>
              <button className={styles.post_button}>Back</button>
            </Link>
          </div>
          <p className={styles.post_body}>{post.body}</p>
          <p className={styles.post_created}>{dayjs(post?.createdAt?.toString()).format('DD.MM.YYYY HH:mm:ss')}</p>
        </div>
      )}
    </article>
  );
};
