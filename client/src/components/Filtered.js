import { useState } from "react"
import '../App.css';

export default function Filtered({allPosts}){
    const[filterName, setFilter] = useState('')

    const filtered_by_tags = allPosts.filter(filteredPosts => filteredPosts.tags.map((singleTags) => singleTags.name).includes(filterName))

    console.log(filtered_by_tags)
    return(
        <div>
        Filter by tags: <input className="search-filter" value={filterName} onChange={(e)=>setFilter(e.target.value)}></input>
        {filtered_by_tags.map((single_filtered_by_tags)=>{
            return <div>                      
                        <div className="filtered-result">
                        <p style={{margin:'20px'}}>Title: {single_filtered_by_tags.title}</p>
                        <p style={{margin:'20px'}}>Content: {single_filtered_by_tags.content}</p>
                        <p style={{margin:'20px'}}>Author: {single_filtered_by_tags.user.username}</p>
                        <p style={{margin:'20px'}}>Tags: {single_filtered_by_tags.tags.map((tag)=>tag.name).join(',')}</p>
                        </div>
                    </div>
        })}
        </div>
    )
}