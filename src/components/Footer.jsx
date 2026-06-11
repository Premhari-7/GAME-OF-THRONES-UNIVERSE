import { useState, useCallback, useRef } from 'react'
import './Footer.css'

const Footer = () => {
  const [phase, setPhase] = useState('frozen') // frozen | breaking | fire
  const wrapRef = useRef(null)

  const handleClick = useCallback(() => {
    if (phase === 'frozen') {
      setPhase('breaking')
      // After ice shards fly out and fire sparks settle, switch to fire
      setTimeout(() => setPhase('fire'), 900)
    } else if (phase === 'fire') {
      setPhase('frozen')
    }
  }, [phase])

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p className="crafted-text">
          Crafted with
          <span
            ref={wrapRef}
            className={`heart-wrap phase-${phase}`}
            onClick={handleClick}
            title={phase === 'frozen' ? 'Click to ignite!' : phase === 'fire' ? 'Click to freeze!' : ''}
          >
            {/* ── ICE LAYER (visible in frozen state) ── */}
            {phase === 'frozen' && (
              <>
                <span className="ice-coat" />
                <span className="frost-mist" />
                <span className="frost-mist m2" />
              </>
            )}

            {/* ── ICE BREAK SHARDS (on click) ── */}
            {phase === 'breaking' && (
              <>
                <span className="shard sh1" />
                <span className="shard sh2" />
                <span className="shard sh3" />
                <span className="shard sh4" />
                <span className="shard sh5" />
                <span className="shard sh6" />
                <span className="shard sh7" />
                <span className="shard sh8" />
                {/* Fire sparks that appear as ice breaks */}
                <span className="spark sp1" />
                <span className="spark sp2" />
                <span className="spark sp3" />
                <span className="spark sp4" />
                <span className="spark sp5" />
                <span className="spark sp6" />
              </>
            )}

            {/* ── FIRE GLOW (after transition) ── */}
            {phase === 'fire' && (
              <>
                <span className="fire-glow" />
                <span className="ember em1" />
                <span className="ember em2" />
                <span className="ember em3" />
              </>
            )}

            {/* ── HEART SVG ── */}
            <svg className="h-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </span>
          by
          <a href="https://prem-hari-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="author-link">
            Prem Hari
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
