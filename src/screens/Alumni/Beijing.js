import React from 'react';
import { useTranslation } from 'react-i18next';
import Background from '../../img/AlumniPageBackground.png';
import BeiJingBG from '../../img/Beijing.jpg';

const Beijing = () => {
  const { t, i18n } = useTranslation();

  const getTranslatedText = (translations) => {
    const lang = i18n.language;
    return translations[lang] || translations.en;
  };

  return (
    <div className="beijing-container">
      <div className="beijing-background-layer"></div>
      <div className="beijing-background-image"></div>
      <div className="beijing-content">
        <img className="beijing-image" src={BeiJingBG} alt="Scenic view of Beijing" />
        <div className="beijing-text-content">
          <div className={`beijing-title ${i18n.language === 'en' ? 'no-wrap' : ''}`}>
            {getTranslatedText({
              zh: '北京校友会',
              en: 'Beijing Alumni Association',
              tc: '北京校友會'
            })}
          </div>
          <div className="beijing-paragraph">
            {getTranslatedText({
              zh: '加入北京校友会，联系 secretary@hkustquant.hk',
              en: 'Join the Beijing Alumni Association, contact secretary@hkustquant.hk',
              tc: '加入北京校友會，聯繫 secretary@hkustquant.hk'
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beijing;
