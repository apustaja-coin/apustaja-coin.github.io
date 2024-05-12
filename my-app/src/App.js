import React from 'react'
import Navbar from './components/Navbar';
import ApuFrens from './components/ApuFrens';
import About from './components/About/About';
import HowToBuy from './components/HowToBuy';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
const App = () => {
  return (
    <div>
      <Navbar />
      <ApuFrens />
      <About />
      <HowToBuy />
      <Tokenomics />
      <Roadmap />
      <Contact />
      <div>

</div>
    </div>
  )
}

export default App;