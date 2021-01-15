import {useState} from 'react'


function Page1(){
    const [contador, setContador] =useState(0);
    
    function adicionaCont(){
        setContador(contador + 1);
    }
    return(
        <div> 
            <h1>Pagina 1 - Contador reatio Button</h1>
            <h2>{contador}</h2>
            <button onClick={adicionaCont}>Click here!</button>   
         </div>
    )
}

export default Page1;