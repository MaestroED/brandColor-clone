import React from 'react'

function Copied({color}) {
    return (
        <div className="copied" style={{ '--bgColor': `#${color}` }} >
            Copied #{color}
        </div>
    )
}

export default Copied
