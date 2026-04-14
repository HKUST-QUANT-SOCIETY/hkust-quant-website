import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/aboutUs.scss';

// Avatars — President
import avatar1 from '../img/avatar/luoguangda.webp';

// 2025–2026 Vice President team
import vpZhangShuyi from '../img/avatar/zhangshuyi.jpg';
import vpZengJiajin from '../img/avatar/zengjiajin.jpg';
import vpLuXiaofeng from '../img/avatar/luxiaofeng.jpg';
import vpSunHaiwei from '../img/avatar/sunhaiwei.jpg';
import vpWuJinrong from '../img/avatar/wujinrong.jpg';
import vpLuYinshijie from '../img/avatar/luyinshijie.jpg';
import vpHuangRenyi from '../img/avatar/huangrenyi.jpg';
import vpSunYiran from '../img/avatar/sunyiran.png';
import vpGeChenxu from '../img/avatar/gechenxu.jpg';
import vpWuHaohai from '../img/avatar/wuhaohai.jpg';
import vpLiYangxin from '../img/avatar/liyangxin.jpg';
import vpChenYuanheng from '../img/avatar/chenyuanheng.jpg';
import vpQiuKedeng from '../img/avatar/qiukedeng.jpg';

// Executive team
import avatar3 from '../img/avatar/zhangyawei.webp';
import avatar4 from '../img/avatar/xiongjiarui.webp';
import avatar5 from '../img/avatar/linheyi.webp';
import avatar6 from '../img/avatar/lisiyuan.webp';
import avatar7 from '../img/avatar/luimanhin.webp';
import avatar8 from '../img/avatar/yuruoyan.webp';
import avatar9 from '../img/avatar/likachun.webp';
import avatar10 from '../img/avatar/gongyanbin.webp';
import avatar11 from '../img/avatar/daiaijing.jpg';
import avatar12 from '../img/avatar/yangzhankai.jpg';
import avatar13 from '../img/avatar/huanghailan.jpg';
import avatar14 from '../img/avatar/guanjirui.jpg';
import avatar15 from '../img/avatar/jinzexu.webp';
import avatar16 from '../img/avatar/hongzizhao.jpg';

const vpBio = {
  introduce1: 'Master of Financial Mathematics,',
  introduce2: 'Hong Kong University of Science and Technology',
};

/** 非 MAFM 的副主席：展示时排在最后（含姓名别写） */
const VP_NON_MAFM_ZH = new Set(['曾嘉晋', '黄仁奕', '曾嘉航', '黄仁毅']);

const vpBioNonMafm = {
  introduce1: 'Hong Kong University of Science and Technology,',
  introduce2: '',
};

