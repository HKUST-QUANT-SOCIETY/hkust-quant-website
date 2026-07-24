import React from "react";
import { useTranslation } from "react-i18next";
import "../css/researchDirections.scss";

function ResearchDirectionsScreen() {
  const { t } = useTranslation();
  const researchTopics = t("researchTopics", { returnObjects: true });

  if (!Array.isArray(researchTopics)) {
    console.error("Research topics is not an array:", researchTopics);
    return <div>Error loading research topics data.</div>;
  }

  return (
    <div className="research-directions-page">
      {/* Banner Section */}
      <div className="banner">
        <div className="banner-content">
          <h1 className="h1">{t("researchDirectionsTitle")}</h1>
          <p className="subtitle">
            {t("researchDirectionsSubtitle", "探索量化金融前沿，构建创新研究体系")}
          </p>
        </div>
      </div>

      {/* Research Topics Grid */}
      <div className="research-content">
        <div className="research-grid">
          {researchTopics.map((topic, index) => (
            <div className="research-card" key={topic.id || index}>
              <div className="research-header">
                <div className="research-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="research-title">{topic.title}</h3>
              </div>

              <div className="research-leader">
                <span className="leader-name">{topic.leader}</span>
                <span className="leader-role"> · {topic.role}</span>
              </div>

              <p className="research-description">{topic.description}</p>

              <div className="research-keywords">
                {topic.keywords.map((keyword, idx) => (
                  <span key={idx} className="keyword-tag">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResearchDirectionsScreen;
