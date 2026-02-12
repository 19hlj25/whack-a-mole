export default function Hole({ hasMole, onWhack }) {
  return (
    <button className="hole-btn" onClick={hasMole ? onWhack : undefined}>
      <div className="hole">
        {hasMole ? <div className="mole" /> : null}
      </div>
    </button>
  );
}