import {useState} from 'react'
import Tombol from './Tombol'

const styleProduct = {
    
}

const Product = (props) => {
    console.log(props.deskripsi)
    const [warna, setWarna] = useState(true) 
    const [deskripsi, setDeskripsi] = useState(true) 

  return (
    <>
    <div style={{

color : 'black',
backgroundColor : 'pink',
width : '250px',
padding : '15px',
textAlign : 'center',
border : '10px solid white',
borderRadius : '20px'
}}>
    <img src={props.gambar} 
                style={{
                    width : '210px',
                    height : '210px'
                }} />

        <p>{props.nama}</p>
        <p>{props.bahan}</p>
        <p>{props.warna}</p>
        <p>{!deskripsi && props.deskripsi}</p>

        <Tombol handleClick = {() => setWarna(!warna)} style={{background : warna?'pink' : 'skyblue', padding: 10}}>{warna?"Like": "unlike"}</Tombol>
        <Tombol handleClick = {() => setDeskripsi(!deskripsi)} style={{background : deskripsi?'pink' : 'skyblue', padding: 10}}>{deskripsi?"Description" : "hide"}</Tombol>

    </div>
    </>
  )
}

export default Product