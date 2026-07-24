import React from 'react';
import { useTranslation } from 'react-i18next';
import Background from '../../img/AlumniPageBackground.png';
import HongKongBG from '../../img/Hongkong.webp';

const HongKong = () => {
  const { t, i18n } = useTranslation();

  const getTranslatedText = (translations) => {
    const lang = i18n.language;
    return translations[lang] || translations.en;
  };

  return (
    <div className="hongkong-container">
      <div className="background-layer"></div>
      <div className="background-image"></div>
      <div className="content">
        <img className="hongkong-image" src={HongKongBG} alt="Scenic view of Hong Kong" />
        <div className="text-content">
          <div className={`title ${i18n.language === 'en' ? 'no-wrap' : ''}`}>
            {getTranslatedText({
              zh: '香港校友会',
              en: 'Hong Kong Alumni Association',
              tc: '香港校友會'
            })}
          </div>
          <div className="paragraph">
            {getTranslatedText({
              zh: '加入香港校友会，联系 secretary@hkustquant.hk',
              en: 'Join the Hong Kong Alumni Association, contact secretary@hkustquant.hk',
              tc: '加入香港校友會，聯繫 secretary@hkustquant.hk'
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HongKong;
