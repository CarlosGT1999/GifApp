import { useState} from "react"
import useFetchGif from "../hooks/useFetchGif"

import GifGridItem from "./GifGridItem"


const GifGrid = ({category}) =>{

    const [images,setImages] = useState([])

    const {data,loading} = useFetchGif(category)

 
    return (
        <>
        <h3> {category}</h3>
        { loading && <p>Loading...</p>  }
        <div className="card-grid">
            {
                data.map((img) =>( 
                    <GifGridItem 
                        key={img.id} 
                        img ={img}
                    />

                    ))
         

            }   
 
        </div>
        </>
        
    )
}

export default GifGrid