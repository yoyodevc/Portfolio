
import Header from "./components/Pages/Header";
import Hero from "./components/Pages/Hero";
import AboutMe from "./components/Pages/AboutMe";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Hero />
        <AboutMe />
      </main>
    </div>
  );
}

export default App;