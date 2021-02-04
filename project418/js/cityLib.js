"use strict";
const books = document.getElementById("books");

(async function fetcher() {
  const res = await fetch(
    "https://elibraryrestapi.herokuapp.com/elibrary/api/book/list"
  );
  const results = await res.json();
  console.log(results);

  results.forEach((element) => {
    books.innerHTML += resultdb(element);
  });
})();

function resultdb(element) {
  return `<tr><td><strong id="counter"></td><td>${element.isbn}</td><td>${element.title}</td>
  <td>${element.overdueFee}</td><td>${element.publisher}</td><td>${element.datePublished}</td>
  <td><a href="edit.html?bookId=${element.bookId}" class="btn btn-primary btn-sm" id="${element.bookId}">Edit</a></td>
  <td><a class="btn btn-primary btn-sm" id="${element.bookId}" href="books.html" onclick="remove(${element}">Delete</a></td>
  </tr>`;
}
