// import React from 'react'
// import AdSense from 'react-adsense'

// export const AdsenseComponent = () => {

//         <AdSense.Google 
//             client='ca-pub-3241865431125040' 
//             slot='8290866443' 
//             style={{ display: 'block' }} 
//             format='auto' 
//             responsive='true' 
//         />
//         return (
//             <ins
//                 className="adsbygoogle"
//                 data-ad-client="ca-pub-3241865431125040"
//                 data-ad-slot="8290866443"
//                 style={{ display: "inline-block", height: 250, width: 300 }}
//             />
//         )
// }

import React from 'react';


const AdsenseComponent = () => {

   
    return (
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-3241865431125040'
          data-ad-slot='8290866443'
          data-ad-format='auto'
        />
    )
}

export default AdsenseComponent

