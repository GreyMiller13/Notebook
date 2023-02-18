import React, { FC, useEffect } from 'react';
import { IPost } from '../../types/IPost';
import styles from './Modal.module.scss';
import { ModalForm } from './ModalForm';
import { ReactComponent as IconClose } from '../../assets/icons/cross-circle.svg';

interface IModalProps {
  show: boolean;
  elem: IPost | null;
  onClose: () => void;
  getPosts: () => void;
}

export const Modal: FC<IModalProps> = ({ show, elem, onClose, getPosts }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add(styles.hidden);
    } else {
      document.body.classList.remove(styles.hidden);
    }
  }, [show]);

  return (
    <>
      {show && elem && (
        <>
          <div className={styles.modal}>
            <div className={styles.modal_form}>
              <ModalForm elem={elem} onClose={onClose} getPosts={getPosts} />
              <button className={styles.modal_form__onClose}>
                <IconClose onClick={() => onClose()} />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
