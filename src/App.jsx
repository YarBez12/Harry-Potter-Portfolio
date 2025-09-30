import Header from './components/Header.jsx'
import MainSection from './components/MainSection.jsx';

export default function App() {
  return (
    <main className="paper text-ink">
      <div className="container sheet">
        <Header></Header>
        <MainSection></MainSection>
      </div>
    </main>
  );
}
