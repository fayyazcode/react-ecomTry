import baby from '../../assets/images/babycloth.png'
import shirt from '../../assets/images/shirt.jpg'
import pants from '../../assets/images/pants.jfif'
import phone from '../../assets/images/phone.jfif'
function Shop() {
    return (
        <div>
            <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={shirt} />
              </a>
              <div className="mt-4">
                {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
                <h2 className="text-gray-900 title-font text-lg font-medium">Shirts</h2>
                <p className="mt-1">Rs : 00.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={baby}/>
              </a>
              <div className="mt-4">
                {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
                <h2 className="text-gray-900 title-font text-lg font-medium">Kids Wear</h2>
                <p className="mt-1">Rs : 00.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={phone}/>
              </a>
              <div className="mt-4">
                {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
                <h2 className="text-gray-900 title-font text-lg font-medium">Phone</h2>
                <p className="mt-1">Rs : 00.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={pants}/>
              </a>
              <div className="mt-4">
                {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
                <h2 className="text-gray-900 title-font text-lg font-medium">Pants</h2>
                <p className="mt-1">Rs : 00.00</p>
              </div>
            </div>
           
          </div>
        </div>
        
      </section>
        </div>
    )
}

export default Shop;