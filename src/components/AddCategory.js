import { useState } from "react"

const AddCategory = ({setCategories}) =>{

    const[inputValue,setInputValue] = useState('')

    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setCategories(categories => [inputValue,...categories])
       
    }
    return(
    
        <form onSubmit={handleSubmit}>
            <h2>Añadir una categoría</h2>
            <input
                type="text" 
                id="txt_category"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>

    )
}

export default AddCategory