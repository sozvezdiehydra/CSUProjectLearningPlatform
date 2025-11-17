import React from "react";
import { Link } from "react-router-dom";
import languages from "../../assets/mock/languages.json";

export default function LanguagesPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #c5b8db, #F6C4ED)",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          background: "#fff",
          borderRadius: "14px",
          boxShadow: "0 10px 30px rgba(15,23,42,0.12)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "30px 40px",
            borderBottom: "1px solid rgba(15,23,42,0.08)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              margin: 0,
              color: "#111827",
            }}
          >
            Выбор языка программирования
          </h2>
          <p
            style={{
              marginTop: "8px",
              fontSize: "15px",
              color: "#6b7280",
            }}
          >
            Выбери язык, который хочешь изучать
          </p>
        </div>

        <div style={{ padding: "32px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "18px",
            }}
          >
            {languages.map((lang: any) => (
              <Link
                key={lang.id}
                // не забыть вырезать мок пейдж позже
                to={lang.slug === "JavaScript" || lang.slug === "CPP" ? "/mock" : `/languages/${lang.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "#fbfbff",
                    borderRadius: "10px",
                    padding: "20px",
                    boxShadow: "0 6px 18px rgba(10,10,20,0.04)",
                    border: "1px solid rgba(15,23,42,0.03)",
                    textAlign: "center",
                    cursor: "pointer",
                    color: "#111827",
                    fontWeight: 500,
                    transition: "transform 0.15s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget.style.transform = "translateY(-4px)");
                    (e.currentTarget.style.boxShadow =
                      "0 8px 22px rgba(10,10,20,0.1)");
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget.style.transform = "none");
                    (e.currentTarget.style.boxShadow =
                      "0 6px 18px rgba(10,10,20,0.04)");
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: "18px" }}>{lang.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
