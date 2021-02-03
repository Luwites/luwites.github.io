
function bookadder(){
const booksToAdd = {
    isbn: document.querySelector("#inputISBN").value,
    title: document.querySelector("#inputTitle").value,
    overdueFee: document.querySelector("#inputOverdue").value,
    publisher: document.querySelector("#inputPublisher").value,
    datePublished: document.querySelector("#inputPubDate").value

};
// console.log(booksToAdd)
if (booksToAdd.isbn === '' || booksToAdd.title === '' || booksToAdd.overdueFee === '' || booksToAdd.publisher === '' || booksToAdd.datePublished === '') {
    alert('please fill in all fields');
}

else {
    async function add(book) {

        const result = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        const data = await result.json();
        function clear(){
            window.location = "addingbook.html";
        }
        clear();
    }
    add(booksToAdd);
}


}