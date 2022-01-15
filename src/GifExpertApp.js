import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

const GifEXpertApp = () =>{

    const[categories ,setCategories] = useState(['goku'])


    return(
        <>
            <h2>GifEXpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            
            <ol>
                {
                    categories.map(category =>{
                        return(
                            
                            <GifGrid
                                key={category}
                                category={category}
                            />

                        )
                    })
                }
            </ol>
        </>    
    )
    
}
export default GifEXpertApp