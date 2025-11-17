import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { contentMap } from "../../assets/mockcontent";


type Topic = { id: number; title: string; content?: string };

export default function TopicsPage() {
  const { languageSlug } = useParams<{ languageSlug: string }>();

  // получаем ебучий контент
  const content = contentMap[languageSlug as string];

  const topics: Topic[] = content?.topics ?? [];

  const [activeId, setActiveId] = useState<number | null>(
    topics.length ? topics[0].id : null
  );

  React.useEffect(() => {
    setActiveId(topics.length ? topics[0].id : null);
  }, [languageSlug, topics.length]);

  const activeTopic = topics.find((t) => t.id === activeId) || null;

  return (
    <div className="app-wrap">
      <div className="card">
        <div className="card-header">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h3 className="header-title">Изучалка 3000</h3>
              <div className="header-sub">Курс — {languageSlug}</div>
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
                  <p>{content.description}</p>
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
