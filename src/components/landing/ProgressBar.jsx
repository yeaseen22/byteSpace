import { useState } from 'react'

const STEP = 15
const MAX = 100
const WRAP = 35

/**
 * Click-to-advance progress meter.
 *
 * The reference only wired up the first `.progress-track` on the page and left
 * the showcase copy inert; both instances are interactive here.
 */
export default function ProgressBar({ initial = 55, valueRow = false, trackMargin }) {
  const [value, setValue] = useState(initial)

  const advance = () => setValue((current) => (current + STEP > MAX ? WRAP : current + STEP))

  const number = (
    // remounting on change replays the pop animation
    <span className="progress-number progress-number-pop" key={value}>
      {value}%
    </span>
  )

  return (
    <>
      {valueRow ? <div className="progress-val-row">{number}</div> : number}
      <button
        type="button"
        className="progress-track"
        style={trackMargin ? { marginTop: trackMargin } : undefined}
        onClick={advance}
        aria-label={`Learning progress ${value} percent. Activate to advance.`}
      >
        <span className="progress-fill" style={{ width: `${value}%` }} />
      </button>
    </>
  )
}
