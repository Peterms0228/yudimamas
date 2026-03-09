import { useState } from "react";
import "../styles/OrderModal.css";

const WHATSAPP_NUMBER = "60162241934"; // 👈 Replace with your WhatsApp number (no + or spaces)

export default function OrderModal({ product, onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "", quantity: 1 });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.phone.trim())   e.phone   = "Phone number is required";
    if (!form.address.trim()) e.address = "Address is required";
    if (form.quantity < 1)    e.quantity = "Quantity must be at least 1";
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const adjustQty = (delta) =>
    setForm((f) => ({ ...f, quantity: Math.max(1, f.quantity + delta) }));

  const handleSend = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }

    const total = (product.price * form.quantity).toFixed(2);
    const message =
      `Hello Yudimama's Artisan Coconut Candy! I would like to place an order for your delicious coconut candy.\n\n` +
      `*Product:* ${product.name}\n` +
      `*Price:* RM${product.price} x ${form.quantity} = RM${total}\n\n` +
      `*Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Address:* ${form.address}\n` +
      `*Quantity:* ${form.quantity}\n\n` +
      `Please confirm the order and let me know the payment details. Thank you!`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setSent(true);
  };

  const fields = [
    { label: "Full Name",         name: "name",    type: "text", placeholder: "e.g. Ahmad bin Ali" },
    { label: "Phone Number",      name: "phone",   type: "tel",  placeholder: "e.g. 0123456789" },
    { label: "Delivery Address",  name: "address", type: "text", placeholder: "No 1, Jalan Bahagia, KL" },
  ];

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-box">

        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-text">
            <h2>Order Now</h2>
            <p>{product.name} — RM{product.price}</p>
          </div>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>

        {/* Success */}
        {sent ? (
          <div className="modal-success">
            <div className="success-icon">✅</div>
            <h3>Redirecting to WhatsApp!</h3>
            <p>Your order summary is ready. Complete your order by sending the message.</p>
            <button className="btn-done" onClick={onClose}>Done</button>
          </div>
        ) : (

          /* Form */
          <div className="modal-body">

            {fields.map(({ label, name, type, placeholder }) => (
              <div className="field" key={name}>
                <label>{label}</label>
                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className={errors[name] ? "error" : ""}
                />
                {errors[name] && <p className="field-error">{errors[name]}</p>}
              </div>
            ))}

            {/* Quantity */}
            <div className="field">
              <label>Quantity</label>
              <div className="qty-row">
                <button className="qty-btn" onClick={() => adjustQty(-1)}>−</button>
                <span className="qty-value">{form.quantity}</span>
                <button className="qty-btn" onClick={() => adjustQty(1)}>+</button>
                <span className="qty-total">
                  Total: <strong>RM{(product.price * form.quantity).toFixed(2)}</strong>
                </span>
              </div>
              {errors.quantity && <p className="field-error">{errors.quantity}</p>}
            </div>

            <button className="btn-send" onClick={handleSend}>
              Send Order via WhatsApp
            </button>

          </div>
        )}
      </div>
    </div>
  );
}