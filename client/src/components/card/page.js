"use image";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardItem}>
        <Link href="/nepal/chitwan">
          <Image
            className={styles.cardImage}
            src="/nepal.jpeg"
            width={350}
            height={250}
            alt="Picture of the author"
          />
        </Link>
        <div className={styles.cardTitles}>
          <h1>Nepal</h1>
          <h2>22 Properties</h2>
        </div>
      </div>

      <div className={styles.cardItem}>
        <Link href="/nepal/chitwan">
          <Image
            className={styles.cardImage}
            src="/india.png"
            width={350}
            height={250}
            alt="Picture of the author"
          />
        </Link>
        <div className={styles.cardTitles}>
          <h1>India</h1>
          <h2>10 Properties</h2>
        </div>
      </div>

      <div className={styles.cardItem}>
        <Link href="/nepal/chitwan">
          <Image
            className={styles.cardImage}
            src="/bangkok.jpeg"
            width={350}
            height={250}
            alt="Picture of the author"
          />
        </Link>
        <div className={styles.cardTitles}>
          <h1>Bangkok</h1>
          <h2>12 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
