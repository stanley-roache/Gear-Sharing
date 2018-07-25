import React from 'react'

const info = [
    "Free Borrowing - The borrowing conditions with minimal to no stings attached. Generally items are of lower value and less significance. A common examples would be clothing items that may be used for dress up parties.",         
    "Upkeep Koha - A nice zone between minimal conditions and lots of conditions. Owners are open to there items being borrowed but would like a little bit of help to upkeep the item. Common items in the middle zone may be powertools like a drill or grinder.",
    "Contact Owner - The most strict lending condition available. Generally this section for high value items. Some common examples would be machinary that could be used around home like a posthole digger."
]

const ToolTip = (props) => {
    let key
    if (props.trustframework == 'One') key = 0
    if (props.trustframework == 'Two') key = 1
    if (props.trustframework == 'Three') key = 2

    return (
        <div className='box add-gear'>
            <div>
                <p className='is-medium'>{info[key]}</p>
            </div>
        </div>
    )
}

export default ToolTip