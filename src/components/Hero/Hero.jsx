import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Helmi</h1>
        <p className={styles.description}>
        I'm a full-stack developer specializing in React and NodeJS, with a strong passion for cybersecurity and a commitment to securing digital infrastructures. Reach out if you'd like to learn more or collaborate!
        </p>
        <a href="mailto:mohamadhelmimohamadsayonoy11@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
