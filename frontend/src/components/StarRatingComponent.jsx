import React from 'react'

const StarRatingComponent = ({stars,size}) => {
  const styles = {
    width:size+'px',
    height:size+'px',
    marginRight:size/6 + 'px'
  };

  function Star({number}){
    const halfNumber = number - 0.5;
    return stars>= number? (<img src={`/star-full.svg`} style={styles} alt={number}></img>) : 
           stars>=halfNumber ? (<img src={`/star-half.svg`} style={styles} alt={number}></img>) : 
           (<img src={`/star-empty.svg`} style={styles} alt={number}></img>) 
  }

  return (
    <div className='flex'>
        {[1,2,3,4,5].map((number) => {
            return(
                <Star key={number} number={number}></Star>
            )
        })}
    </div>
  )
}

export default StarRatingComponent