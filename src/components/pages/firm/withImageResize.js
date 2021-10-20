import React from 'react'

const withImageResize = (Component, size) => props => {
    return (
        <div>
            <Component {...props} />
        </div>
    )
}
export default withImageResize;