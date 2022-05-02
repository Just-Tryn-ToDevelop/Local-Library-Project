function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
 return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
 let borrowed = []
 let checkedIn = []
 let allBooks = []
 const status = books.filter((book) => {
  const [first] = book.borrows
  return (!first.returned) ? checkedIn.push(book) : borrowed.push(book)
  })
 allBooks.push(checkedIn)
 allBooks.push(borrowed)
 return allBooks
}

function getBorrowersForBook(book, accounts) {
 var accountArray = []
 var newAccount
accounts.forEach((account) => {
 book.borrows.map((entry) => {
   const {id, returned} = entry
   if (account.id === id) {
     newAccount = {...account, id, returned}
     accountArray.push(newAccount)
   }
 })
})
return accountArray.slice(0, 10)
}

module.exports = {
 findAuthorById,
 findBookById,
 partitionBooksByBorrowedStatus,
 getBorrowersForBook,
};
