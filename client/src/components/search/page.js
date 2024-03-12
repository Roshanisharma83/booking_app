'use client'
import React from 'react'
import styles from "./style.module.css"
const SearchItem = () => {
    return (
      <div className="searchItem">
        <img
          src='../rooms.jpeg'
          alt=""
          className="siImg"
        />
        <div className={styles.searchDestance}>
          <h1 className={styles.searchTitle}>Tower Street Apartments</h1>
          <span className={styles.siDistance}>500m from center</span>
          <span className={styles.siTaxiOp}>Free airport taxi</span>
          <span className={styles.siSubtitle}>
            Studio Apartment with Air conditioning
          </span>
          <span className={styles.siFeatures}>
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className={styles.siCancelOp}>Free cancellation </span>
          <span className={styles.siCancelOpSubtitle}>
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className={styles.siDetails}>
          <div className={styles.siRating}>
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className={styles.siDetailTexts}>
            <span className={styles.siPrice}>100</span>
            <span className={styles.siTaxOp}>Includes taxes and fees</span>
            <button className={styles.siCheckButton}>See availability</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchItem;