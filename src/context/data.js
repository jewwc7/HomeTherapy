
const massageArr = [
  {  
    title:'Swedish',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque volutpat sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum felis sit amet hendrerit lacinia. Duis sagittis rutrum nulla, vel vehicula libero pretium a. Nunc maximus libero sed odio feugiat, vel lobortis justo laoreet.' ,
    prices:[
      {
        30:60 ,
        60:90,
        90:120 ,
        120:150 ,
      }
    ],
    enhancements:[],
    technique: ['Effleurage consists of long sweeping strokes around the massage area', 'Petrissage is the technique that involves kneading the muscles', 'Tapotement technique uses the side of your hands to loosen the muscles in a fast tapping motion'],
    benefits:['Muscle Relaxation', 'Injury Prevention', 'Heals Joint Pain', 'Improved Blood Circulation'],
  },
  {  
  title:'Deep Tissue',
  description:'Duis pulvinar lobortis viverra. Sed et venenatis mauris, sollicitudin semper justo. Nam rutrum tortor blandit justo ultrices, sit amet efficitur turpis elementum. Vivamus lacinia est justo, nec porta urna imperdiet ac. Integer enim massa, commodo ornare risus ut, mollis cursus urna. Suspendisse mattis urna ut massa laoreet lobortis. Sed placerat facilisis sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
  prices:[
    {
      30:60 ,
      60:90,
      90:120 ,
      120:150 ,
    }
  ],
  enhancements:[],
  technique: ['Cycles of pressure are used with this technique to ease the source of pain. Deep breathing is useful during this type of treatment','Myofacial Release method uses gentle pressure in areas that are pinpointed by the therapist','Active Release Technique(A.R.T) utilize their hands to assess the development of muscles, nerves, tendons, ligaments, sash, and finally, the composition of these body parts '],
  benefits:['Reduces Chronic Pain', 'Reduces Muscle Aches', 'Reduces Stiffness', 'Breaks up Scar Tissue'],
  restrictions:[
    '30 minutes has to be a targeted massage'
   ]
  },
  {  
  title:'Sports Massage',
  description:'Duis pulvinar lobortis viverra. Sed et venenatis mauris,  Nam rutrum tortor blandit justo ultrices, sit amet efficitur turpis elementum. Vivamus lacinia est justo, nec porta urna imperdiet ac. Integer enim massa, commodo ornare risus ut, mollis cursus urna. Suspendisse mattis urna ut massa laoreet lobortis. Sed placerat facilisis sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
  prices:[
    {
      90:120 ,
      120:150 ,
    },
    
  ],
  enhancements:['Advanced Muscle Therapy', 'Muscle Gun Therapy', 'Targeted STretching'],
  restrictions:[
    '30 minutes has to be a targeted massage'
  ],
  technique: ['Effleurage consists of long sweeping strokes around the massage area', 'Kneading in a sports massage consists of lifting, squeezing and moving tissues', 'Wringing is a manipulation used commonly in a sports massage where tissues are lifted away from the bone and pushed from side to side as the hands move up and down. The alternate squeezing and releasing action of the hands on the tissue increases circulation to an area, removes waste products and brings oxygen and nutrients to the area, improving tissue condition'],
  benefits:['Not only For Athletes!', 'Reduces Delayed Onset Muscle Soreness(DOMS)', 'Helps Muscle Recovery']
  },
  {  
    title:'Thai Massaage',
    description:'Duis pulvinar lobortis viverra. Sed et venenatis mauris, blandit justo ultrices, sit amet efficitur turpis elementum. Vivamus lacinia est justo, nec porta urna imperdiet ac. Integer enim massa, commodo ornare risus ut, mollis cursus urna. Suspendisse mattis urna ut massa laoreet lobortis. Sed placerat facilisis sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
    prices:[
      {
        60:90,
        90:120 ,
        120:150 ,
      },
      
    ],
    enhancements:['Advanced Muscle Therapy', 'Muscle Gun Therapy', 'Targeted STretching'],
    restrictions:[
      '60 minutes has to be a targeted massage'
    ],
    technique: ['Effleurage consists of long sweeping strokes around the massage area', 'Kneading in a sports massage consists of lifting, squeezing and moving tissues', 'Wringing is a manipulation used commonly in a sports massage where tissues are lifted away from the bone and pushed from side to side as the hands move up and down. The alternate squeezing and releasing action of the hands on the tissue increases circulation to an area, removes waste products and brings oxygen and nutrients to the area, improving tissue condition'],
    benefits:['Not only For Athletes!', 'Reduces Delayed Onset Muscle Soreness(DOMS)', 'Helps Muscle Recovery']
    }
]

const data = {
  massageArr,
}
export default data;