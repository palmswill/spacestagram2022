const getLikedList=()=>{
let likedList = localStorage.getItem("likedList");
let parsedList=JSON.parse(likedList); 
return parsedList || []
}

const setLikedList=(date)=>{
  let likedList=getLikedList();
  likedList.push({date:date});
  let strinfiedList= JSON.stringify(likedList);
  localStorage.setItem("likedList",strinfiedList);

}

const storage={getLikedList,setLikedList};

export default storage;