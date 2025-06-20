import { useEffect } from 'react';

export default function ItemModal({ item, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{item.name}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p><strong>Type:</strong> {item.type}</p>
            <p>{item.description}</p>
            <div className="d-flex flex-wrap gap-2">
              {item.images.map((img, idx) => (
                <img key={idx} src={img} alt={`item-img-${idx}`} className="rounded" style={{ height: '100px', objectFit: 'cover' }} />
              ))}
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-success" onClick={() => alert("Enquiry sent to static@example.com")}>Enquire</button>
            <button className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
