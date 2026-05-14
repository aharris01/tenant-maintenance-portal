import "./card.css";

export default function Card({ title, children }) {
  return (
    <div className="card">
      <div className="card-body">
        {title && <h2 className="title title-position">{title}</h2>}
        <div className="card-content">{children}</div>
      </div>
    </div>
  );
}
