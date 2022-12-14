import Body from "./components/body.js"
import Portrait from "./components/portrait.js"
import Footer from "./components/footer.js"
import './App.css';

function App() {
  return (
    <div className="page">
      <Portrait />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
