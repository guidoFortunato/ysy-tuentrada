import React from 'react'
import AdSense from 'react-adsense'

const AdComponent = () => {
    
    return (        
        <AdSense.Google
            client='ca-pub-3241865431125040'
            slot='8290866443'
            style={{ display: 'block' }}
            format='auto'
            responsive='true'       
            
        />
    )
}

export default AdComponent
