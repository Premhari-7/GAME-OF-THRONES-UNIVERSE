import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Sparkles } from '@react-three/drei'
import logoImg from '../assets/dragon_logo.png'
import './Hero.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// ─── Custom SVG Sigils ──────────────────────────────────────────────────────
const DragonSigil = () => (
  <svg className="got-sigil-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 4C28 12 18 16 14 24C10 32 14 42 22 48C26 50 30 50 32 48C34 50 38 50 42 48C50 42 54 32 50 24C46 16 36 12 32 4Z" 
      fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M32 4C30 10 24 14 20 20C16 26 18 36 24 42" stroke="#c9a84c" strokeWidth="1" opacity="0.6"/>
    <path d="M32 4C34 10 40 14 44 20C48 26 46 36 40 42" stroke="#c9a84c" strokeWidth="1" opacity="0.6"/>
    <path d="M26 28C28 24 32 20 32 20C32 20 36 24 38 28" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M22 18L18 14M42 18L46 14" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
    <circle cx="27" cy="26" r="1.5" fill="#c9a84c" opacity="0.8"/>
    <circle cx="37" cy="26" r="1.5" fill="#c9a84c" opacity="0.8"/>
    <path d="M28 36C30 38 34 38 36 36" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    <path d="M32 48L32 56" stroke="#c9a84c" strokeWidth="1" opacity="0.4"/>
    <path d="M28 56L32 60L36 56" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
  </svg>
)

const SkullSigil = () => (
  <svg className="got-sigil-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 6C20 6 12 16 12 28C12 36 16 42 22 46L22 54C22 56 24 58 26 58L38 58C40 58 42 56 42 54L42 46C48 42 52 36 52 28C52 16 44 6 32 6Z" 
      fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
    <circle cx="24" cy="28" r="5" fill="none" stroke="#c9a84c" strokeWidth="1.2"/>
    <circle cx="40" cy="28" r="5" fill="none" stroke="#c9a84c" strokeWidth="1.2"/>
    <circle cx="24" cy="28" r="2" fill="#c9a84c" opacity="0.5"/>
    <circle cx="40" cy="28" r="2" fill="#c9a84c" opacity="0.5"/>
    <path d="M28 38C30 40 34 40 36 38" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round"/>
    <path d="M30 36L30 42M34 36L34 42" stroke="#c9a84c" strokeWidth="0.8" opacity="0.6"/>
    <path d="M26 50L26 58M32 48L32 58M38 50L38 58" stroke="#c9a84c" strokeWidth="1" opacity="0.5"/>
    <path d="M16 20C20 12 26 8 32 8C38 8 44 12 48 20" stroke="#c9a84c" strokeWidth="0.8" opacity="0.3"/>
  </svg>
)

// ─── 3D Particle overlay ─────────────────────────────────────────────────────
const Particles = () => {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1
    }
  })
  return (
    <group ref={ref}>
      <Stars radius={80} depth={50} count={3000} factor={4} saturation={0} fade speed={0.8} />
      <Sparkles count={200} scale={15} size={3} speed={0.3} opacity={0.15} color="#c9a84c" />
      <Sparkles count={400} scale={25} size={1.5} speed={0.15} opacity={0.3} color="#ffffff" />
    </group>
  )
}

// ─── Sigil renderer ─────────────────────────────────────────────────────────
const SigilIcon = ({ type }) => {
  switch (type) {
    case 'dragon': return <DragonSigil />
    case 'skull': return <SkullSigil />
    default: return <span className="got-sigil-text">{type}</span>
  }
}

