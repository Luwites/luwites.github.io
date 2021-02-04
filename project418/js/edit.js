let id = location.search.split("?bookId=").slice(1);

window.onload= async function update() {
  const addForm = document.getElementById("addForm");
  addForm.addEventListener("submit", function (element) {
    element.preventDefault();
    editor(element);
  });
  const res = await fetch(
    "https://elibraryrestapi.herokuapp.com/elibrary/api/book/list"
  );
  const data = await res.json();

  for (let i = 0; i < data.length; i++) {
    if (data[i].bookId == id) {
      console.log(data[i]);
      document.getElementById("inputISBN").value = data[i].isbn;
      document.getElementById("inputTitle").value = data[i].title;
      document.getElementById("inputOverdue").value = data[i].overdueFee;
      document.getElementById("inputPublisher").value = data[i].publisher;
      document.getElementById("inputPubDate").value = data[i].datePublished;
    }
  }

 
};


async function editor(book) {
  book = id;
  const response = await fetch(
    `https://elibraryrestapi.herokuapp.com/elibrary/api/book/update/${book}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isbn: document.getElementById("inputISBN").value,
        title: document.getElementById("inputTitle").value,
        overdueFee: document.getElementById("inputOverdue").value,
        publisher: document.getElementById("inputPublisher").value,
        datePublished: document.getElementById("inputPubDate").value,
      }),
    }
  );
  alert("Book details updated successfully!")
  window.location = "books.html";
}