import axios from "axios"

const getUser = (id) => {
    return new Promise( async(resolve,reject) => {
        const { data } = await ( axios("https://jsonplaceholder.typicode.com/users/"+id))
        resolve(data)
    })
   }

   const getPost = (id) => {
    return new Promise( async(resolve,reject) => {
        const { data } = await ( axios("https://jsonplaceholder.typicode.com/users/"+id+"/posts"))
        resolve(data.find(item => item.userId === id))
    })
   }

const getData = async (user_id) => {
   
    await getUser(user_id)
        .then(data => console.log(data))

    await getPost(user_id)
        .then(data => console.log(data))    
 
}


export default getData