// ─── Scene data ──────────────────────────────────────────────────────────────
const SCENES = [
  {
    id: 'book',
    image: '/images/scene_book.png',
    title: 'The Ancient Chronicles',
    subtitle: 'A SONG OF ICE AND FIRE',
    body: 'In the beginning, there were only the words of the Maesters — secrets sealed within ancient tomes, waiting for a hand brave enough to open them.',
    sigil: '✦',
    sigilType: 'text',
  },
  {
    id: 'map',
    image: '/images/scene_map.png',
    title: 'The Seven Kingdoms',
    subtitle: 'THE REALM OF WESTEROS',
    body: "From the Eyrie's clouded peaks to the red sands of Dorne — seven kingdoms, one throne, a thousand reasons to bleed.",
    sigil: '♜',
    sigilType: 'text',
  },
  {
    id: 'wall',
    image: '/images/scene_wall.png',
    title: 'The Wall',
    subtitle: "THE NIGHT'S WATCH",
    body: 'Eight thousand years it has stood. Seven hundred feet of ice, stretching across the frozen north. The shield that guards the realms of men.',
    sigil: '❄',
    sigilType: 'text',
  },
  {
    id: 'throne',
    image: '/images/scene_throne.png',
    title: 'The Iron Throne',
    subtitle: 'FORGED IN DRAGONFIRE',
    body: 'One thousand swords, surrendered by the enemies of Aegon the Conqueror. Melted. Reshaped. Made into something terrible and magnificent.',
    sigil: '♔',
    sigilType: 'text',
  },
  {
    id: 'dragon',
    image: '/images/scene_dragon.png',
    title: 'Fire and Blood',
    subtitle: 'HOUSE TARGARYEN',
    body: 'They did not conquer Westeros — they burned it into submission. Dragon riders, dynasty builders, and the last of a world consumed by fire.',
    sigil: '☣',
    sigilType: 'text',
  },
  {
    id: 'walkers',
    image: '/images/scene_walkers.png',
    title: 'The Long Night',
    subtitle: 'WINTER IS HERE',
    body: 'The dead are coming. An army that does not eat, does not sleep, and does not stop. The true war was never for the throne.',
    sigil: '☠',
    sigilType: 'text',
  },
]

