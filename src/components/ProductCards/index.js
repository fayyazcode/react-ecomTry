import './css/index.css'
import car from '../../assets/images/caraccessories.jpg'
import winter from '../../assets/images/winter.jpg'
import electronics from '../../assets/images/electronics.jpg'
import camera from '../../assets/images/cameraaccessories.jpg'

function Products_Card(){
    return(
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Featured Products</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      {/* <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> */}
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-pink-50 p-6 rounded-lg">
          <img class="h-50 rounded w-full object-cover object-center mb-6" src={electronics} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Electronics</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Home Appliance</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-pink-50 p-6 rounded-lg">
          <img class="h-50 rounded w-full object-cover object-center mb-6" src={winter} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Winter Wear</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Jackets & Hoodies</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-pink-50 p-6 rounded-lg">
          <img class="h-50 rounded w-full object-cover object-center mb-6" src={camera} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Camera Accessories</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Camera Lens & Bags</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-pink-50 p-6 rounded-lg">
          <img class="h-50 rounded w-full object-cover object-center mb-6" src={car} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Car Accessoreis</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Car Luxureis</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}
export default Products_Card;