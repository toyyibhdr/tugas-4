import React from 'react'
import Product from './Product'


const Dashboard = (props) => {

  return (
    <>
    <div style={{

        display: 'flex',
        gridTemplateColumns: 'auto auto',
        padding: '10px',
        margin : 'auto',
        justifyContent: 'center'

      }}>

    {
        props.children.map((value,index) =>  (
            <>
                <Product key={index} 
                nama={value.nama} 
                bahan={value.bahan} 
                warna={value.warna} 
                gambar={value.gambar}
                deskripsi={value.deskripsi}
                />
            </>
          )  
        )
    }
   

    </div>
    </>
  )
}

export default Dashboard