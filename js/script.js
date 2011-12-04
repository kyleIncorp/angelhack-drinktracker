var key, value;

function writeLocalStorage() {
    localStorage.setItem("name", "Hello World!"); //saves to the database, key/value
    document.write(localStorage.getItem("name")); //Hello World!
    localStorage.removeItem("name"); //deletes the matching item from the database

}

function setLocalStorageItem(key, value) {

}
