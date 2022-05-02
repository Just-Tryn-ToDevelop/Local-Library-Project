function getTotalBooksCount(books) {
  initialValue = 0
  return books.reduce((result, book) => {
    result += 1
    return result
  }, initialValue)
}

function getTotalAccountsCount(accounts) {
  initialValue = 0
  return accounts.reduce((result, account) => {
    result += 1
    return result
  }, initialValue)
}
// helper function for getBooksBorrowedCount function --->
function buildFirstEntries(books) {
  let firstEntries = books.map((book) => {
    const [first] = book.borrows;
    return first;
  });
  return firstEntries;
}
// ^^^ helper function for getBooksBorrowedCount function ^^^
function getBooksBorrowedCount(books) {
  const firstEntries = buildFirstEntries(books)
  let initialValue = 0
 return firstEntries.reduce((result, entry) => {
   if (!entry.returned) result += 1
   return result
  }, initialValue)
}

function getMostCommonGenres(books) {
   const genreList = {}
  const finalArray = []
  const genres = books.map((book) => book.genre)
  genres.forEach((genre) => {
    genreList[genre] = 1 + (genreList[genre] || 0)
  })
  for (let key in genreList) {
    const value = genreList[key]
   const genreObject = {name:key, count:value}
   finalArray.push(genreObject)
  }
  finalArray.sort((entryA, entryB) => entryB.count - entryA.count)
  return finalArray.slice(0, 5)
}

function getMostPopularBooks(books) {
  let finalArray = []
  books.forEach((book) => {
    const borrows = book.borrows
    const borrowObject = {name:book.title, count:borrows.length}
    finalArray.push(borrowObject)
  })
  finalArray.sort((entryA, entryB) => entryB.count - entryA.count)
  return finalArray.slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  let fullName
  let listObject = {}
  const listArray = books.map((book) => {
    const id = book.authorId
    const borrows = book.borrows
    let total = borrows.length
     authors.find((author) => {
      if (author.id === id) fullName = `${author.name.first} ${author.name.last}` 
    })
     return listObject = {name:fullName, count:total}
  })
   listArray.sort((entryA, entryB) => entryB.count - entryA.count)
   return listArray.slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
