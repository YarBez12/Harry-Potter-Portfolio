export default function Header() {
  return (
    <>
      <div className="headline-divider-row">
        <div className="headline-divider top">
          <div className="logo-mark"></div>
        </div>
        <span className="headline-text">programming news</span>
        <div className="headline-divider rest-top"></div>
      </div>
      <h1 className="main-head">THE DAILY DEVELOPER</h1>
      <p className="strapline">
        <span className="star">✶</span>
        Freshly Brewed Code for Muggles & Wizards Alike
        <span className="star">✶</span>
      </p>
      <div className="headline-divider bottom"></div>
    </>
  );
}
