import React, { FC } from 'react';
import { IPost } from '../../types/IPost';
import styles from './PostListItem.module.scss';
import { ReactComponent as IconClose } from '../../assets/icons/cross-circle.svg';
import { ReactComponent as IconClose2 } from '../../assets/icons/delete.svg';
import { ReactComponent as IconEdit } from '../../assets/icons/edit.svg';
import { ReactComponent as IconEdit2 } from '../../assets/icons/edit-new.svg';
import dayjs from 'dayjs';
import { NavLink } from 'react-router-dom';

interface IPostListItem {
  post: IPost;
  deletePost: (id: number) => void;
  editPost: (post: IPost) => void;
}

const PostListItem: FC<IPostListItem> = ({ post, deletePost, editPost }) => {
  return (
    <div className={styles.postItem}>
      <div className={styles.postItem__block}>
        <div className={styles.postItem__post}>
          <NavLink to={`/posts/${post.id}`} className={styles.postItem__link}>
            <p className={styles.postItem__title}>{post.title}</p>
          </NavLink>
          <p className={styles.postItem__body}>{post.body}</p>
          {post?.createdAt ? (
            <p className={styles.postItem__createdAt}>
              {dayjs(post?.createdAt?.toString()).format('DD.MM.YYYY HH:mm:ss')}
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className={styles.postItem__buttons}>
          <button className={styles.postItem__buttons_btn} onClick={() => editPost(post)}>
            <IconEdit2 />
          </button>
          <button className={styles.postItem__buttons_btn} onClick={() => deletePost(post.id)}>
            <IconClose2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostListItem;
