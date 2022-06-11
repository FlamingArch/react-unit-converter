import React, { useState } from 'react'

const Rail = (props) => {
    const [selected, setselected] = useState(0);

    return (
        <div className="rail">
            <div className="flex">
                {props.children}
            </div>
        </div>
    )
}

export default Rail