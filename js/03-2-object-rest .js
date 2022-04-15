console.log('-- 03-2');

//* Деструктуризация 
let playlist = {
  nameList: 'My List',
  rating: 4,
  tracks:['name1', ' name2', 'name3'],
  trackCount:3,
}
let { nameList, rating, tracks, trackCount } = playlist;
nameList = 'mYY list';
console.log(nameList);