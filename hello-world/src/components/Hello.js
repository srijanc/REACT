import React from 'react'

const Hello = () => {
    // Using JSX, which is calling createElement which in turn using React library
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Srijan from JSX</h1>
    //     </div>
    // )

    // Without using JSX
    return React.createElement('div',
    {id: 'hello', className: 'dummyClass'},
    React.createElement('h1', null, "Hello Srijan from Element"))
}

export default Hello