/** 副主席邮箱与名单一一对应 */
const managementData = [
  {
    id: 1,
    name: { zh: '罗广大', en: 'LUO Guangda', tc: '羅廣大' },
    job: 'President',
    introduce1: 'Master of Financial Mathematics,',
    introduce2: 'Hong Kong University of Science and Technology',
    avatarSrc: avatar1,
    email: null,
  },
  {
    id: 2,
    name: { zh: '张舒翼', en: 'Zhang Shuyi', tc: '張舒翼' },
    job: 'Vice President',
    ...vpBio,
    avatarSrc: vpZhangShuyi,
    email: '20011013zsy@gmail.com',
  },
  {
    id: 3,
    name: { zh: '曾嘉晋', en: 'Zeng Jiajin', tc: '曾嘉晉' },
    job: 'Vice President',
    ...vpBioNonMafm,
    avatarSrc: vpZengJiajin,
    email: 'kctsangaj@connect.ust.hk',
  },
  {
    id: 4,
    name: { zh: '陆骁枫', en: 'Lu Xiaofeng', tc: '陸驍楓' },
    job: 'Vice President',
    ...vpBio,
    avatarSrc: vpLuXiaofeng,
    email: 'xlubs@connect.ust.hk',
  },
  {
    id: 5,
    name: { zh: '孙海崴', en: 'Sun Haiwei', tc: '孫海崴' },
    job: 'Vice President',
    ...vpBio,
    avatarSrc: vpSunHaiwei,
    email: '2946703196@qq.com',
  },
  {
    id: 6,
    name: { zh: '武晋荣', en: 'Wu Jinrong', tc: '武晉榮' },
    job: 'Vice President',
    ...vpBio,
    avatarSrc: vpWuJinrong,
    email: 'wufd@connect.ust.hk',
  },
  {
    id: 7,
    name: { zh: '陆殷世杰', en: 'Lu Yinshijie', tc: '陸殷世傑' },
    job: 'Vice President',
    ...vpBio,
    avatarSrc: vpLuYinshijie,
    email: 'yluel@connect.ust.hk',
  },
  {
    id: 8,
    name: { zh: '黄仁奕', en: 'Huang Renyi', tc: '黃仁奕' },
    job: 'Vice President',
    ...vpBioNonMafm,
    avatarSrc: vpHuangRenyi,
    email: 'rhuangbr@connect.ust.hk',
  },
  {
    id: 9,
    name: { zh: '孙翌然', en: 'Sun Yiran', tc: '孫翌然' },
    job: 'Vice President',
    ...vpBio,
    avatarSrc: vpSunYiran,
    email: 'sunc97956@outlook.com',
  },
  {
    id: 10,
    name: { zh: '葛晨旭', en: 'Ge Chenxu', tc: '葛晨旭' },
    job: 'Vice President',
    ...vpBio,
    avatarSrc: vpGeChenxu,
    email: 'cgeac@connect.ust.hk',
  },
  {
    id: 11,
    name: { zh: '吴浩海', en: 'Wu Haohai', tc: '吳浩海' },
    job: 'Vice President',
    ...vpBio,
    avatarSrc: vpWuHaohai,
    email: 'hwudf@connect.ust.hk',
  },
  {
    id: 12,
    name: { zh: '李洋鑫', en: 'Li Yangxin', tc: '李洋鑫' },
    job: 'Vice President',
    ...vpBio,
    avatarSrc: vpLiYangxin,
    email: 'liyangxin25@126.com',
  },
  {
    id: 13,
    name: { zh: '陈远恒', en: 'Chen Yuanheng', tc: '陳遠恆' },
    job: 'Vice President',
    ...vpBio,
    avatarSrc: vpChenYuanheng,
    email: 'ychenql@connect.ust.hk',
  },
  {
    id: 14,
    name: { zh: '邱科登', en: 'Qiu Kedeng', tc: '邱科登' },
    job: 'Vice President',
    ...vpBio,
    avatarSrc: vpQiuKedeng,
    email: 'kd.qiu@connect.ust.hk',
  },
];

