import { useEffect, useRef, useState } from 'react'
import './Characters.css'

const CHARACTERS = [
  {
    id: 'daenerys',
    name: 'Daenerys Targaryen',
    title: 'Mother of Dragons',
    house: 'Targaryen',
    description: 'The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven Kingdoms, Breaker of Chains and Mother of Dragons.',
    image_url: '/images/Clarke.png', 
    bg: 'linear-gradient(135deg, #2d0a0a 0%, #1a0000 100%)',
    accent: '#c0392b',
  },
  {
    id: 'jon',
    name: 'Jon Snow',
    title: 'King in the North',
    house: 'Stark',
    description: 'The bastard son of Ned Stark, raised at Winterfell. He joined the Night\'s Watch, became Lord Commander, and later King in the North. He is secretly the son of Rhaegar Targaryen and Lyanna Stark.',
    image_url: 'https://i.pinimg.com/736x/a7/c5/70/a7c5707182b5ca53dd9eb1b760f643d5.jpg',
    bg: 'linear-gradient(135deg, #1a2332 0%, #0d1117 100%)',
    accent: '#8fafc4',
  },
  {
    id: 'ned',
    name: 'Ned Stark',
    title: 'Lord of Winterfell',
    house: 'Stark',
    description: 'Lord of Winterfell and Warden of the North. A man of strict honor and duty, he was named Hand of the King by his friend Robert Baratheon, a role that led to his tragic downfall.',
    image_url: 'https://i.pinimg.com/736x/1e/34/30/1e3430dff7080d991046d37a0290e788.jpg',
    bg: 'linear-gradient(135deg, #1a2332 0%, #0d1117 100%)',
    accent: '#8fafc4',
  },
  {
    id: 'tyrion',
    name: 'Tyrion Lannister',
    title: 'Hand of the Queen',
    house: 'Lannister',
    description: 'A dwarf, mocked by many, but possessing a brilliant mind. He served as Hand of the King to Joffrey, and later Hand of the Queen to Daenerys Targaryen.',
    image_url: 'https://i.pinimg.com/736x/db/38/ef/db38efbdb43e7d3dac2860a40b88cf4b.jpg',
    bg: 'linear-gradient(135deg, #2a1f00 0%, #1a1200 100%)',
    accent: '#d4a84b',
  },
  {
    id: 'jaime',
    name: 'Jaime Lannister',
    title: 'The Kingslayer',
    house: 'Lannister',
    description: 'A knight of the Kingsguard, infamous for assassinating the Mad King. Over time, he struggles to redeem his honor and prove he is more than his reputation.',
    image_url: 'https://i.pinimg.com/736x/7e/36/0a/7e360a5e1a0cca6b21fa17539e29b103.jpg',
    bg: 'linear-gradient(135deg, #2a1f00 0%, #1a1200 100%)',
    accent: '#d4a84b',
  },
  {
    id: 'arya',
    name: 'Arya Stark',
    title: 'Hero of Winterfell',
    house: 'Stark',
    description: 'A tomboy who learned how to fight. She traveled across Westeros, trained with the Faceless Men in Braavos, and returned home to become a deadly assassin.',
    image_url: 'https://i.pinimg.com/1200x/4d/7a/c5/4d7ac5f7b48148d3650e6fb9ecadbcc6.jpg',
    bg: 'linear-gradient(135deg, #1a2332 0%, #0d1117 100%)',
    accent: '#8fafc4',
  },
]

const CharacterCard = ({ character, index }) => {
  const cardRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), index * 120)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className={`character-card character-card--${character.id}`}
      style={{ '--accent': character.accent, background: character.bg }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-glow" />

      <div className="character-image-wrap">
        {!imgError ? (
          <img
            className="character-img"
            src={character.image_url}
            alt={character.name}
            loading="lazy"
            style={character.id === 'tyrion' ? { objectPosition: 'top' } : {}}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="character-img-fallback">{character.name[0]}</div>
        )}
        <div className="image-overlay" />
      </div>

      <div className="character-content">
        <h2 className="character-name">{character.name}</h2>
        <p className="character-title">{character.title}</p>
        <div className="character-divider">
          <span className="divider-line" />
          <span className="divider-diamond" />
          <span className="divider-line" />
        </div>
        <p className={`character-desc ${hovered ? 'desc-visible' : ''}`}>
          {character.description}
        </p>
      </div>

      <div className="card-accent-bar" />
    </div>
  )
}

const Characters = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)

  useEffect(() => {
    if (!headingRef.current) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          headingRef.current.classList.add('visible')
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(headingRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="characters-section" id="characters">
      <div className="characters-bg-texture" />
      <div className="characters-bg-vignette" />

      <header className="characters-header" ref={headingRef}>
        <p className="characters-eyebrow fade-up">LEGENDS OF WESTEROS</p>
        <div className="header-ornament">
          <span className="ornament-line" />
          <span className="ornament-rune">✦</span>
          <span className="ornament-line" />
        </div>
        <h1 className="characters-title fade-up">
          The Key<br />
          <em>Characters</em>
        </h1>
      </header>

      <div className="characters-grid">
        {CHARACTERS.map((char, i) => (
          <CharacterCard key={char.id} character={char} index={i} />
        ))}
      </div>

      <div className="characters-footer-ornament">
        <span className="footer-line" />
        <span className="footer-sigil">⚔</span>
        <span className="footer-line" />
      </div>
    </section>
  )
}

export default Characters
