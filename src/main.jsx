import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <main className="page">
      <nav className="nav">
        <div className="brand">Cloud<span>Nexus</span></div>
        <a href="#architecture">Architecture</a>
      </nav>

      <section className="hero">
        <div className="badge">AWS ECS FARGATE • DEVOPS DEMO</div>
        <h1>Ship faster.<br /><span>Run reliably.</span></h1>
        <p>
          A simple React application containerized with Docker and served by
          Nginx on Amazon ECS Fargate.
        </p>
        <div className="actions">
          <a className="button primary" href="#architecture">View Stack</a>
          <a className="button secondary" href="https://aws.amazon.com/ecs/" target="_blank" rel="noreferrer">AWS ECS ↗</a>
        </div>
      </section>

      <section id="architecture" className="grid">
        {[
          ["01", "React", "Simple frontend application"],
          ["02", "Docker", "Reproducible application image"],
          ["03", "ECR", "Private image registry on AWS"],
          ["04", "ECS Fargate", "Managed container runtime"],
          ["05", "Terraform", "Infrastructure as Code"],
          ["06", "GitHub Actions", "Automated CI/CD pipeline"]
        ].map(([n, title, text]) => (
          <article className="card" key={n}>
            <div className="number">{n}</div>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <footer>
        <span>DevOps End-to-End Project</span>
        <span>React • Docker • AWS • Terraform • GitHub Actions</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
