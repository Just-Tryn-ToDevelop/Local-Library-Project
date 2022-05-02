function findAccountById(accounts, id) {
  return accounts.find((account) => account.id.includes(id) )
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1 )
}

function getTotalNumberOfBorrows(account, books) {
  let initialValue = 0
return books.reduce((result, book) => {
    book.borrows.forEach((entry) => {
      if(entry.id === account.id)  result+=1
    })
    return result
  }, initialValue)
}

function getBooksPossessedByAccount(account, books, authors) {
  let newBook
  let checkedOut = []
  books.forEach((book) => {
    book.borrows.forEach((entry) => {
     if(entry.id == account.id && !entry.returned) {
      newBook = book
      authors.forEach((author) => {
        if (author.id === book.authorId) {
          newBook = {...book, author}
          checkedOut.push(newBook)
        }
      })
     }
    })
    
  })
  return checkedOut
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
