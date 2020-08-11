// const Person = {
//   name: 'Andrew',
//   age: 27,
//   location: {
//     city: 'Phidepelia',
//     temp: 18,
//   },
// }

// //destructuring object
// const { name: firstName = 'Anonymous', age } = Person
// const { city, temp } = Person.location

// console.log(`Hello ${firstName}`)
// console.log(`He is from ${city}`)

const book = {
  title: 'Ego is Enemy',
  author: 'Ryan Holiday',
  publisher: {
    // name: 'Penguin',
  },
}

const { title } = book
const { name: publisherName = 'Self Publisher' } = book.publisher

console.log(`${title} is a good book from publiser ${publisherName}`)
