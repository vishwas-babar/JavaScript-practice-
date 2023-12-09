function book(title, author, pages, readyet) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readyet = readyet;
    this.info = function () {
        // console.log("The " + this.title + " By " + this.author + ", " + this.pages + ", " + isBookFinished(this.readyet));
        return "The " + this.title + " By " + this.author + ", " + this.pages + ", " + isBookFinished(this.readyet);

        //it is good practice to return strings rather than printing it dirctorly in functions
    }
}


//for checking book is finished reading or not
function isBookFinished(readyet) {
    if (readyet) {
        return "Completed";
    }else{
        return "not read yet!";
    }
}

const book1 = new book("atomic habit", "james clear", 257, true);
// book1.info();
console.log(book1.info());


const book2 = new book("who will cry when you die", "robin sharma", 211, false);
// book2.info();
console.log(book2.info());




