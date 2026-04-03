import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/aboutUs.scss';
import { useMediaQuery } from 'react-responsive';
import breakpoints from '../config/breakpoints';

// Avatars
import avatar1 from '../img/avatar/luoguangda.png';
import avatar2 from '../img/avatar/wangjiaheng.png';
import avatar3 from '../img/avatar/zhangyawei.png';
import avatar4 from '../img/avatar/xiongjiarui.png';
import avatar5 from '../img/avatar/linheyi.png';
import avatar6 from '../img/avatar/lisiyuan.png';
import avatar7 from '../img/avatar/luimanhin.png';
import avatar8 from '../img/avatar/yuruoyan.png';
import avatar9 from '../img/avatar/likachun.png';
import avatar10 from '../img/avatar/gongyanbin.png';
import avatar11 from '../img/avatar/daiaijing.jpg';
import avatar12 from '../img/avatar/yangzhankai.jpg';
import avatar13 from '../img/avatar/huanghailan.jpg';
import avatar14 from '../img/avatar/guanjirui.jpg';
import avatar15 from '../img/avatar/jinzexu.png';
import avatar16 from '../img/avatar/hongzizhao.jpg';

// Data Definitions
const managementData = [
  { 
    id: 1, 
    name: { zh: '罗广大', en: 'LUO Guangda', tc: '羅廣大' }, 
    job: 'President', 
    introduce1: 'Master of Financial Mathematics,', 
    introduce2: 'Hong Kong University of Science and Technology', 
    avatarSrc: avatar1 
  },
  { 
    id: 2,     
    name: { zh: '王佳恒', en: 'Wang Jiaheng', tc: '王佳恆' },
    job: 'Vice President', 
    introduce1: 'Master of Financial Mathematics,', 
    introduce2: 'Hong Kong University of Science and Technology', 
    avatarSrc: avatar2 
  },
];

const generalMembersData = [
  { id: 3, name: { zh: '张亚维', en: 'Zhang Yawei', tc: '張亞維' }, job: 'General Secretary', introduce1: 'Master of Public Management,', introduce2: 'HKUST', avatarSrc: avatar3 },
  { id: 4, name: { zh: '熊佳蕊', en: 'Xiong Jiarui', tc: '熊佳蕊' }, job: 'General Secretary', introduce1: 'Master of Financial Mathematics,', introduce2: 'HKUST', avatarSrc: avatar4 },
  { id: 5, name: { zh: '林河屹', en: 'Lin Heyi', tc: '林河屹' }, job: 'General Secretary', introduce1: 'Master of Financial Mathematics,', introduce2: 'HKUST', avatarSrc: avatar5 },
  { id: 6, name: { zh: '李思远', en: 'Li Siyuan', tc: '李思遠' }, job: 'General Secretary', introduce1: 'MPhil in Fintech,', introduce2: 'HKUST (GZ)', avatarSrc: avatar6 },
  { id: 7, name: { zh: '吕文轩', en: 'Lui Man Hin', tc: '呂文軒' }, job: 'General Secretary', introduce1: 'Bachelor in Quantitative Finance,', introduce2: 'HKUST', avatarSrc: avatar7 },
  { id: 8, name: { zh: '虞若妍', en: 'Yu Ruoyan', tc: '虞若妍' }, job: 'General Secretary', introduce1: 'Bachelor of Accounting and Finance,', introduce2: 'PolyU', avatarSrc: avatar8 },
  { id: 11, name: { zh: '戴爱静', en: 'Dai Aijing', tc: '戴愛靜' }, job: 'General Secretary', introduce1: 'Bachelor in Electronic Engineering,', introduce2: 'HKUST', avatarSrc: avatar11 },
  { id: 12, name: { zh: '杨战铠', en: 'Yang Zhankai', tc: '楊戰鎧' }, job: 'General Secretary', introduce1: 'Bachelor of Math & Econ,', introduce2: 'HKUST', avatarSrc: avatar12 },
  { id: 13, name: { zh: '黄海岚', en: 'Huang Hailan', tc: '黃海嵐' }, job: 'General Secretary', introduce1: 'BSc in Math & AI,', introduce2: 'HKUST', avatarSrc: avatar13 },
  { id: 14, name: { zh: '关吉睿', en: 'Guan Jirui', tc: '關吉睿' }, job: 'General Secretary', introduce1: 'Bachelor of Ops Mgmt & Acct,', introduce2: 'HKUST', avatarSrc: avatar14 },
  { id: 15, name: { zh: '金泽旭', en: 'Jin Zexu', tc: '金澤旭' }, job: 'General Secretary', introduce1: 'BSc in Mathematics,', introduce2: 'HKUST', avatarSrc: avatar15 },
  { id: 16, name: { zh: '洪子钊', en: 'Hong Zizhao', tc: '洪子鑷' }, job: 'General Secretary', introduce1: 'BSc in Math & AI,', introduce2: 'HKUST', avatarSrc: avatar16 },
  { id: 9, name: { zh: '李嘉俊', en: 'Li Ka Chun', tc: '李嘉俊' }, job: 'General Secretary', introduce1: 'Master of Financial Mathematics,', introduce2: 'HKUST', avatarSrc: avatar9 },
  { id: 10, name: { zh: '龚彦宾', en: 'Gong Yanbin', tc: '龔彥賓' }, job: 'General Secretary', introduce1: 'PhD in Computer Science,', introduce2: 'HKUST', avatarSrc: avatar10 },
];

