export const getData = async () =>{
    const res = await fetch('https://api-with-mongo.herokuapp.com/api/notes')
    .then(res => res.json())
    .then(data => data)
}