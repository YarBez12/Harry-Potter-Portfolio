export default function WebsiteGuide({instructions}) {
  return (
    <div className="col">
      <h3 className="col-head">{instructions.title}</h3>
      <ul className="pretty-list dropcap">
        {instructions.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="section-divider triple-dash"></div>
    </div>
  );
}
