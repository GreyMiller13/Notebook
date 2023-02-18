import React from 'react';
import styles from './About.module.scss';

export const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_list}>
        <p className={styles.about_list__item}>
          <span>Notebook</span> is an online service for keeping your own notes, in which you can
          create, edit and delete entries.
        </p>
        <p className={styles.about_list__item}>
          To create a new entry, click the <span>Create</span> button, specify a title and text. To
          save the note, click the <span>Save</span> button.
        </p>
        <p className={styles.about_list__item}>
          To edit a previously created note, click on the button with the pencil icon. In the window
          that opens, you can change the title and text. To save the changes, click the
          <span> Save </span>
          button. If you change your mind about editing, then close the window on the button with a
          cross.
        </p>
        <p className={styles.about_list__item}>
          If you want to delete a previously created note, then click on the button with the trash
          icon and confirm the deletion by clicking the <span>Ok</span> button.
        </p>
        <p className={styles.about_list__item}>
          You can also read the text of each note in detail by going to it. To do this, click on the
          title of the note you are interested in.
        </p>
      </div>
    </div>
  );
};
