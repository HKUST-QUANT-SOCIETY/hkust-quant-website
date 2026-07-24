import React from 'react';
import { useTranslation } from 'react-i18next';
import Background from '../../img/AlumniPageBackground.png';
import GuangzhouBG from '../../img/Guangzhou.jpg';

const Guangzhou = () => {
  const { t, i18n } = useTranslation();

  const getTranslatedText = (translations) => {
    const lang = i18n.language;
    return translations[lang] || translations.en;
  };

  return (
    <div className="guangzhou-container">
      <div className="guangzhou-background-layer"></div>
      <div className="guangzhou-background-image"></div>
      <div className="guangzhou-content">
        <img className="guangzhou-image" src={GuangzhouBG} alt="Scenic view of Guangzhou" />
        <div className="guangzhou-text-content">
          <div className={`guangzhou-title ${i18n.language === 'en' ? 'no-wrap' : ''}`}>
            {getTranslatedText({
              zh: '广州校友会',
              en: 'Guangzhou Alumni Association',
              tc: '廣州校友會'
            })}
          </div>
          <div className="guangzhou-paragraph">
            {getTranslatedText({
              zh: '加入广州校友会，联系 secretary@hkustquant.hk',
              en: 'Join the Guangzhou Alumni Association, contact secretary@hkustquant.hk',
              tc: '加入廣州校友會，聯繫 secretary@hkustquant.hk'
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guangzhou;
