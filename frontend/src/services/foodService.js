import { sample_foods, sample_tags } from "../utils/data"

export const getAllFoodItems = async() => sample_foods;

export const search = async (searchTerm) => sample_foods.filter((items) => items.name.toLowerCase().includes(searchTerm.toLowerCase()));

export const getAllTags = async() => sample_tags;

export const getAllByTags = async(tag) => {
    if(tag==="All") return getAllFoodItems();
    return sample_foods.filter((items) => items.tags?.includes(tag));
}

export const getById = async(foodId) => sample_foods.find((items) => items.id === foodId); 