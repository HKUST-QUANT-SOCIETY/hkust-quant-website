import React from 'react';
import { useTranslation } from 'react-i18next';
import Background from '../../img/AlumniPageBackground.png';
import ShanghaiBG from '../../img/Shanghai.jpg';

const Shanghai = () => {
  const { t, i18n } = useTranslation();

  const getTranslatedText = (translations) => {
    const lang = i18n.language;
    return translations[lang] || translations.en;
  };

  return (
    <div className="shanghai-container">
      <div className="shanghai-background-layer"></div>
      <div className="shanghai-background-image"></div>
      <div className="shanghai-content">
        <img className="shanghai-image" src={ShanghaiBG} alt="Scenic view of Shanghai" />
        <div className="shanghai-text-content">
          <div className={`shanghai-title ${i18n.language === 'en' ? 'no-wrap' : ''}`}>
            {getTranslatedText({
              zh: '上海校友会',
              en: 'Shanghai Alumni Association',
              tc: '上海校友會'
            })}
          </div>
          <div className="shanghai-paragraph">
            {getTranslatedText({
              zh: '加入上海校友会，联系 secretary@hkustquant.hk',
              en: 'Join the Shanghai Alumni Association, contact secretary@hkustquant.hk',
              tc: '加入上海校友會，聯繫 secretary@hkustquant.hk'
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shanghai;
