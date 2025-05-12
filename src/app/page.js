import './HomeCard.css';

export default function Home() {

return(
  <>
  <header class="main-header">
    <div class="container">
      <h1>🎬 Movie Catalog</h1>
      <p>Discover amazing films all in one place</p>
    </div>
  </header>

  <main class="home-main">
    <div class="container center">
      <h2>Welcome</h2>
      <p>Explore our curated collection of movies, complete with ratings, reviews, and full descriptions.</p>
      <a href="/movies" class="btn-large">Go to Catalog</a>
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 Movie Catalog. All rights reserved.</p>
    </div>
  </footer>
  </>
);

}