const generalMembersData = [
  { id: 101, name: { zh: '张亚维', en: 'Zhang Yawei', tc: '張亞維' }, job: 'General Secretary', introduce1: 'Master of Public Management,', introduce2: 'HKUST', avatarSrc: avatar3 },
  { id: 102, name: { zh: '熊佳蕊', en: 'Xiong Jiarui', tc: '熊佳蕊' }, job: 'General Secretary', introduce1: 'Master of Financial Mathematics,', introduce2: 'HKUST', avatarSrc: avatar4 },
  { id: 103, name: { zh: '林河屹', en: 'Lin Heyi', tc: '林河屹' }, job: 'General Secretary', introduce1: 'Master of Financial Mathematics,', introduce2: 'HKUST', avatarSrc: avatar5 },
  { id: 104, name: { zh: '李思远', en: 'Li Siyuan', tc: '李思遠' }, job: 'General Secretary', introduce1: 'MPhil in Fintech,', introduce2: 'HKUST (GZ)', avatarSrc: avatar6 },
  { id: 105, name: { zh: '吕文轩', en: 'Lui Man Hin', tc: '呂文軒' }, job: 'General Secretary', introduce1: 'Bachelor in Quantitative Finance,', introduce2: 'HKUST', avatarSrc: avatar7 },
  { id: 106, name: { zh: '虞若妍', en: 'Yu Ruoyan', tc: '虞若妍' }, job: 'General Secretary', introduce1: 'Bachelor of Accounting and Finance,', introduce2: 'PolyU', avatarSrc: avatar8 },
  { id: 107, name: { zh: '戴爱静', en: 'Dai Aijing', tc: '戴愛靜' }, job: 'General Secretary', introduce1: 'Bachelor in Electronic Engineering,', introduce2: 'HKUST', avatarSrc: avatar11 },
  { id: 108, name: { zh: '杨战铠', en: 'Yang Zhankai', tc: '楊戰鎧' }, job: 'General Secretary', introduce1: 'Bachelor of Math & Econ,', introduce2: 'HKUST', avatarSrc: avatar12 },
  { id: 109, name: { zh: '黄海岚', en: 'Huang Hailan', tc: '黃海嵐' }, job: 'General Secretary', introduce1: 'BSc in Math & AI,', introduce2: 'HKUST', avatarSrc: avatar13 },
  { id: 110, name: { zh: '关吉睿', en: 'Guan Jirui', tc: '關吉睿' }, job: 'General Secretary', introduce1: 'Bachelor of Ops Mgmt & Acct,', introduce2: 'HKUST', avatarSrc: avatar14 },
  { id: 111, name: { zh: '金泽旭', en: 'Jin Zexu', tc: '金澤旭' }, job: 'General Secretary', introduce1: 'BSc in Mathematics,', introduce2: 'HKUST', avatarSrc: avatar15 },
  { id: 112, name: { zh: '洪子钊', en: 'Hong Zizhao', tc: '洪子釗' }, job: 'General Secretary', introduce1: 'BSc in Math & AI,', introduce2: 'HKUST', avatarSrc: avatar16 },
  { id: 113, name: { zh: '李嘉俊', en: 'Li Ka Chun', tc: '李嘉俊' }, job: 'General Secretary', introduce1: 'Master of Financial Mathematics,', introduce2: 'HKUST', avatarSrc: avatar9 },
  { id: 114, name: { zh: '龚彦宾', en: 'Gong Yanbin', tc: '龔彥賓' }, job: 'General Secretary', introduce1: 'PhD in Computer Science,', introduce2: 'HKUST', avatarSrc: avatar10 },
];

const previousMemberData = [
  {
    id: 1,
    stage: { zh: '2025届成员', en: '2025 Members', tc: '2025屆成員' },
    introduce: {
      zh: '罗广大（主席），王佳恒（副主席），李思远（常务秘书）',
      en: 'LUO Guangda (President), WANG Jiaheng (Vice President), LI Siyuan (General Secretary)',
      tc: '羅廣大（主席），王佳恆（副主席），李思遠（常務秘書）',
    },
  },
  {
    id: 2,
    stage: { zh: '2024届成员', en: '2024 Members', tc: '2024屆成員' },
    introduce: {
      zh: '罗广大（主席），王佳恒（副主席），李思远（常务秘书）',
      en: 'LUO Guangda (President), WANG Jiaheng (Vice President), LI Siyuan (General Secretary)',
      tc: '羅廣大（主席），王佳恒（副主席），李思遠（常務秘書）',
    },
  },
  {
    id: 3,
    stage: { zh: '2023届成员', en: '2023 Members', tc: '2023屆成員' },
    introduce: {
      zh: '罗广大（主席），王佳恒（副主席）',
      en: 'LUO Guangda (President), WANG Jiaheng (Vice President)',
      tc: '羅廣大（主席），王佳恆（副主席）',
    },
  },
];

