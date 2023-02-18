import clsx from "clsx";
import React, { FC, HTMLAttributes, PropsWithChildren } from "react";
import styles from './Container.module.scss';

export const Container:FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({children, className, onClick}) => {
   return (
      <div 
      className={clsx(className, styles.container)}
      onClick={onClick}>
         {children}
      </div>
   )
}