import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const SearchComponent = () => {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();
  const {searchTerm} = useParams();

  const search = async() => {
    term ? navigate("/search/"+term) : navigate("/");
  }
  return (
    <div className='flex justify-center pt-5'>
        <input type='text' placeholder='Search Food' onChange={e => setTerm(e.target.value)} onKeyUp={e => e.key === 'Enter' && search()} defaultValue={searchTerm} className='bg-gray-200 rounded-l-full w-72 p-2'></input>
        <button onClick={search} className='bg-[#e72929] text-white w-20 rounded-r-full p-2 cursor-pointer hover:bg-[#ec4c4c]'>Search</button>
    </div>
  )
}

export default SearchComponent