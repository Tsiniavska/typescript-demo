// * Base
import { memo, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

// * Components
import Button from '../../components/Button/Button';
import Page from '../../components/Page/Page';

// * Type
import { EButton, EDesign } from '../../types/button.types';
import { useTranslation } from 'react-i18next';

const Banner: React.FC = memo(() => {
  const [count, setCount] = useState<number>(0);

  const add = () => {
    setCount((prev) => prev + 1);
  };

  const { t } = useTranslation();

  return (
    <Page title="">
      <main className="h-[calc(100vh-80px)] block items-center pt-[70px] pb-[70px]">
        <div className="wrapper flex items-center gap-[30px]">
          <div className="w-full max-w-[500px]">
            <h1 className="font-bold">
              {t('title')} {count}
            </h1>
            <p className="mt-[30px] text-[1.125em] cursor-default leading-7">
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
          <div className="w-full flex">
            <img src="/banner.svg" alt="banner" />
          </div>
        </div>
      </main>
    </Page>
  );
});

export default Banner;
