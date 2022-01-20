import React,{useEffect,useState} from 'react';
import storage from '../methods/storage'
import Media from '../components/mainCard/Media';

const Likepage = () => {
  const [likedList,setLikedList]=useState([])



  useEffect(() => {
   setLikedList(storage.getLikedList());
  }, []);
  return (
    <div className="gallery">
      <div class="gallery-container flex">
        {likedList.map((item,index)=>{
          return (
            <div key={item.date+index}><Media type={item.type }src={item.url} alt={item.date}/></div>
          )

        })}
      </div>
      
    </div>
  );
}

export default Likepage;
