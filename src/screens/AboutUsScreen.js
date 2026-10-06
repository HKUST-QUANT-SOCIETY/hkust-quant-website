import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/aboutUs.scss';

import avatar1 from '../img/avatar/luoguangda.webp';
import vpZengJiajin from '../img/avatar/zengjiajin.jpg';
import vpLuXiaofeng from '../img/avatar/luxiaofeng.jpg';
import vpSunHaiwei from '../img/avatar/sunhaiwei.jpg';
import vpLuYinshijie from '../img/avatar/luyinshijie.jpg';
import vpWuHaohai from '../img/avatar/wuhaohai.jpg';
import vpLiJiaxuan from '../img/avatar/lijiaxuan.jpg';

const vpBio = {
  introduce1: 'Master of Financial Mathematics,',
  introduce2: 'Hong Kong University of Science and Technology',
};

const vpBioNonMafm = {
  introduce1: 'Hong Kong University of Science and Technology,',
  introduce2: '',
};

/** 主席团：对齐企微通讯录部门分类表（8 人） */
const managementData = [
  {
    id: 1,
    name: { zh: '罗广大', en: 'LUO Guangda (James Law)', tc: '羅廣大' },
    job: 'Founding President & Current President',
    introduce1: 'Master of Financial Mathematics,',
    introduce2: 'Hong Kong University of Science and Technology · 高管组',
    avatarSrc: avatar1,
    email: 'james.law@ustquant.hk',
  },
  {
    id: 19,
    name: { zh: '罗小大', en: 'Luo Xiaoda (Hendrix)', tc: '羅小大' },
    job: 'Vice President',
    introduce1: '高管组 · 主席团 · AI Agent 组',
    introduce2: '',
    avatarSrc: null,
    placeholder: '罗',
    email: 'hendrix@ustquant.hk',
  },
  {
    id: 5,
    name: { zh: '孙海崴', en: 'Sun Haiwei (Jiasol)', tc: '孫海崴' },
    job: 'Vice President',
    ...vpBio,
    introduce2: 'Hong Kong University of Science and Technology · 高管组 · 股票组',
    avatarSrc: vpSunHaiwei,
    email: 'haiwei.sun@ustquant.hk',
  },
  {
    id: 7,
    name: { zh: '陆殷世杰', en: 'Lu Yinshijie (Jason)', tc: '陸殷世傑' },
    job: 'Vice President',
    ...vpBio,
    introduce2: 'Hong Kong University of Science and Technology · 高管组 · 股票组',
    avatarSrc: vpLuYinshijie,
    email: 'yinshijie.lu@ustquant.hk',
  },
  {
    id: 11,
    name: { zh: '吴浩海', en: 'Wu Haohai (Nick)', tc: '吳浩海' },
    job: 'Vice President',
    ...vpBio,
    introduce2: 'Hong Kong University of Science and Technology · 高管组',
    avatarSrc: vpWuHaohai,
    email: 'haohai.wu@ustquant.hk',
  },
  {
    id: 18,
    name: { zh: '李佳璇', en: 'Li Jiaxuan (Elzie)', tc: '李佳璇' },
    job: 'Vice President',
    ...vpBio,
    introduce2: 'Hong Kong University of Science and Technology · 高管组 · 衍生品组',
    avatarSrc: vpLiJiaxuan,
    email: 'lijiaxuan@ustquant.hk',
  },
  {
    id: 4,
    name: { zh: '陆骁枫', en: 'Lu Xiaofeng (Jacob)', tc: '陸驍楓' },
    job: 'Vice President',
    ...vpBio,
    introduce2: 'Hong Kong University of Science and Technology · 股票组 / 模型组',
    avatarSrc: vpLuXiaofeng,
    email: 'xiaofeng.lu@ustquant.hk',
  },
  {
    id: 3,
    name: { zh: '曾嘉晉', en: 'Zeng Jiajin (Paco)', tc: '曾嘉晉' },
    job: 'Vice President',
    ...vpBioNonMafm,
    introduce1: '主席团 · 股票组 / 因子组',
    introduce2: '',
    avatarSrc: vpZengJiajin,
    email: 'paco.tsang@ustquant.hk',
  },
];

