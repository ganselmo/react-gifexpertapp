import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

const GifExpertApp = ()=>
{

 
    const [categories, setCategories] = useState(["One punch"])


    // const handleAdd = (el)=>{
    //     setCategories([...categories,1])
    // } 
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            
            {/* <button onClick={handleAdd}> Agregar </button> */}



            <ol>
                {
                    categories.map((category)=> 
                        <GifGrid 
                            key= {category}
                            category = {category}/> 
                    )
                }
            </ol>
        </>
        ); 
}

export default GifExpertApp;