import React, { useEffect } from 'react'

const Adsense = () => {

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, [])
    
    return (
        <ins className="adsbygoogle"
            style= {{display: 'block'}}
            data-ad-client="ca-pub-3241865431125040"
            data-ad-slot="8290866443"
            data-ad-format="auto"
            data-full-width-responsive="true">
        </ins>
    )
}

export default Adsense
