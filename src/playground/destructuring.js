//Object Destructuring

// const Person = {
//   name: 'Andrew',
//   age: 27,
//   location: {
//     city: 'Phidepelia',
//     temp: 18,
//   },
// }

// //destructuring object
const { name: firstName = 'Anonymous', age } = Person
const { city, temp } = Person.location

console.log(`Hello ${firstName}`)
console.log(`He is from ${city}`)

const book = {
  title: 'Ego is Enemy',
  author: 'Ryan Holiday',
  publisher: {
    // name: 'Penguin',
  },
}

const { title } = book
const { name: publisherName = 'Self Publisher' } = book.publisher

// console.log(`${title} is a good book from publiser ${publisherName}`)

//Array Destructuring

const address = ['25 Lembur Gedong Street', 'Sumedang', 'Indonesia', '116112']

const [street, city, nation, zip] = address

console.log(
  `i've used to living in ${street} ${city} city with zip code ${zip}`,
)

const item = ['Coffe (hot)', 'Rp.20k', 'Rp.50k', 'Rp.55k']

const [coffe, largeSizePrice] = item

console.log(`Harga ${coffe} ukuran large harganya ${largeSizePrice}`)
