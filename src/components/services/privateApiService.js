/* eslint-disable no-throw-literal */


export const Get = async(url,token)=>{


    try {
        const res = await fetch(url, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }

        })


        if (!res.ok) throw {
            err: true,
            status: res.status || "00", 
            statusText: res.statusText || "Ocurrió un error"
        }
        
        const data = await res.json()
        
        return data

        
    } catch (error) {
        let message = error.statusText
        let status = error.status
        return `Error ${status}: ${message}` 
    }


}