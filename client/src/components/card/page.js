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
            src="/tanzania.jpeg"
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
            src="/chitwan.jpeg"
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
            src="/tanzania.jpeg"
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
    </div>
  );
};

export default Card;
