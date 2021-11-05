import Slider from '../../components/Slider';
import {MyCard} from '../../components'
import Products_Card from '../../components/ProductCards';
import About_us from '../../components/About';
import Gallery from '../../components/Gallery';
function Home() {
    return (
        <div>
            {/* <h1>Home</h1> */}
            <Slider />
            <MyCard />
            <Products_Card />
            <About_us />
            <Gallery />
        </div>
    )
}

export default Home;