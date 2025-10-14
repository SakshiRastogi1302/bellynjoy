import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getById } from '../services/foodService';
import StarRatingComponent from './StarRatingComponent';
import TagComponent from './TagComponent';

const FoodPageComponent = () => {
  const [food, setFood] = useState({});
  const {id} = useParams();

  useEffect(()=>{
    getById(id).then((foodItem) => setFood(foodItem));
  },[id]);


  return (
    <div>
      {food && 
        <div className='flex justify-center space-x-10 mt-24'>
          <img src={`/${food.imageUrl}`} alt={food.name} className='w-[800px] h-[450px] rounded-2xl'></img>
          <div className='mt-16 space-y-2'>
            <div className='w-[500px] flex justify-between items-center'>
              <span className='text-2xl'>{food.name}</span>
              <span>{food.favorite?<i className="fa-solid fa-heart text-[#e72929]"></i>:<i className="fa-solid fa-heart text-gray-400"></i>}</span>
            </div>
            <StarRatingComponent stars={food.stars} size={15}/>
            <div className='flex space-x-4'>
              {food.origins?.map((origin) => <p key={origin} className='mr-2 bg-gray-200 text-[9px] rounded-md p-2'>{origin}</p>)}
            </div>
            {food.tags && <TagComponent tags={food.tags.map((tag) => ({name:tag}))} forFoodPage={true}/>}
              <p>Time to cook about {food.cookTime} minutes</p>
              <div>
                <span className='text-2xl text-gray-400'>Price :- </span>
                <span className='text-2xl text-green-600'>{food.price}</span>
              </div>
              <button className='w-full bg-red-600 hover:bg-red-500 text-white rounded-full p-2'>Add To Cart</button>
          </div>
      </div>}
    </div>
  )
}

export default FoodPageComponent