import React from "react";
import styles from "./Blog.module.css";

function BlogArticle({ image, title, date, author, content }) {
  return (
    <article className={styles.article}>
      <img
        loading="lazy"
        src={image}
        className={styles.articleImage}
        alt={`Article about ${title}`}
      />
      <h3 className={styles.articleTitle}>{title}</h3>
      <div className={styles.articleMeta}>
        <time className={styles.articleDate}>{date}</time>
        <span className={styles.articleAuthor}>By {author}</span>
      </div>
      <p className={styles.articleContent}>{content}</p>
    </article>
  );
}

export default BlogArticle;
