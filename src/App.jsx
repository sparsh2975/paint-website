import { useEffect, useState } from 'react'
import Loader from './components/Loader.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Products from './components/Products.jsx'
import InventoryDashboard from './components/InventoryDashboard.jsx'
import BuyList from './components/BuyList.jsx'
import Features from './components/Features.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { initialProducts } from './data/products.js'
import { initialPurchases } from './data/purchases.js'

export default function App() {
  const [loading, setLoading] = useState(true)
  // Product/inventory state lives here so both the storefront cards and the
  // admin dashboard always read and write the same data.
  const [products, setProducts] = useState(initialProducts)
  // Purchase ledger — what HR Enterprises paid the distributor, kept separate
  // from retail pricing/stock above.
  const [purchases, setPurchases] = useState(initialPurchases)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader show={loading} />
      <Navbar />
      <main>
        <Hero />
        <Products products={products} />
        <InventoryDashboard products={products} setProducts={setProducts} />
        <BuyList purchases={purchases} setPurchases={setPurchases} />
        <Features />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
