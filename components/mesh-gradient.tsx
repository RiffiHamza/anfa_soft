// Signature hero background: a flowing emerald-led gradient ribbon (two
// animated layers), masked to the right and angled at the bottom — our take
// on Stripe's colored hero. Decorative, hidden from assistive tech.
export default function MeshGradient() {
  return (
    <div className="mesh" aria-hidden="true">
      <div className="mesh__ribbon" />
      <div className="mesh__ribbon2" />
    </div>
  );
}
