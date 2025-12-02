import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #afea66, #4ba279)",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          background: "#fff",
          borderRadius: "14px",
          boxShadow: "0 10px 30px rgba(15,23,42,0.12)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "40px 32px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: 700,
              margin: "0 0 16px 0",
              color: "#111827",
              lineHeight: 1.2,
            }}
          >
            Добро пожаловать на платформу обучения!
          </h1>
          
          <p
            style={{
              fontSize: "16px",
              color: "#6b7280",
              margin: "0 0 32px 0",
              lineHeight: 1.5,
            }}
          >
            Выбери язык программирования и начни изучение с нуля. 
            Интерактивные уроки, практические задания и современные технологии.
          </p>

          <Link to="/languages" style={{ textDecoration: "none" }}>
            <button
              style={{
                background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                color: "white",
                border: "none",
                padding: "14px 32px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 12px rgba(124, 58, 237, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(124, 58, 237, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(124, 58, 237, 0.3)";
              }}
            >
              Перейти к выбору языка
            </button>
          </Link>

          {/* тут ебанем инфу о нашей платформе/преимущества*/}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              marginTop: "40px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(15,23,42,0.08)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "24px", fontWeight: 700, color: "#7c3aed" }}>
                1337+
              </div>
              <div style={{ fontSize: "14px", color: "#6b7280" }}>
                Уроков
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "24px", fontWeight: 700, color: "#7c3aed" }}>
                1337+
              </div>
              <div style={{ fontSize: "14px", color: "#6b7280" }}>
                Языков
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "24px", fontWeight: 700, color: "#7c3aed" }}>
                1337+
              </div>
              <div style={{ fontSize: "14px", color: "#6b7280" }}>
                Задач
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}