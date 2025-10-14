import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllByTags, getAllFoodItems, getAllTags, search } from '../services/foodService';
import { setFood } from '../store/foodItemsSlice';
import FoodCardComponent from './FoodCardComponent';
import { useParams } from 'react-router-dom';
import SearchComponent from './SearchComponent';
import TagComponent from './TagComponent';
import { setTags } from '../store/foodTagsSlice';

const HomePageComponent = () => {
  const food_items = useSelector(store => store.foodItems.food_items);
  const food_tags = useSelector(store => store.foodTags.food_tags);
  const {searchTerm,tag} = useParams();
  
  const dispatch = useDispatch();

  useEffect(()=>{
    const loadTags = getAllTags();
    loadTags.then((food_tags) => {
      dispatch(setTags(food_tags))
    })
    const loadFoodItems = tag ? getAllByTags(tag) : searchTerm ? search(searchTerm) : getAllFoodItems();
    loadFoodItems.then((food_items) => {
      dispatch(setFood(food_items));
    })
  },[searchTerm,tag])


  return (
    <div>
      <SearchComponent />
      <TagComponent tags={food_tags}/>
      <FoodCardComponent foodList={food_items}></FoodCardComponent>
    </div>
  )
}

export default HomePageComponent