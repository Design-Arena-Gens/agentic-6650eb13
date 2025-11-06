'use client';
import { useState } from 'react';
import './globals.css';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [savedData, setSavedData] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedData([...savedData, { ...formData, id: Date.now() }]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        message: ''
      });
    }, 2000);
  };

  const handleDelete = (id) => {
    setSavedData(savedData.filter(item => item.id !== id));
  };

  return (
    <div className="container">
      <div className="header">
        <h1>📝 डेटा फॉर्म</h1>
        <p>कृपया अपनी जानकारी भरें</p>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">नाम *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="अपना नाम दर्ज करें"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">ईमेल *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">फोन नंबर *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="10 अंकों का नंबर"
                pattern="[0-9]{10}"
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">शहर *</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="शहर का नाम"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="address">पता *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="पूरा पता दर्ज करें"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="state">राज्य *</label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="">राज्य चुनें</option>
                <option value="महाराष्ट्र">महाराष्ट्र</option>
                <option value="दिल्ली">दिल्ली</option>
                <option value="कर्नाटक">कर्नाटक</option>
                <option value="तमिलनाडु">तमिलनाडु</option>
                <option value="गुजरात">गुजरात</option>
                <option value="राजस्थान">राजस्थान</option>
                <option value="उत्तर प्रदेश">उत्तर प्रदेश</option>
                <option value="मध्य प्रदेश">मध्य प्रदेश</option>
                <option value="पंजाब">पंजाब</option>
                <option value="हरियाणा">हरियाणा</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="pincode">पिन कोड *</label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                placeholder="6 अंकों का पिन कोड"
                pattern="[0-9]{6}"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">संदेश (वैकल्पिक)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="अतिरिक्त जानकारी..."
            />
          </div>

          <button type="submit" className="submit-btn">
            जमा करें
          </button>
        </form>

        {submitted && (
          <div className="success-message">
            ✅ डेटा सफलतापूर्वक जमा हो गया!
          </div>
        )}
      </div>

      {savedData.length > 0 && (
        <div className="data-display">
          <h2>जमा किया गया डेटा ({savedData.length})</h2>
          <div className="data-grid">
            {savedData.map((data) => (
              <div key={data.id} className="data-card">
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(data.id)}
                  title="हटाएं"
                >
                  ✕
                </button>
                <div className="data-item"><strong>नाम:</strong> {data.name}</div>
                <div className="data-item"><strong>ईमेल:</strong> {data.email}</div>
                <div className="data-item"><strong>फोन:</strong> {data.phone}</div>
                <div className="data-item"><strong>पता:</strong> {data.address}</div>
                <div className="data-item"><strong>शहर:</strong> {data.city}</div>
                <div className="data-item"><strong>राज्य:</strong> {data.state}</div>
                <div className="data-item"><strong>पिन कोड:</strong> {data.pincode}</div>
                {data.message && (
                  <div className="data-item"><strong>संदेश:</strong> {data.message}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
