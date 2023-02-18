import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { IPost } from '../../types/IPost';
import AddPost from '../AddPost/AddPost';
import { Modal } from '../Modal/Modal';
import PostListItem from '../PostListItem/PostListItem';
import styles from './PostList.module.scss';

function PostsList() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editablePost, setEditablePost] = useState<IPost | null>(null);

  async function getPosts() {
    const { data }: AxiosResponse<IPost[]> = await axios.get('http://localhost:3000/posts', {
      params: { limit: 20, offset: 20 },
    });
    setPosts(data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  async function deletePost(id: number) {
    let response = window.confirm('Are you sure?');
    if (response) {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      getPosts();
    }
  }

  const editPost = (post: IPost) => {
    setIsModalOpen(true);
    setEditablePost(post);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.posts_list__main_container}>
      <AddPost onSuccessFinal={getPosts} />
      <section className={styles.posts}>
        {posts.map((post) => (
          <PostListItem post={post} deletePost={deletePost} editPost={editPost} key={post.id} />
        ))}
      </section>
      <Modal show={isModalOpen} onClose={closeModal} elem={editablePost} getPosts={getPosts} />
    </div>
  );
}

export default PostsList;
