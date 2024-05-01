// * Base
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';

// * Components
import Button from '../Button/Button';

// * Types
import { ELanguage } from '../../types/language';
import { EButton, EDesign } from '../../types/button.types';

const Language = memo(() => {
  const [language, setlanguage] = useState(ELanguage.UA);
  const [showList, setShowList] = useState<boolean>(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: ELanguage) => {
    i18n.changeLanguage(lang).then(() => {
      setlanguage(lang);
      setShowList(false);
    });
  };
  return (
    <div className="relative">
      <Button
        type={EButton.BUTTON}
        onClick={() => setShowList((prev) => !prev)}
        text=""
        href=""
        design={EDesign.LANGUAGE}
      >
        {t('language.' + language)}
      </Button>

      {showList && <List changeLanguage={changeLanguage} />}
    </div>
  );
});
const List = memo(
  ({ changeLanguage }: { changeLanguage: (lang: ELanguage) => void }) => (
    <ul className="absolute border border-primary cursor-pointer w-[120px] rounded-[4px]">
      <Item changeLanguage={changeLanguage} lang={ELanguage.UA} />
      <Item changeLanguage={changeLanguage} lang={ELanguage.EN} />
      <Item changeLanguage={changeLanguage} lang={ELanguage.PL} />
    </ul>
  )
);
const Item = memo(
  ({
    lang,
    changeLanguage,
  }: {
    lang: ELanguage;
    changeLanguage: (lang: ELanguage) => void;
  }) => {
    const { t } = useTranslation();
    return (
      <li
        className="p-2 flex justify-center hover:bg-black hover:border-black hover:text-white rounded-[4px]"
        onClick={() => changeLanguage(lang)}
      >
        {t('language.' + lang)}
      </li>
    );
  }
);
export default Language;
