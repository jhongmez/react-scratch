import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PropertyList } from "./components/PropertyList";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Hero />

        <SearchBar />

        <PropertyList />
      </main>
    </div>
  );
}

export default App;