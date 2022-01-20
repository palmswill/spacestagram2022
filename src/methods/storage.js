const getLikedList=()=>{
let likedList = localStorage.getItem("likedList");
let parsedList=JSON.parse(likedList); 
return parsedList || []
}

const setLikedItem=(item)=>{
  let likedList=getLikedList();
  likedList.push(item);
  let strinfiedList= JSON.stringify(likedList);
  localStorage.setItem("likedList",strinfiedList);

}
const removeLikedItem=(date)=>{
  let likedList=getLikedList();
  let filteredList =likedList.filter((item)=>item.date !==date);
  let strinfiedList=JSON.stringify(filteredList);
  localStorage.setItem("likedList",strinfiedList);
}

const storage={getLikedList,setLikedItem,removeLikedItem};

export default storage;