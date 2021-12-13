

export const Get = async(url)=>{
    
    const token = process.env.REACT_APP_TOKEN_OBRAS

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