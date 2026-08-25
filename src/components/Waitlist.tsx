import { useState, type FC, type FormEvent } from 'react';
import './Waitlist.css';

const Waitlist: FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    window.location.href = `mailto:rnbvfx@gmail.com?subject=${encodeURIComponent('Vault — Early Access')}&body=${encodeURIComponent(`Please add me to Vault's early access list: ${email}`)}`;
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="waitlist-section">
      <div className="container">
        <div className="waitlist-box">
          <span className="waitlist-subtitle">Early Access</span>
          <h2>Be first to mount it.</h2>
          <p>Vault is in active development. Join the waitlist and we'll email you when it's ready for real production use.</p>
          {submitted ? (
            <p className="waitlist-confirmed">Thanks — check your mail app to send the request.</p>
          ) : (
            <form className="waitlist-form" onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">Join the Waitlist</button>
            </form>
          )}
          <p className="waitlist-meta">No spam, ever. You'll only hear from us when there's something to mount.</p>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
