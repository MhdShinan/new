import React from "react";
import styles from "./Blog.module.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.pageButton}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`${styles.pageButton} ${
            currentPage === index + 1 ? styles.active : ""
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={styles.pageButton}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
}

export default Pagination;
