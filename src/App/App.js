import Footer from "../Footer/Footer"
import Join from "../Join/Join"
import Landing from "../Landing/Landing"
import Pricing from "../Pricing/Pricing"
import Profits from "../Profits/Profits"
import bardLines from '../Images/bard_lines.png'

function App() {
  return (
    <div className="bg-[#000000] w-full pt-16 bg-no-repeat bg-top bg-cover" style={{backgroundImage: `url(${bardLines})`}}>
      <Landing />
      <Profits />
      <Pricing />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
