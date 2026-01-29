import "../css/Modal.css";

export default function Modal({ card, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img src={card.image} alt={card.title} />
        <h2>{card.title}</h2>
        <p>{card.descripcion}</p>

        <button onClick={onClose}>Mas informacion</button>
      </div>
    </div>
  );
}