// ─── Component ───────────────────────────────────────────────────────────────
const Hero = () => {
  const containerRef = useRef(null)
  const stickyRef = useRef(null)
  const progressRef = useRef(null)
  const runeBarRef = useRef(null)
  const chapterLabelRef = useRef(null)

  const sceneRefs = useRef([])
  const textRefs = useRef([])

  const [activeScene, setActiveScene] = useState(0)
  const [ready, setReady] = useState(false)

  // ─── Scroll to section handler ──────────────────────────────────────────
  const scrollToScene = useCallback((sceneIndex) => {
    if (!containerRef.current) return
    const scrollHeight = window.innerHeight * 7
    const sceneDuration = 1 / SCENES.length
    const targetProgress = sceneIndex * sceneDuration + sceneDuration * 0.3
    const containerTop = containerRef.current.offsetTop
    const targetScroll = containerTop + targetProgress * scrollHeight
    window.scrollTo({ top: targetScroll, behavior: 'smooth' })
  }, [])

  const scrollToHouses = useCallback(() => {
    const housesSection = document.querySelector('.section1')
    if (housesSection) {
      gsap.to(window, { duration: 2.5, scrollTo: housesSection, ease: 'power4.inOut' })
    }
  }, [])

  const scrollToCharacters = useCallback(() => {
    const charSection = document.querySelector('.characters-section')
    if (charSection) {
      gsap.to(window, { duration: 2.8, scrollTo: charSection, ease: 'power4.inOut' })
    }
  }, [])

  // Nav link handlers
  const handleNavClick = useCallback((label) => {
    switch (label) {
      case 'The World':
        scrollToScene(1) // Map scene
        break
      case 'Characters':
        scrollToCharacters()
        break
      case 'Houses':
        scrollToHouses()
        break
      case 'History':
        scrollToScene(0) // Book scene
        break
      default:
        break
    }
  }, [scrollToScene, scrollToHouses, scrollToCharacters])

  // ─── Preload images ─────────────────────────────────────────────────────
  useEffect(() => {
    let loaded = 0
    SCENES.forEach((scene) => {
      const img = new Image()
      img.src = scene.image
      img.onload = () => {
        loaded++
        if (loaded >= SCENES.length) {
          setTimeout(() => setReady(true), 800)
        }
      }
      img.onerror = () => {
        loaded++
        if (loaded >= SCENES.length) {
          setTimeout(() => setReady(true), 800)
        }
      }
    })
  }, [])

  // ─── GSAP ScrollTrigger ─────────────────────────────────────────────────
  useEffect(() => {
    if (!ready) return

    const scrollHeight = window.innerHeight * 7

    // Set initial state: first scene visible
    if (sceneRefs.current[0]) {
      sceneRefs.current[0].style.opacity = '1'
      sceneRefs.current[0].style.transform = 'scale(1)'
      sceneRefs.current[0].style.zIndex = '5'
    }
    if (textRefs.current[0]) {
      textRefs.current[0].style.opacity = '1'
      textRefs.current[0].style.transform = 'translateY(0px)'
      textRefs.current[0].style.zIndex = '15'
    }

    // Pin
    const pinTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: `+=${scrollHeight}`,
      pin: stickyRef.current,
      pinSpacing: true,
      anticipatePin: 1,
    })

    // Scene transitions
    const sceneCount = SCENES.length
    const sceneDuration = 1 / sceneCount

    // Animate each scene
    const mainTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: `+=${scrollHeight}`,
      scrub: 0.3,
      onUpdate: (self) => {
        const p = self.progress

        // Progress bar
        if (progressRef.current) {
          progressRef.current.style.width = `${p * 100}%`
        }

        // Active scene detection
        const currentScene = Math.min(Math.floor(p / sceneDuration), sceneCount - 1)
        setActiveScene(currentScene)

        // Chapter label
        if (chapterLabelRef.current) {
          chapterLabelRef.current.textContent = `${String(currentScene + 1).padStart(2, '0')} / ${String(sceneCount).padStart(2, '0')}`
        }

        // Animate each scene
        SCENES.forEach((_, j) => {
          const sEl = sceneRefs.current[j]
          const tEl = textRefs.current[j]
          if (!sEl || !tEl) return

          const sStart = j * sceneDuration
          const sEnd = (j + 1) * sceneDuration

          // Scene within range?
          if (p >= sStart && p <= sEnd) {
            const localP = (p - sStart) / sceneDuration

            // Image — smooth crossfade
            let imgOpacity, imgScale
            if (localP < 0.1) {
              imgOpacity = localP / 0.1
              imgScale = 1.08 - (localP / 0.1) * 0.08
            } else if (localP > 0.9) {
              imgOpacity = (1 - localP) / 0.1
              imgScale = 1 + ((localP - 0.9) / 0.1) * 0.05
            } else {
              imgOpacity = 1
              imgScale = 1 + (localP - 0.1) * 0.06
            }

            sEl.style.opacity = imgOpacity
            sEl.style.transform = `scale(${imgScale})`
            sEl.style.zIndex = 5

            // Text
            let textOpacity, textY
            if (localP < 0.15) {
              textOpacity = localP / 0.15
              textY = 50 * (1 - localP / 0.15)
            } else if (localP > 0.85) {
              textOpacity = (1 - localP) / 0.15
              textY = -30 * ((localP - 0.85) / 0.15)
            } else {
              textOpacity = 1
              textY = 0
            }

            tEl.style.opacity = textOpacity
            tEl.style.transform = `translateY(${textY}px)`
            tEl.style.zIndex = 15
          } else {
            sEl.style.opacity = 0
            sEl.style.zIndex = 1
            tEl.style.opacity = 0
            tEl.style.zIndex = 1
          }
        })
      },
    })

    // Rune bar entrance
    if (runeBarRef.current) {
      const ticks = runeBarRef.current.querySelectorAll('.rune-tick')
      gsap.fromTo(ticks,
        { scaleY: 0, opacity: 0 },
        {
          scaleY: 1, opacity: 1, stagger: 0.04, duration: 0.4, ease: 'elastic.out(1,0.5)',
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' }
        }
      )
    }

    return () => {
      pinTrigger.kill()
      mainTrigger.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [ready])

  // ─── Render ─────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Loading overlay ── */}
      <div className={`got-loading ${ready ? 'hidden' : ''}`}>
        <img src={logoImg} alt="Logo" className="got-loading-logo-img" />
        <div className="got-loading-logo">Game of Thrones</div>
        <div className="got-loading-sub">The Chronicles of Westeros</div>
        <div className="got-loading-bar-wrap">
          <div className="got-loading-bar-fill" />
        </div>
      </div>

      {/* ── Main scroll container ── */}
      <div
        ref={containerRef}
        className="got-container"
      >
        {/* ── Sticky viewport ── */}
        <div ref={stickyRef} className="got-sticky">

          {/* Scene background images — using <img> for clarity */}
          {SCENES.map((scene, i) => (
            <div
              key={scene.id}
              ref={(el) => (sceneRefs.current[i] = el)}
              className="got-scene-bg"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <img
                src={scene.image}
                alt={scene.title}
                className="got-scene-img"
                loading={i < 2 ? 'eager' : 'lazy'}
              />
            </div>
          ))}

          {/* 3D Canvas particle overlay */}
          <div className="got-canvas-overlay">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
              <Particles />
            </Canvas>
          </div>

          {/* Layers */}
          <div className="got-vignette" />
          <div className="got-overlay" />
          <div className="got-grain" />

          {/* Corner ornaments */}
          {['tl', 'tr', 'bl', 'br'].map((pos) => (
            <div key={pos} className={`got-corner got-corner-${pos}`}>
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2 L2 20 M2 2 L20 2" stroke="#c9a84c" strokeWidth="1" strokeOpacity="0.5" />
                <path d="M2 2 L8 8" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.4" />
                <rect x="1" y="1" width="4" height="4" fill="none" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.6" />
              </svg>
            </div>
          ))}

          {/* Nav */}
          <nav className="got-nav">
            <div className="got-nav-brand">
              <img src={logoImg} alt="Logo" className="got-nav-logo-img" />
              <div className="got-nav-logo">Game of Thrones</div>
            </div>
            <ul className="got-nav-links">
              {['The World', 'Characters', 'Houses', 'History'].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(l)
                    }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Rune bar */}
          <div ref={runeBarRef} className="got-rune-bar">
            {Array.from({ length: 80 }).map((_, i) => (
              <div key={i} className="rune-tick" />
            ))}
          </div>

          {/* Scene text overlays */}
          {SCENES.map((scene, i) => (
            <div
              key={`text-${scene.id}`}
              ref={(el) => (textRefs.current[i] = el)}
              className="got-content"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <span className="got-sigil">
                {scene.sigilType === 'svg' ? (
                  <SigilIcon type={scene.sigil} />
                ) : (
                  <span className="got-sigil-text">{scene.sigil}</span>
                )}
              </span>
              <div className="got-divider">
                <div className="got-divider-line" />
                <div className="got-divider-diamond" />
                <div className="got-divider-line right" />
              </div>
              <span className="got-subtitle">{scene.subtitle}</span>
              <h1 className="got-title">{scene.title}</h1>
              <p className="got-body">{scene.body}</p>
              {i === 0 && (
                <div className="got-cta-row">
                  <button
                    className="got-cta-btn"
                    onClick={() => scrollToScene(1)}
                  >
                    Begin the Journey
                  </button>
                  <button
                    className="got-cta-ghost"
                    onClick={scrollToHouses}
                  >
                    Explore the Realm
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Right panel */}
          <div className="got-right-panel">
            <div ref={chapterLabelRef} className="got-chapter-label">01 / 06</div>
            <div className="got-vert-line" />
            <div className="got-dots">
              {SCENES.map((_, i) => (
                <div
                  key={i}
                  className={`got-dot ${i === activeScene ? 'active' : ''}`}
                  onClick={() => scrollToScene(i)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <div className="got-scroll-hint">
            <span>Scroll</span>
            <div className="arrow" />
          </div>

          {/* Progress bar */}
          <div className="got-progress-bar-wrap">
            <div ref={progressRef} className="got-progress-bar-fill" />
          </div>

        </div>{/* /sticky */}
      </div>{/* /container */}
    </>
  )
}

export default Hero