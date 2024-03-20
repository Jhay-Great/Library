const data = [
    {id: 123, collection: 'frontend', name: 'HTML & CSS for Beginners'},
    {id: 129, collection: 'frontend', name: 'Eloquent Javascript'},
    {id: 143, collection: 'backend', name: 'Ultimate Nodejs and MongoDB guide'},
    {id: 133, collection: 'programming', name: 'Clean codes'},
    // {id: 133, collection: 'backend', name: 'Javascript OOP'},
];

export default data;

// import filter from './src/helpers/filter';

// // const set = data.map(d => {
// //     return new Set(d.collection)
// // });
// // console.log(set);

// // const aa = [1,2,3,3,3,2,4,5];
// // let count = 0;
// // for (let i = 0; i < aa.length; i++) {

// // }

// // const b = new Set(aa);
// // console.log(new Set(aa))
// // console.log(b)

// // const ao = [{a: 1, bc: 'cc'}, {a: 2, bc: 'cc'}, {a:3, bc: 'd'}];
// // console.log(new Set(ao))

// // import filter from './src/helpers/filter'

// const database = (filter(data))

// const getCount = function(array, name) {
//     const list = array.filter(arr => arr.collection === name);
//     return list.length
// }
// console.log(getCount(data, filter(data)))

// // const dynamicCount = function(array, nameArray) {
// //     // console.log(array, nameArray)
// //     // const list = array.filter(arr => {
// //     //     console.log(arr.collection === nameArray.map(name => name.collection))

// //     // })

    
// //     // const data = nameArray.map(arr => arr);
// //     // console.log(data)

// //     // for (let i = 0; i < array.length; i++) {
// //     //     for (let j = 0; j < nameArray.length; j++) {
// //     //         if (array[i].collection === nameArray[j].collection) {
// //     //             console.log(array[i]);
// //     //         }
// //     //     }
// //     //     // if (array[i].collection === nameArray.collection) {
// //     //     //     console.log(array[i])

// //     //     // }
// //     //     // console.log(array[i].collection, nameArray.collection)

// //     // }
// // }

// // dynamicCount(data, filter(data))