import productos from "./data"

export const pedirDatos = () => {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
               resolve(productos)
        }, 1500)
    })
    
}

// pedirDatos(true)
// .then((resp) => {
//     setItems(resp)
//     setLoading(false)
// })
// .catch((error) => {
//     console.log("error, ", error)
//     setLoading(false)
// })
// .finally(() => {
//     setLoading(false)
// })

