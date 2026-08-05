import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/TradingCompetition.scss';
import fundConnectLogo from '../img/fundconnecthk-logo.png';

const SIGNUP_URL = 'https://fundconnecthk.com/quant-league/sign-up';
const ORGANIZER_URL = 'https://fundconnecthk.com/quant-league/';

function TradingCompetition() {
  const { t, i18n } = useTranslation();

  const list = (key) => {
    const v = t(key, { returnObjects: true });
    return Array.isArray(v) ? v : [];
  };

  const timelineData = [
    {
      label: t('timeline.signup_stage'),
      date: t('timeline.signup_date'),
      contents: [
        { title: t('timeline.eligibility_title'), description: t('timeline.eligibility_description') },
        { title: t('timeline.registration_method_title'), description: t('timeline.registration_method_description') }
      ]
    },
    {
      label: t('timeline.qualification_review_stage'),
      date: t('timeline.review_date'),
      contents: [
        { title: t('timeline.sim_account_title'), description: t('timeline.sim_account_description') },
        { title: t('timeline.team_strategy_review_title'), description: t('timeline.team_strategy_review_description') }
      ]
    },
    {
      label: t('timeline.pre_competition_stage'),
      date: t('timeline.pre_competition_date'),
      contents: [
        { title: t('timeline.pre_competition_item_title'), description: t('timeline.pre_competition_item_description') }
      ]
    },
    {
      label: t('timeline.main_competition_stage'),
      date: t('timeline.main_competition_date'),
      contents: [
        { title: t('timeline.pre_competition_item_title'), description: t('timeline.main_competition_item_description') }
      ]
    },
    {
      label: t('timeline.judging_defense_stage'),
      date: t('timeline.judging_defense_date'),
      contents: [
        { title: t('timeline.results_summary_title'), description: t('timeline.results_summary_description') },
        { title: t('timeline.strategy_defense_meeting_title'), description: t('timeline.strategy_defense_meeting_description') },
        { title: t('timeline.judging_title'), description: t('timeline.judging_description') },
        { title: t('timeline.awards_ceremony_title'), description: t('timeline.awards_ceremony_description') }
      ]
    }
  ];

  const divisionRows = [
    { label: t('divisions.label_audience'), paper: t('divisions.paper.audience'), live: t('divisions.live.audience') },
    { label: t('divisions.label_environment'), paper: t('divisions.paper.environment'), live: t('divisions.live.environment') },
    { label: t('divisions.label_capital'), paper: t('divisions.paper.capital'), live: t('divisions.live.capital') },
    { label: t('divisions.label_risk'), paper: t('divisions.paper.risk'), live: t('divisions.live.risk') },
    { label: t('divisions.label_pool'), paper: t('divisions.paper.pool'), live: t('divisions.live.pool') }
  ];

  const formatRows = [
    { label: t('ui.label_location'), value: t('competition.format_location') },
    { label: t('ui.label_participants'), value: t('competition.format_participants') },
    { label: t('ui.label_team'), value: t('competition.format_team') },
    { label: t('ui.label_strategy'), value: t('competition.format_strategy') },
    { label: t('ui.label_platform'), value: 'Interactive Brokers (IBKR)' },
    { label: t('ui.label_settlement'), value: t('ui.settlement_value') }
  ];

  return (
    <div className='background-container'>
      <div className='trading-competition-page'>
        <div className="background-container"></div>

        <div className={`heading title ${i18n.language === 'en' ? 'title-en' : ''}`}>
          {t('competition.title')}
        </div>
        <div className="competition-subtitle">{t('competition.subtitle')}</div>

        <div className='competition-content-wrapper'>
          <span className="competition-content">
            {t('competition.intro_part1')}
            <span className="accent-text">{t('competition.intro_scoring')}</span>
            {t('competition.intro_part2')}
            <span className="accent-text">{t('competition.intro_prize')}</span>
            {t('competition.intro_part3')}
          </span>
          <span className="competition-content">{t('competition.intro_detail1')}</span>
          <span className="competition-content">{t('competition.intro_detail2')}</span>
        </div>

        <a className="button" href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
          {t('ui.signup_open')}
          <div className="triangle"></div>
        </a>

        <div className="organizer-strip">
          <span className="organizer-label">{t('competition.organizer_label')}</span>
          <a
            className="organizer-logo-link"
            href={ORGANIZER_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="organizer-logo"
              src={fundConnectLogo}
              alt="FundConnectHK"
            />
            <span className="organizer-name">FundConnectHK</span>
          </a>
        </div>

        <div className="signup-note">{t('ui.external_signup_note')}</div>
        <div className="signup-note deadline-note">{t('competition.registration_note')}</div>

        {/* 亮点 */}
        <div className="section-block">
          <div className="heading section-heading">{t('highlights.title')}</div>
          <div className="section-subtitle">{t('highlights.subtitle')}</div>
          <div className="highlight-grid">
            {list('highlights.items').map((item, i) => (
              <div className="highlight-card" key={i}>
                <div className="highlight-index">{String(i + 1).padStart(2, '0')}</div>
                <div className="highlight-title">{item.title}</div>
                <div className="highlight-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 赛事详情 */}
        <div className="section-block">
          <div className="heading section-heading">{t('ui.details_heading')}</div>
          <div className="detail-table">
            {formatRows.map((row, i) => (
              <div className="detail-row" key={i}>
                <div className="detail-label">{row.label}</div>
                <div className="detail-value">{row.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 比赛组别 */}
        <div className="section-block">
          <div className="heading section-heading">{t('divisions.title')}</div>
          <div className="section-subtitle">{t('divisions.subtitle')}</div>
          <div className="division-table">
            <div className="division-row division-head">
              <div className="division-cell label-cell">{t('divisions.label_division')}</div>
              <div className="division-cell">{t('divisions.paper.name')}</div>
              <div className="division-cell">{t('divisions.live.name')}</div>
            </div>
            {divisionRows.map((row, i) => (
              <div className="division-row" key={i}>
                <div className="division-cell label-cell">{row.label}</div>
                <div className="division-cell">{row.paper}</div>
                <div className="division-cell">{row.live}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 评审机制 */}
        <div className="section-block">
          <div className="heading section-heading">{t('scoring.title')}</div>
          <div className="section-subtitle">{t('scoring.subtitle')}</div>
          <div className="scoring-grid">
            {list('scoring.items').map((item, i) => (
              <div className="scoring-card" key={i}>
                <div className="scoring-name">{item.name}</div>
                <div className="scoring-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 奖励与后续合作 */}
        <div className="section-block">
          <div className="heading section-heading">{t('rewards.title')}</div>
          <div className="section-subtitle">{t('rewards.subtitle')}</div>

          <div className="rewards-aum-title">{t('rewards.aum_title')}</div>
          <div className="reward-table">
            <div className="reward-row reward-head">
              <div className="reward-cell rank-cell">{t('rewards.label_rank')}</div>
              <div className="reward-cell aum-cell">{t('rewards.label_aum')}</div>
              <div className="reward-cell perks-cell">{t('rewards.label_perks')}</div>
            </div>
            {list('rewards.items').map((item, i) => (
              <div className="reward-row" key={i}>
                <div className="reward-cell rank-cell">{item.rank}</div>
                <div className="reward-cell aum-cell">{item.prize}</div>
                <div className="reward-cell perks-cell">{item.perks}</div>
              </div>
            ))}
          </div>
          <div className="reward-footer">
            <span className="reward-pool">{t('rewards.pool_total')}</span>
            <span className="reward-disclaimer">{t('rewards.cash_note')}</span>
          </div>

          <div className="reward-extra-grid">
            <div className="reward-extra-card">
              <div className="reward-extra-title">{t('rewards.special_title')}</div>
              <div className="reward-extra-desc">{t('rewards.special_desc')}</div>
            </div>
            <div className="reward-extra-card">
              <div className="reward-extra-title">{t('rewards.cooperation_title')}</div>
              <div className="reward-extra-desc">{t('rewards.cooperation_desc')}</div>
            </div>
            <div className="reward-extra-card">
              <div className="reward-extra-title">{t('rewards.noncash_title')}</div>
              <div className="reward-extra-desc">{t('rewards.noncash_desc')}</div>
            </div>
          </div>
        </div>

        {/* 报名流程 */}
        <div className="section-block">
          <div className="heading section-heading">{t('process.title')}</div>
          <div className="section-subtitle">{t('process.subtitle')}</div>
          <div className="process-grid">
            {list('process.items').map((item, i) => (
              <div className="process-card" key={i}>
                <div className="process-step">{i + 1}</div>
                <div className="process-title">{item.title}</div>
                <div className="process-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 赛程时间轴 */}
        <div className="timeline-section">
          <div className="heading timeline-heading">{t('ui.timeline_heading')}</div>
          {timelineData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-line-wrapper">
                <div className="timeline-circle"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-content-wrapper">
                <div className={`timeline-label ${i18n.language === 'en' ? 'label-en' : ''}`}>
                  {item.label}
                </div>
                <div className={`timeline-label date ${i18n.language === 'en' ? 'date-en' : ''}`}>
                  {item.date}
                </div>
                <div className="timeline-content">
                  {item.contents.map((content, idx) => (
                    <div className="content-flex" key={idx}>
                      <div className={`sub-content-timeline ${idx === 0 ? 'first' : ''}`}>
                        {idx !== 0 && <div className={`content-dashed-line ${idx === 0 ? '' : 'continuation-line-space'}`}></div>}
                        <div className="content-circle"></div>
                        {idx !== item.contents.length - 1 && <div className="content-dashed-line"></div>}
                      </div>
                      <div className='sub-content'>
                        {idx !== 0 && <div className="continuation-content-space"></div>}
                        <div className="content-title">{content.title}</div>
                        <div className="content-description">{content.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="timeline-item">
            <div className="timeline-line-wrapper">
              <div className="timeline-circle"></div>
            </div>
            <div className="timeline-content-wrapper">
              <div className="timeline-content">
                <div className="content-flex">
                  <div className='sub-content'>
                    <div className="content-title"></div>
                    <div className="content-description"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 技术与数据支持 */}
        <div className="section-block partners-block">
          <div className="partners-label">{t('competition.partners_label')}</div>
          <div className="partners-row">
            {list('competition.partners_list').map((name, i) => (
              <span className="partner-badge" key={i}>{name}</span>
            ))}
          </div>
        </div>

        <div className='contact-information'>
          <div className="contact-email">{t('ui.contact_email')}</div>
          <div className="email-address">secretary@ustquant.hk</div>
        </div>
      </div>
    </div>
  );
}

export default TradingCompetition;
