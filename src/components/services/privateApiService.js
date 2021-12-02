
export const Get = async(url)=>{

    try {
        const data = await fetch(url, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 3|ruU31fAttxU0FKWmvV8pdB1GCyhQa7lNAQwBfEVb'
            }

        })
        const res = await data.json()
        return res

        
    } catch (error) {
        console.log(error)
    }


}