function AboutUsScreen() {
  const { t, i18n } = useTranslation();
  /** 1 = 主席团（主席+副主席），2 = 执行团队 + 往届 */
  const [teamPage, setTeamPage] = useState(1);

  const president = managementData[0];
  const vicePresidentsSorted = useMemo(() => {
    const vps = managementData.filter((m) => m.job === 'Vice President');
    const isNonMafmLast = (m) => VP_NON_MAFM_ZH.has(m.name.zh);
    return vps.sort((a, b) => {
      const aLast = isNonMafmLast(a);
      const bLast = isNonMafmLast(b);
      if (aLast !== bLast) return aLast ? 1 : -1;
      return a.name.en.localeCompare(b.name.en, 'en', { sensitivity: 'base' });
    });
  }, []);

  const getTrans = (obj) => {
      if (!obj) return "";
      switch (i18n.language) {
        case 'en': return obj.en;
        case 'tc': return obj.tc;
        default: return obj.zh;
      }
  };

  const renderLeaderCard = (leader) => (
    <div key={leader.id} className="leader-card">
      <div className="leader-photo">
        <img src={leader.avatarSrc} alt={leader.name.en} />
      </div>
      <div className="leader-info">
        <div className="leader-role">{leader.job}</div>
        <div className="leader-name">{getTrans(leader.name)}</div>
        <div className="leader-bio">
          {leader.introduce1}
          {leader.introduce2 ? (
            <>
              <br />
              {leader.introduce2}
            </>
          ) : null}
          {leader.email && (
            <>
              <br />
              <a className="leader-email" href={`mailto:${leader.email}`}>
                {leader.email}
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );

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
        <div className="team-page-toolbar" role="tablist" aria-label={getTrans({ zh: '团队分页', en: 'Team pages', tc: '團隊分頁' })}>
          <button
            type="button"
            role="tab"
            aria-selected={teamPage === 1}
            className={`team-page-tab ${teamPage === 1 ? 'active' : ''}`}
            onClick={() => setTeamPage(1)}
          >
            {getTrans({ zh: '主席团', en: 'Leadership', tc: '主席團' })}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={teamPage === 2}
            className={`team-page-tab ${teamPage === 2 ? 'active' : ''}`}
            onClick={() => setTeamPage(2)}
          >
            {getTrans({ zh: '执行与往届', en: 'Executive & Past', tc: '執行與往屆' })}
          </button>
          <span className="team-page-indicator" aria-hidden="true">
            {teamPage} / 2
          </span>
        </div>

        {teamPage === 1 && (
          <>
        <div className="section-label">
            {getTrans({zh: '管理团队', en: 'Management Board', tc: '管理團隊'})}
        </div>
        <div className="leadership-section">
            {[president, ...vicePresidentsSorted].map((leader) => renderLeaderCard(leader))}
        </div>
          </>
        )}

        {teamPage === 2 && (
        <>
        <div className="section-label">
            {getTrans({zh: '执行团队', en: 'Executive Team', tc: '執行團隊'})}
        </div>
        <div className="team-section team-section--page2">
            <div className="team-grid team-grid--page2">
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

        <div className="section-label">
             {getTrans({zh: '往届成员', en: 'Previous Members', tc: '往屆成員'})}
        </div>
        <div className="past-members-container past-members-page">
            <div className="past-list">
                {previousMemberData.map((item) => (
                    <div key={item.id} className="past-item">
                        <div className="year">{getTrans(item.stage)}</div>
                        <div className="names">{getTrans(item.introduce)}</div>
                    </div>
                ))}
            </div>
        </div>
        </>
        )}

        <div className="team-page-footer">
          <button
            type="button"
            className="team-page-nav"
            disabled={teamPage === 1}
            onClick={() => setTeamPage(1)}
          >
            {getTrans({ zh: '上一页', en: 'Previous', tc: '上一頁' })}
          </button>
          <button
            type="button"
            className="team-page-nav"
            disabled={teamPage === 2}
            onClick={() => setTeamPage(2)}
          >
            {getTrans({ zh: '下一页', en: 'Next', tc: '下一頁' })}
          </button>
        </div>

      </div>
    </div>
  );
}

export default AboutUsScreen;
