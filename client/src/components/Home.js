import { useEffect } from "react"

export default function Home({currentUser}){
    useEffect(()=>{
        fetch(`/posts`)
        .then((r)=>r.json())
        .then()
    },[])

    return(
        <div>
            <h1>Create your own Blog today!</h1>
        </div>
    )
}