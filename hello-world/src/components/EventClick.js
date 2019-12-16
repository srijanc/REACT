import React from 'react'

function EventClick() {

    function clickHandler() {
        console.log("Button Click");
        
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
            {/* We don't want a function call, so we don't use parenthesis */}
        </div>
    )
}

export default EventClick