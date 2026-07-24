import React from 'react';
import { useTranslation } from 'react-i18next';
import Background from '../../img/AlumniPageBackground.png';
import ShenzhenBG from '../../img/Shenzhen.webp';

const Shenzhen = () => {
  const { t, i18n } = useTranslation();

  const getTranslatedText = (translations) => {
    const lang = i18n.language;
    return translations[lang] || translations.en;
  };

  return (
    <div className="shenzhen-container">
      <div className="shenzhen-background-layer"></div>
      <div className="shenzhen-background-image"></div>
      <div className="shenzhen-content">
        <img className="shenzhen-image" src={ShenzhenBG} alt="Scenic view of Shenzhen" />
        <div className="shenzhen-text-content">
          <div className={`shenzhen-title ${i18n.language === 'en' ? 'no-wrap' : ''}`}>
            {getTranslatedText({
              zh: '深圳校友会',
              en: 'Shenzhen Alumni Association',
              tc: '深圳校友會'
            })}
          </div>
          <div className="shenzhen-paragraph">
            {getTranslatedText({
              zh: '加入深圳校友会，联系 secretary@hkustquant.hk',
              en: 'Join the Shenzhen Alumni Association, contact secretary@hkustquant.hk',
              tc: '加入深圳校友會，聯繫 secretary@hkustquant.hk'
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shenzhen;
