/*------------------------------------------------------------Button Toggle----------------------------------------------*/
const button = document.getElementById('button--form')

button.addEventListener('click', toggleButtons =()=>{
const form = document.getElementById('form')
const formButton = document.getElementById('button--form')

  formButton.classList.toggle('button__animation')
  form.classList.toggle('form--container')


})


/*------------------------------------------------------Entire Logical Function-------------------------------------------------*/
const $tableBody = document.getElementById("table-body")
const $table = document.getElementById("table")


class Book{
  constructor(Title,Author,Page,Status){
  this.Title = Title;
  this.Author = Author;
  this.Page = Page;
  this.Status = Status;
  }
}

class Library{
  constructor(){
    this.books = []
  }

  addBooks(newBook){
    if(!this.isInLibrary(newBook)){
      this.books.push(newBook)
    }else{
      alert("Book already exist")
    }
  }

  isInLibrary(newBook){
    return this.books.some((book)=>book.Title === newBook.Title)

  }



 changeStatusButton(newBook){
 this.books.forEach((book)=> {
  
if(book.Title === newBook){
let index = this.books.indexOf(book)

  if(this.books[index].Status === "Not Read"){
    this.books[index].Status= "Read"
  }else{
    this.books[index].Status  = "Not Read"
  }

return this.books[index].Status
}
 }
  
)

  }

   

  changeStatus(newBook){
    if(newBook.Status === "true"){
      newBook.Status = "Read"
    }else{
      newBook.Status = "Not Read"
    }
    return newBook.Status
    }


    
    removeBook(title){
     this.books.find((book)=> {book.Title === title 
    return this.books.splice(this.books.indexOf(book),this.books.indexOf(book)+1)


    })
    }
    

}

const library = new Library()


//input
function getBookfromInput(){
  const title = document.getElementById('Title').value
  const author = document.getElementById('Author').value
  const page = document.getElementById('Pages').value
  const status = document.getElementById('Status').checked
  
 return new Book(title,author,page,status)
}


function addBook(e){
  e.preventDefault()
  const newInput = getBookfromInput()
  
  library.addBooks(newInput)
  library.changeStatus(newInput)
  render()
}


const form = document.getElementById('form')
form.onsubmit=addBook





$table.addEventListener("click", (e)=>{
  const currentTarget = e.target.parentNode.parentNode.childNodes[1];
  if(e.target.innerHTML == "Delete"){
   if(confirm(`are you sure you want to delete ${currentTarget.innerText}`)){
   library.removeBook(currentTarget.innerText)

  }
}
if(e.target.classList.contains("button--status")){
library.changeStatusButton(currentTarget.innerText)
  }
  render()
})



  let mylibrary;

function render(){
 
  $tableBody.innerHTML ="";
  library.books.forEach((book)=>{
  const htmlBook =`
    <tr>
    <td>${book.Title}</td>
    <td>${book.Author}</td>
    <td>${book.Page}</td>
    <td>${book.Status}</td>
    <td><button class="button--status">Status</button></td>
    <td><button class="button--Delete">Delete</button></td>

    <tr>`;
    
    $tableBody.insertAdjacentHTML("afterbegin", htmlBook);
  })
}


render();