/** 部门名单：对齐「部门路径分类」表；同一人多部门按原表保留 */
const departmentRoster = [
  { path: '高管组', members: '李佳璇、陆殷世杰(Jason)、罗广大、罗小大、孙海崴、吴浩海' },
  { path: '主席团', members: '曾嘉晉(Paco)、李佳璇、陆骁枫、陆殷世杰(Jason)、罗广大、罗小大、孙海崴、吴浩海' },
  { path: 'AI Agent 组', members: '陈书涵、冯良机、李楷芳、刘炽（Jerry)、罗小大、杨欣琳、尹一帆、Wei Yuetong, Elaine' },
  { path: '股票组', members: '陈镇鸿、陆殷世杰(Jason)、孙海崴' },
  { path: '股票组 / 风控组', members: '李翡泠、李凌宇、李卓、王孔悦、王诗雨、王羿璇、张佳音、Cissi Lim' },
  { path: '股票组 / 模型组', members: '陈筱筠、梁马浴阳、刘玉菡、陆骁枫' },
  { path: '股票组 / 数据组', members: '何昱樟' },
  { path: '股票组 / 因子组', members: '曾嘉晉(Paco)、冯舒涵、李卓、秦凯麟、向禹睿、杨一思、叶易涵（Chris）、张博睿、张佳音' },
  { path: '基本面组', members: '龚子陆、蒋镇远、孔悦嘉、林宛烨Lynn、罗永炜、马丝雨、万雨恬Sabrina、王若岚、徐猷宸、赵晨竣（Kane）' },
  { path: '秘书处', members: '龚子陆、顾悠然、徐猷宸' },
  { path: '秘书处 / 财务部', members: '王子涵、杨欣琳' },
  { path: '秘书处 / 常务部', members: '董欣月（Yuki）、何昱樟、张佳音' },
  { path: '秘书处 / 内务部', members: '刘炽（Jerry)、戚秋原、王康诺、张博睿' },
  { path: '秘书处 / 外务部', members: '金丞熙TJ、李卓、潘奕憬、唐郑立、祝鑫炎' },
  { path: '秘书处 / 宣传部', members: '孔悦嘉、向禹睿、周妍君' },
  { path: '衍生品组', members: '李佳璇' },
  { path: '衍生品组 / 高频组', members: '陈书涵、李锦辉、李钟常非、Ma Zifeng (Felix Ma)' },
  { path: '衍生品组 / 期权组', members: '何昱樟、潘奕憬、戚秋原、谢欣璇、应越' },
  { path: '衍生品组 / CTA组', members: '何昱樟、金丞熙TJ、潘奕憬、叶锦轩、张佳音、张乾雨荷、章惟博（Jaff）' },
];

const previousMemberData = [
  {
    id: 1,
    stage: { zh: '本届通讯录未收录（原网站公示）', en: 'Former public roster (not in current directory)', tc: '本屆通訊錄未收錄（原網站公示）' },
    introduce: {
      zh: '原主席团卡片已下架：张舒翼、陈远恒、武晋荣、黄仁奕、孙翌然、葛晨旭、邱科登、李洋鑫、肖修权。原执行团队卡片已下架：张亚维、熊佳蕊、林河屹、李思远、吕文轩、虞若妍、戴爱静、杨战铠、黄海岚、关吉睿、金泽旭、洪子钊、李嘉俊、龚彦宾。李卓、戚秋原改列入本届部门名单。',
      en: 'Former leadership/executive names no longer listed as current board: Zhang Shuyi, Chen Yuanheng, Wu Jinrong, Huang Renyi, Sun Yiran, Ge Chenxu, Qiu Kedeng, Li Yangxin, Xiao Xiuquan, plus the previous General Secretary grid. Li Zhuo and Qi Qiuyuan remain in current department rosters.',
      tc: '張舒翼、陳遠恆、武晉榮、黃仁奕、孫翌然、葛晨旭、邱科登、李洋鑫、肖修權，以及原執行團隊公示名單。李卓、戚秋原仍在本屆部門名單中。',
    },
  },
  {
    id: 2,
    stage: { zh: '2025届成员', en: '2025 Members', tc: '2025屆成員' },
    introduce: {
      zh: '罗广大（主席），王佳恒（副主席），李思远（常务秘书）',
      en: 'LUO Guangda (President), WANG Jiaheng (Vice President), LI Siyuan (General Secretary)',
      tc: '羅廣大（主席），王佳恆（副主席），李思遠（常務秘書）',
    },
  },
  {
    id: 3,
    stage: { zh: '2024届成员', en: '2024 Members', tc: '2024屆成員' },
    introduce: {
      zh: '罗广大（主席），王佳恒（副主席），李思远（常务秘书）',
      en: 'LUO Guangda (President), WANG Jiaheng (Vice President), LI Siyuan (General Secretary)',
      tc: '羅廣大（主席），王佳恒（副主席），李思遠（常務秘書）',
    },
  },
  {
    id: 4,
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
  const [teamPage, setTeamPage] = useState(1);

  const president = managementData[0];
  const vicePresidentsAndOfficers = useMemo(() => managementData.slice(1), []);

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
      <div className={`leader-photo${leader.avatarSrc ? '' : ' placeholder'}`}>
        {leader.avatarSrc ? (
          <img src={leader.avatarSrc} alt={leader.name.en} />
        ) : (
          leader.placeholder || leader.name.zh.slice(0, 1)
        )}
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
            {getTrans({ zh: '部门与往届', en: 'Departments & Past', tc: '部門與往屆' })}
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
            {[president, ...vicePresidentsAndOfficers].map((leader) => renderLeaderCard(leader))}
        </div>
          </>
        )}

        {teamPage === 2 && (
        <>
        <div className="section-label">
            {getTrans({zh: '部门成员', en: 'Departments', tc: '部門成員'})}
        </div>
        <div className="team-section team-section--page2">
            <div className="dept-roster">
                {departmentRoster.map((dept) => (
                    <div key={dept.path} className="dept-card">
                        <div className="dept-card-path">{dept.path}</div>
                        <div className="dept-card-members">{dept.members}</div>
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
