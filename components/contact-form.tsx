"use client";

export default function ContactForm() {
  return (
    <form
      className="card"
      style={{ padding: "clamp(24px, 4vw, 36px)" }}
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thanks. Email team@anfasoftworks.com and you'll hear back within one business day.");
      }}
    >
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" required placeholder="Jane Doe" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@company.com" />
        </div>
        <div className="field" style={{ gridColumn: "1 / -1" }}>
          <label htmlFor="company">Company (optional)</label>
          <input id="company" name="company" type="text" placeholder="Acme Inc." />
        </div>
        <div className="field">
          <label htmlFor="project-type">Project type</label>
          <select id="project-type" name="project-type">
            <option>Web app</option>
            <option>Mobile app</option>
            <option>AI integration</option>
            <option>Custom software</option>
            <option>Data &amp; analytics</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="budget">Budget range</label>
          <select id="budget" name="budget">
            <option>$10k–$25k</option>
            <option>$25k–$50k</option>
            <option>$50k–$100k</option>
            <option>$100k+</option>
            <option>Let&rsquo;s discuss</option>
          </select>
        </div>
        <div className="field" style={{ gridColumn: "1 / -1" }}>
          <label htmlFor="message">Tell us about the project</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="What are you building, who is it for, and when do you need it?"
          />
        </div>
      </div>
      <div className="form-foot">
        <p>We&rsquo;ll get back to you within 1 business day.</p>
        <button type="submit" className="btn btn--primary btn--lg">
          Send message
        </button>
      </div>
    </form>
  );
}
