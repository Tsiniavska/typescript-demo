// * Base
import { useState } from 'react';
import React from 'react';

// * Components
import Button from '../../components/Button/Button';
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './Banner.module.css';
import { Link } from 'react-router-dom';

// * Type
import { EButton, EDesign } from '../../types/button.types';

const Banner: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const add = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <main className={styles.banner}>
      <Wrapper className={[styles.wrapper]}>
        <div className={styles.block}>
          <h1>The Design Thinking superpowers: {count}</h1>
          <p className={styles.text}>
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </p>
          <Button
            text="Get started"
            design={EDesign.BIG}
            href=""
            type={EButton.BUTTON}
            onClick={add}
          />
          <Button
            text="Instagram"
            design={EDesign.BIGWHITE}
            href="https://www.instagram.com/"
            type={EButton.BUTTON}
            onClick={() => {}}
          />
          <Link to="/list">
            <Button
              text="Our partners"
              design={EDesign.BIGWHITE}
              href=""
              type={EButton.BUTTON}
              onClick={() => {}}
            />
          </Link>
        </div>
        <div className={styles.image}>
          <img src="/banner.svg" alt="banner" />
        </div>
      </Wrapper>
    </main>
  );
};

export default Banner;
