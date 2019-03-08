module.exports = {
    events: {
        GREET: 'greet',
        FILESAVED: 'filesaved',
        FILEOPENED: 'fileopened'
    }
}

//it`s better to use GREET as an object an define it
// , instead of defining it directly as an String
//and it also makes it harder to make a mistake