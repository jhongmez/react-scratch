function App() {
  return (
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Platzi-host — Home</title>
        <link rel="stylesheet" href="./styles.css" />
      </head>
      <body>
        <header class="header">
          <h1>Platzi-host</h1>
          <nav>
            <a href="#">Alojamientos</a>
            <a href="#">Experiencias</a>
            <a href="#">Anfitriones</a>
          </nav>
        </header>

        <main>
          <section class="hero">
            <div>
              <p class="eyebrow">Clon educativo estilo Platzi-host</p>
              <h2>Encuentra tu próximo alojamiento</h2>
              <p>
                Explora departamentos, casas y cabañas para tu próxima aventura.
              </p>
            </div>
          </section>

          <section class="search-box">
            <label>
              Ciudad
              <input type="text" placeholder="Santiago, Chile" />
            </label>
            <label>
              Tipo
              <input type="text" placeholder="Apartamento" />
            </label>
            <label>
              Huéspedes
              <input type="number" placeholder="2" />
            </label>
            <button>Buscar</button>
          </section>

          <section class="properties-section">
            <div class="section-title">
              <h3>Alojamientos disponibles</h3>
              <p>Primera versión construida solo con HTML y CSS.</p>
            </div>

            <div class="properties-grid">
              <article class="property-card">
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
                  alt="Apartamento moderno"
                />
                <div class="property-card-content">
                  <h4>Apartamento moderno</h4>
                  <p>Santiago, Chile</p>
                  <strong>$75 / noche</strong>
                </div>
              </article>

              <article class="property-card">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                  alt="Casa frente al lago"
                />
                <div class="property-card-content">
                  <h4>Casa frente al lago</h4>
                  <p>Bariloche, Argentina</p>
                  <strong>$120 / noche</strong>
                </div>
              </article>

              <article class="property-card">
                <img
                  src="https://images.unsplash.com/photo-1494526585095-c41746248156"
                  alt="Loft urbano"
                />
                <div class="property-card-content">
                  <h4>Loft urbano</h4>
                  <p>Ciudad de México, México</p>
                  <strong>$90 / noche</strong>
                </div>
              </article>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}

export default App;