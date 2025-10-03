export default function PersonalStatement({personal_statement}) {
  return (
    <div className="col">
      <h3 className="col-head">{personal_statement.title}</h3>
      <p className="dropcap">
        <div dangerouslySetInnerHTML={{ __html: personal_statement.text }}/>
      </p>
      <div className="headline-divider strong top"></div>
    </div>
  );
}
