import { useEffect, useRef } from 'react'
import './Lore.css'

const LORE_ITEMS = [
  {
    id: 'drogon',
    title: 'Drogon',
    subtitle: 'The Winged Shadow',
    description: 'The largest and most aggressive of Daenerys Targaryen\'s three dragons. Named after her late husband, Khal Drogo. His scales are black, his horns and spinal plates are blood red, and his eyes are smoldering red pits.',
    image: '/images/scene_dragon.png',
  },
  {
    id: 'rhaegal',
    title: 'Rhaegal',
    subtitle: 'The Green Terror',
    description: 'Named after Daenerys\'s eldest brother, Rhaegar Targaryen. He has emerald green scales with bronze highlights. He is fiercely loyal to his mother and brothers.',
    image: '/images/rhaegal.png',
  },
  {
    id: 'viserion',
    title: 'Viserion',
    subtitle: 'The White Dragon',
    description: 'Named after Daenerys\'s brother, Viserys. He is distinguishable by his cream and gold colored scales, and red-orange wings. Tragically, he fell to the Night King.',
    image: '/images/image copy 3.png',
    imageStyle: { objectPosition: '50% 30%' },
  },
]

const Lore = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('.lore-card')
    cards.forEach((card) => observer.observe(card))
    const header = document.querySelector('.lore-header')
    if (header) observer.observe(header)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="lore-section" id="lore">
      <div className="lore-bg-vignette" />
      
      <header className="lore-header">
        <p className="lore-eyebrow fade-up">THE BEASTS OF VALYRIA</p>
        <div className="header-ornament">
          <span className="ornament-line" />
          <span className="ornament-rune">❖</span>
          <span className="ornament-line" />
        </div>
        <h1 className="lore-title fade-up">
          Legendary<br />
          <em>Dragons</em>
        </h1>
      </header>

      <div className="lore-grid">
        {LORE_ITEMS.map((item, i) => (
          <div key={item.id} className="lore-card" style={{ transitionDelay: `${i * 0.15}s` }}>
            <div className="lore-image-container">
              <img
                src={item.image}
                alt={item.title}
                className="lore-image"
                loading="lazy"
                style={item.imageStyle || {}}
              />
              <div className="lore-image-overlay" />
            </div>
            <div className="lore-content">
              <h3 className="lore-item-subtitle">{item.subtitle}</h3>
              <h2 className="lore-item-title">{item.title}</h2>
              <p className="lore-item-desc">{item.description}</p>
            </div>
            <div className="lore-card-border" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Lore
