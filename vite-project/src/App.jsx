import React from 'react'
import Dashboard from './components/Dashboard'
import Product from './components/Product'


const App = () => {

  const product = [
    {
      nama : "Sneakers Converse CTAS",
      bahan : "Canvas",
      gambar : "https://www.converse.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/2/02-CONVERSE-FFSSBCONA-CONA03576C-Yellow.jpg",
      warna : "Yellow",
      deskripsi : "Produk Original"
     },
     {
      nama : "Converse CTAS Construct Colorblock",
      bahan : "Canvas",
      gambar : "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA03472C-Grey.jpg",
      warna : "Grey",
      deskripsi : "Produk Original"
     },
     {
      nama : "Converse Chuck Taylor All Star",
      bahan : "Canvas",
      gambar : "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCON0-CON135251C-Black.jpg",
      warna : "Black",
      deskripsi : "Produk Original"
     }
  ]

  return (
    <>
   <Dashboard>{product}</Dashboard>   
    </>
  )
}

export default App