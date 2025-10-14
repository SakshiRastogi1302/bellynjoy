import React from 'react'
import StarRatingComponent from './StarRatingComponent'
import { Link } from 'react-router-dom'

const FoodCardComponent = ({foodList}) => {
    return(
        <div className='flex justify-center flex-wrap gap-5 p-2'>
            {foodList.map((food_item) => {
                return ( 
                    <Link to={`/food/${food_item.id}`} key={food_item.id}>
                        <div className='w-72 h-96 p-2 m-5 space-y-3 rounded-lg border-2 border-[#e72929]'>
                            <img src={`/${food_item.imageUrl}`} alt={food_item.name} className='w-72 rounded-md'></img>
                            <div className='flex justify-between'>
                                <div className='flex space-x-2'>
                                    <img src={`${food_item.type==="Veg"? "/veg-icon.svg":"/non-veg-icon.svg"}`} alt={food_item.type} className='w-7 float-right'></img>
                                    <p className='text-[#e72929] font-semibold'>{food_item.name}</p>
                                </div>
                                <span>{food_item.favorite?<i className="fa-solid fa-heart text-[#e72929]"></i>:<i className="fa-solid fa-heart text-gray-400"></i>}</span>
                            </div>
                            <div className='flex justify-between'>
                                <StarRatingComponent stars={food_item.stars} size={15}/>
                            </div>
                            
                            <div className='flex justify-between'>
                                <div className='flex'>
                                    {food_item.origins.map((origin,index)=>{
                                        return <p className='mr-2 bg-gray-200 text-[9px] rounded-md p-2' key={index}>{origin}</p>
                                    })}
                                </div>
                                <p className='text-[10px] font-medium text-[#e72929] mt-2'>⏱{food_item.cookTime} min</p>
                            </div>
                            <div className='flex'>
                                {food_item.tags.map((tag,index)=>{
                                    return <div key={index} className='bg-[#e72929] text-white text-xs p-2 mr-2 rounded-md'>{tag}</div>
                                })}
                                
                            </div>
                            <div>
                                <p>{food_item.price}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )    
   
}

export default FoodCardComponent