import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getTopicsByLanguage } from "../../shared/api/topicsApi";


type Topic = { id: number; title: string; content: string };

export default function TopicsPage() {
  const { languageSlug } = useParams<{ languageSlug: string }>();
  const [topics, setTopics] = useState<Topic[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    if (languageSlug) {
      getTopicsByLanguage(languageSlug).then((data) => {
        setTopics(data);
        setActiveId(data.length ? data[0].id : null);
      });
    }
  }, [languageSlug]);

  const activeTopic = topics.find((t) => t.id === activeId) || null;

  return (
    <div className="app-wrap">
      <div className="card">
        <div className="card-header">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h3 className="header-title">Progalingo</h3>
              <div className="header-sub">Курс — {languageSlug?.toUpperCase()}</div>
            </div>
          </div>
        </div>

        <div className="card-body">
          <aside className="sidebar">
            <h3>Темы курса</h3>

            <ul className="topic-list">
              {topics.map((t) => (
                <li key={t.id}>
                  <button
                    className={`topic-item ${activeId === t.id ? "active" : ""}`}
                    onClick={() => setActiveId(t.id)}
                    aria-current={activeId === t.id}
                  >
                    {t.title}
                  </button>
                </li>
              ))}
            </ul>

            <Link to="/languages" className="back-link">
              ← Назад к языкам
            </Link>
          </aside>

          <main className="content">
            <div className="content-card">
              {activeTopic ? (
                <>
                  <h2>{activeTopic.title}</h2>
                  <p style={{ marginTop: 15, whiteSpace: "pre-line" }}>{activeTopic.content}</p>
                </>
              ) : (
                <p>Тем пока нет.</p>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
