import React from "react";
import styles from "./Blog.module.css";

function CategoryTag({ text }) {
  return <div className={styles.categoryTag}>{text}</div>;
}

export default CategoryTag;
