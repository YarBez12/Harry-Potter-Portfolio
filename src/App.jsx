import Header from './components/Header.jsx'
import MainSection from './components/MainSection.jsx';
import data from "./content/data.json";

export default function App() {
  return (
    <main className="paper text-ink">
      <div className="container sheet">
        <Header branding={data.branding}></Header>
        <MainSection frame={data.frame} title={data.title} sections={data.sections} instructions={data.instructions}></MainSection>
      </div>
    </main>
  );
}