const previousMemberData = [
  {
    id: 1,
    stage: { zh: '2024届成员', en: '2024 Members', tc: '2024屆成員' },
    introduce: {
      zh: '罗广大（主席），王佳恒（副主席），李思远（常务秘书）',
      en: 'LUO Guangda (President), WANG Jiaheng (Vice President), LI Siyuan (General Secretary)',
      tc: '羅廣大（主席），王佳恒（副主席），李思遠（常務秘書）'
    }
  },
  {
    id: 2,
    stage: { zh: '2023届成员', en: '2023 Members', tc: '2023屆成員' },
    introduce: {
      zh: '罗广大（主席），王佳恒（副主席）',
      en: 'LUO Guangda (President), WANG Jiaheng (Vice President)',
      tc: '羅廣大（主席），王佳恒（副主席）'
    }
  }
];

function AboutUsScreen() {
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery({ query: breakpoints.mobile });

  const getTrans = (obj) => {
      if (!obj) return "";
      switch (i18n.language) {
        case 'en': return obj.en;
        case 'tc': return obj.tc;
        default: return obj.zh;
      }
  };

  // Helper to simplify job title translation if needed, currently mostly English in data
  const getJob = (job) => job; 

  return (
    <div className="aboutus-wrap">
      <div className="page-header">
        <div className="header-title">
          {getTrans({zh: '成员与运营团队', en: 'Members & Team', tc: '成員與運營團隊'})}
        </div>
        <div className="header-subtitle">
            {getTrans({
                zh: '我们汇聚了来自不同背景的精英，致力于量化金融的探索与实践',
                en: 'We bring together elites from diverse backgrounds, dedicated to the exploration and practice of quantitative finance.',
                tc: '我們匯聚了來自不同背景的精英，致力於量化金融的探索與實踐'
            })}
        </div>
      </div>

      <div className="content-container">
        
        {/* Leadership Section */}
        <div className="section-label">
            {getTrans({zh: '管理团队', en: 'Management Board', tc: '管理團隊'})}
        </div>
        <div className="leadership-section">
            {managementData.map(leader => (
                <div key={leader.id} className="leader-card">
                    <div className="leader-photo">
                        <img src={leader.avatarSrc} alt={leader.name.en} />
                    </div>
                    <div className="leader-info">
                        <div className="leader-role">{leader.job}</div>
                        <div className="leader-name">{getTrans(leader.name)}</div>
                        <div className="leader-bio">
                            {leader.introduce1}<br/>{leader.introduce2}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* General Team Grid */}
        <div className="section-label">
            {getTrans({zh: '执行团队', en: 'Executive Team', tc: '執行團隊'})}
        </div>
        <div className="team-section">
            <div className="team-grid">
                {generalMembersData.map(member => (
                    <div key={member.id} className="team-member-card">
                        <div className="member-photo-wrapper">
                            <img src={member.avatarSrc} alt={member.name.en} />
                            <div className="member-overlay">
                                <div className="member-details-overlay">
                                    <p>{member.introduce1}</p>
                                    <p>{member.introduce2}</p>
                                </div>
                            </div>
                        </div>
                        <div className="member-info-bottom">
                            <div className="member-name">{getTrans(member.name)}</div>
                            <div className="member-role">{member.job}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Previous Members */}
        <div className="section-label">
             {getTrans({zh: '往届成员', en: 'Previous Members', tc: '往屆成員'})}
        </div>
        <div className="past-members-container">
            <div className="past-list">
                {previousMemberData.map((item) => (
                    <div key={item.id} className="past-item">
                        <div className="year">{getTrans(item.stage)}</div>
                        <div className="names">{getTrans(item.introduce)}</div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}

export default AboutUsScreen;
