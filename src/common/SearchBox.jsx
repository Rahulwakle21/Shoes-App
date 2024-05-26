import React from 'react'

const SearchBox = ({para,icon,style, style2 }) => {
    return (
        <div>
            <div style={style}>
                <div className='ms-3 mt-2'>{para}</div>
                <div className='me-3 mt-2' style={style2}>{icon}</div>
            </div>
        </div>
    )
}

export default SearchBox
