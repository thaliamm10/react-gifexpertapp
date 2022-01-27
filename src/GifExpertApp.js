// rafc
import React,{useState} from 'react';
import { AdCategory } from './components/AdCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['One Push']);

    // const handleAdd=()=>{
    //     setcategories(cats=>[...cats,'hh']);
    //     // categories.push('hola');
    // }
  
    return <>
        <h2>GifExpertApp</h2>
        <hr />
        {/* <button onClick={handleAdd}>Agregar +</button> */}
        <AdCategory setcategories={setcategories}/>
        <ol>
            {
                categories.map(category => (
                    <GifGrid key={category} category={category}/>
                ))
            }
        </ol>
    </>
};

