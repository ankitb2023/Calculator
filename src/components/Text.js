// import React from 'react'
// import {Texted} from './Styled'
// function Text() {
//     ComponentDidMount({})
//     return (
//        <Texted>
//            <h1>Calculator</h1></Texted>
//     )
// }

// export default Text;
import React, { Component } from 'react'
import {Texted} from './Styled'
import './styled.css'
class Text extends Component {
    render() {
        return (
            <Texted><h1 className
            ="first">
                Calculator made by  <p className="demo"></p>
            </h1>
                
            </Texted>
        )
    }
}

export default Text
