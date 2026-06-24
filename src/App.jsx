import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import Navbar from './components/Navbar'
import TodaysOffer from './pages/TodaysOffer'
import StoreLocator from './pages/StoreLocator'
import Franchies from './pages/Franchies'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IcecreamDetail from './components/IcecreamDetailPage'
import Login from './components/login'

function App() {

  const products = [
  {
    id: 1,
    name: "Vanilla Delight",
    ingreat: "Creamy Vanilla",
    price: 99,
    image: "https://images.unsplash.com/photo-1561845730-208ad5910553?w=800"
  },
  {
  id: 2,
  name: "Chocolate Heaven",
  ingreat: "Rich Chocolate",
  price: 119,
  image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800"
},
  {
    id: 3,
    name: "Strawberry Bliss",
    ingreat: "Fresh Strawberry",
    price: 109,
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg"
  },
  {
    id: 4,
    name: "Mango Magic",
    ingreat: "Alphonso Mango",
    price: 129,
    image: "https://images.pexels.com/photos/3631/summer-dessert-sweet-ice-cream.jpg"
  },
  {
    id: 5,
    name: "Butterscotch Crunch",
    ingreat: "Crunchy Caramel Bits",
    price: 119,
    image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg"
  },
  {
  id: 6,
  name: "Black Currant Dream",
  ingreat: "Black Currant Flavor",
  price: 139,
  image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800"
},
  {
    id: 7,
    name: "Pista Royale",
    ingreat: "Premium Pistachio",
    price: 149,
    image: "https://images.pexels.com/photos/461430/pexels-photo-461430.jpeg"
  },
  {
    id: 8,
    name: "Kesar Kulfi",
    ingreat: "Saffron & Milk",
    price: 159,
    image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg"
  },
  {
   id: 9,
   name: "Cookie & Cream",
   ingreat: "Chocolate Cookies",
   price: 149,
   image: "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?w=800"
   },
  {
  id: 10,
  name: "Rainbow Scoop",
  ingreat: "Mixed Fruit Flavors",
  price: 169,
  image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=800"
},
  {
    id: 11,
    name: "Blueberry Blast",
    ingreat: "Fresh Blueberries",
    price: 179,
    image: "https://images.pexels.com/photos/8382/pexels-photo.jpg"
  },
  {
    id: 12,
    name: "Mint Choco Chip",
    ingreat: "Mint & Chocolate Chips",
    price: 159,
    image: "https://images.pexels.com/photos/1352245/pexels-photo-1352245.jpeg"
  },
  {
  id: 13,
  name: "Red Velvet Scoop",
  ingreat: "Red Velvet Flavor",
  price: 189,
  image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg"
},
  {
    id: 14,
    name: "Caramel Swirl",
    ingreat: "Creamy Caramel",
    price: 169,
    image: "https://images.pexels.com/photos/4109996/pexels-photo-4109996.jpeg"
  },
  {
    id: 15,
    name: "Coffee Crunch",
    ingreat: "Coffee Beans & Cream",
    price: 199,
    image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg"
  },
  {
    id: 16,
    name: "Fruit Fiesta",
    ingreat: "Mixed Fruit Delight",
    price: 149,
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800"
  },
 {
  id: 17,
  name: "Oreo Madness",
  ingreat: "Oreo Cookies & Cream",
  price: 189,
  image: "https://images.unsplash.com/photo-1514849302-984523450cf4?w=800"
},
  {
  id: 18,
  name: "Hazelnut Heaven",
  ingreat: "Hazelnut & Cream",
  price: 219,
  image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=800"
},
  {
    id: 19,
    name: "Belgian Chocolate",
    ingreat: "Premium Belgian Chocolate",
    price: 249,
    image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg"
  },
  {
  id: 20,
  name: "Royal Rajbhog",
  ingreat: "Dry Fruits & Saffron",
  price: 229,
  image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800"
}
];

  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Products products={products}></Products>}></Route>

        <Route path='/offer' element={<TodaysOffer />}> </Route>

        <Route path='/franchise' element={<Franchies />} />

        <Route path='/store-loc' element={<StoreLocator />}></Route>
        {/* <Franchies /> */}

        <Route path='/details/:ID' element={<IcecreamDetail  products={products} />}></Route>

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App