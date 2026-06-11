<div align="center">

  <img src="src/assets/dragon_logo.png" alt="Dragon Sigil" width="280" />

  <br />

  <img src="https://readme-typing-svg.herokuapp.com?font=Cinzel&weight=700&size=40&duration=3000&pause=1500&color=C9A84C&center=true&vCenter=true&width=700&height=70&lines=GAME+OF+THRONES+UNIVERSE" alt="Typing Title" />

  <br />

  <img src="https://readme-typing-svg.herokuapp.com?font=IM+Fell+English&weight=400&size=18&duration=4000&pause=2000&color=8B8B6B&center=true&vCenter=true&width=600&height=30&lines=Fire+and+Blood.+Winter+is+Coming.+Hear+Me+Roar." alt="Typing Subtitle" />

  <br />
  <br />

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0705,50:1a1200,100:0a0705&height=3&section=header" width="100%" />

  <a href="#"><img src="https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white" alt="Three.js" /></a>
  <a href="#"><img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" /></a>
  <a href="#"><img src="https://img.shields.io/badge/License-MIT-C9A84C?style=for-the-badge" alt="License" /></a>

  <br />
  <br />

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0705,50:1a1200,100:0a0705&height=3&section=header" width="100%" />

</div>

<br />

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=IM+Fell+English&weight=400&size=16&duration=5000&pause=3000&color=C9A84C&center=true&vCenter=true&multiline=true&width=550&height=50&lines=%22I+am+not+going+to+stop+the+wheel.+I+am+going+to+break+the+wheel.%22;%E2%80%94+Daenerys+Targaryen" alt="Khaleesi Quote" />
</div>

<br />

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:0a0705,50:1a1200,100:0a0705&height=2" width="100%" />

## About The Project

**Game of Thrones Universe** is a deeply immersive, visually stunning, and **fully scroll-driven** web experience that brings the world of Westeros to life. No button clicks needed — just scroll. Every scene transitions seamlessly through cinematic crossfades, 3D particle physics, and mathematical scroll-progress algorithms.

This is not a standard webpage. It is an interactive journey through the lore of the Seven Kingdoms, engineered for maximum visual impact.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:0a0705,50:1a1200,100:0a0705&height=2" width="100%" />

## Architecture

<table>
  <tr>
    <td width="50%">
      <h3>Scroll Engine</h3>
      <p>The core of the application is powered by <b>GSAP ScrollTrigger</b>. The entire viewport is pinned while background images, text, and 3D particles are mathematically crossfaded based on scroll progress across 7 full viewport heights.</p>
    </td>
    <td width="50%">
      <h3>3D Particle Renderer</h3>
      <p>Golden embers and frost particles are rendered in real-time WebGL using <b>@react-three/fiber</b>. The particle field rotates using sine-wave mathematics, creating a living, breathing parallax atmosphere.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>House Card Physics</h3>
      <p>Each House card uses <b>IntersectionObserver</b> for staggered reveal animations. On hover, bounding-client calculations tilt the sigils in 3D space (<code>rotateX</code>, <code>rotateY</code>) based on cursor position.</p>
    </td>
    <td width="50%">
      <h3>Pure CSS Craftsmanship</h3>
      <p>Zero CSS frameworks. Every style is hand-written vanilla CSS using <code>clamp()</code>, <code>calc()</code>, and viewport units (<code>dvh</code>, <code>vw</code>) for pixel-perfect responsiveness across all devices.</p>
    </td>
  </tr>
</table>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:0a0705,50:1a1200,100:0a0705&height=2" width="100%" />

## Interactive Sections

<details>
  <summary><b>The Hero — Cinematic Scroll Scenes</b></summary>
  <br />
  Six full-screen scenes (The Ancient Chronicles, The Seven Kingdoms, The Wall, The Iron Throne, Fire and Blood, The Long Night) crossfade with mathematically interpolated opacity and scale transforms. A 3D canvas overlay renders thousands of floating star particles and golden sparkles in real-time.
  <br /><br />
</details>

<details>
  <summary><b>The Great Houses — Interactive Lore Cards</b></summary>
  <br />
  Nine Great Houses of Westeros displayed in an animated grid. Each card features the House sigil, seat, region, and words. On hover, the card reveals a detailed lore description with 3D tilt physics applied to the sigil image.
  <br /><br />
</details>

<details>
  <summary><b>Characters — The Key Players</b></summary>
  <br />
  A curated roster of iconic characters with expand-on-click biography panels. Styled with golden borders and cinematic typography.
  <br /><br />
</details>

<details>
  <summary><b>Lore — Deep Worldbuilding</b></summary>
  <br />
  Scroll-triggered lore panels with parallax imagery covering dragons, battles, and the deep history of Westeros.
  <br /><br />
</details>

<details>
  <summary><b>Footer — Ice and Fire</b></summary>
  <br />
  An interactive heart that transitions between ice (frozen) and fire (ignited) states on click, with animated ice shards, fire sparks, and glowing embers.
  <br /><br />
</details>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:0a0705,50:1a1200,100:0a0705&height=2" width="100%" />

## Run Locally

```bash
# Clone the repository
git clone https://github.com/Premhari-7/GAME-OF-THRONES-UNIVERSE.git

# Navigate into the project
cd GAME-OF-THRONES-UNIVERSE

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:0a0705,50:1a1200,100:0a0705&height=2" width="100%" />

## License

This project is open-sourced under the **MIT License**. See the [LICENSE](LICENSE) file for details.

<br />

<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:0a0705,50:1a1200,100:0a0705&height=2" width="100%" />

  <br />

  <b>Created, Engineered, and Maintained by <a href="https://github.com/Premhari-7">Prem Hari</a></b>

  <br />
  <br />

  <img src="https://readme-typing-svg.herokuapp.com?font=IM+Fell+English&weight=400&size=14&duration=6000&pause=4000&color=7A6130&center=true&vCenter=true&width=500&height=30&lines=%22When+you+play+the+game+of+thrones%2C+you+win+or+you+die.%22;%E2%80%94+Cersei+Lannister" alt="Cersei Quote" />

  <br />

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0705,50:1a1200,100:0a0705&height=120&section=footer" width="100%" />

</div>
