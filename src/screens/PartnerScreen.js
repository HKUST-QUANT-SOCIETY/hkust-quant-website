import React from 'react';
import { useTranslation } from 'react-i18next';
import xianggangLogo from '../img/xianggang.png';
import TigerBrokers from '../img/TigerBrokers.png';
import MBALogo from '../img/MBA.png';
import tiannengLogo from '../img/tianneng.png';

function PartnerScreen() {

    const { t, i18n } = useTranslation();
    const partners = t('partners', { returnObjects: true });

    // 确认partners是一个数组
    if (!Array.isArray(partners)) {
        console.error('Partners is not an array:', partners);
        return <div>Loading or error...</div>;
    }

    const getTextStyle = () => {
        if (i18n.language === 'en') {
            return { fontSize: '28px' };
        } else {
            return { whiteSpace: 'nowrap' };
        }
    };

    const logos = [tiannengLogo, TigerBrokers, MBALogo, xianggangLogo];

    return (
        <div className="partner">
            <div className="title" style={{ marginTop: '30px' }}>{t('partnerTitle')}</div>
            <div className="partner-grid">
                {partners.map((partner, index) => (
                    <div className="partner-card" key={index}>
                        <div className="img">
                            <img src={logos[index % 4]} alt={`${partner.name} Logo`} />
                        </div>
                        <h2 style={getTextStyle()}>{partner.name}</h2>
                        <p style={i18n.language === 'en' ? { fontSize: '16px' } : {}}>{partner.description}</p>
                        <a href={partner.link} target="_blank" rel="noopener noreferrer">
                            <div className="bottom-arrow">→<br/>-</div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PartnerScreen;
