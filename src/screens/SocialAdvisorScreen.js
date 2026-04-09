import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/SocialAdvisor.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Rectangle23 from '../img/Rectangle23.webp';
import Rectangle25 from '../img/Rectangle25.webp';
import Rectangle26 from '../img/Rectangle26.webp';
import Rectangle95 from '../img/Rectangle95.webp';

import { useMediaQuery } from 'react-responsive';
import breakpoints from '../config/breakpoints';

function SocialAdvisorScreen() {
  const { t } = useTranslation();
  const members = t('members', { returnObjects: true });
  const isMobile = useMediaQuery({ query: breakpoints.mobile });

  if (!Array.isArray(members)) {
    console.error('Members is not an array:', members);
    return <div>Error: Members data is not an array.</div>;
  }

  // Image array mapping to index
  const advisorImages = [Rectangle25, Rectangle95, Rectangle23, Rectangle26];

  return (
    <div className="SocialAdvisor">
      <div className="advisor-container">
        <div className="title">{t('socialAdvisorTitle')}</div>
        
        <div className="advisor-list">
          {members.map((member, index) => {
            const name = isMobile ? member.name_mobile : member.name_desktop;
            const isEven = index % 2 !== 0; // 0 is odd (layout-normal), 1 is even (layout-reverse) logic
            
            return (
                <div 
                    key={index} 
                    className={`advisor-block ${isEven ? 'layout-reverse' : 'layout-normal'}`}
                >
                    {/* Decorative Background Index */}
                    <div className="advisor-index">
                        {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Image Section */}
                    <div className="advisor-image-wrapper">
                        <div className="img-inner">
                            <img 
                                src={advisorImages[index] || Rectangle25} 
                                alt={`Advisor ${index + 1}`} 
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="advisor-content-wrapper">
                        <h3 className="name">
                            {/* Split name for multilingual/formatting support if needed */}
                            {name ? name.split('\n').map((line, idx) => (
                                <span key={idx} className={idx > 0 ? "small-text" : ""}>
                                {line}
                                {idx < name.split('\n').length - 1 && <br />}
                                </span>
                            )) : null}
                        </h3>
                        <div className="job">{member.job}</div>
                        <div className="bio">
                            {member.introduce}
                        </div>
                    </div>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SocialAdvisorScreen;
