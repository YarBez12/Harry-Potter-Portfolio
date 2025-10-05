// App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header.jsx";
import MainSection from "./components/MainSection.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx"; 
import Footer from "./components/Footer.jsx";
import data from "./content/data.json";

export default function App() {
  const { frame, title, sections, instructions, branding } = data;

  return (
    <BrowserRouter>
      <main className="paper text-ink">
        <div className="container sheet">
          <Header branding={branding} />

          <Routes>
            <Route
              path="/"
              element={
                <MainSection
                  frame={frame}
                  title={title}
                  sections={sections}
                />
              }
            />
            <Route
              path="/projects/:slug"
              element={<ProjectDetails projects={sections.projects} frame={frame} />}
            />
            <Route
              path="*"
              element={
                <div className="bodycopy error">
                  <h2>Not Found</h2>
                  <p>The page you are looking for doesn’t exist.</p>
                  <Link to="/" className="link">← Back to homepage</Link>
                </div>
              }
            />
          </Routes>

          <Footer />
        </div>
      </main>
    </BrowserRouter>
  );
}




