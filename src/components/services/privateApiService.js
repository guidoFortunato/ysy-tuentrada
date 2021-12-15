

export const Get = async(url)=>{
    
    const token = '3|ruU31fAttxU0FKWmvV8pdB1GCyhQa7lNAQwBfEVb'

    try {
        const data = await fetch(url, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }

        })
        const res = await data.json()
        return res

        
    } catch (error) {
        console.log(error)
    }


}