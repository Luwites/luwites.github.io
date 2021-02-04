
window.onload = async function remove(id){
    const resp = await fetch(`https://elibraryrestapi.herokuapp.com/elibrary/api/book/delete/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
       alert('The selected book is removed from the list');
       window.location = "books.html";
    }).catch(err => {
      console.log(err)
    });
}

