import React from 'react'

// class FRInput extends Component {
//   render() {
//     return (
//       <div>
//         <input></input>
//       </div>
//     )
//   }
// }
const FRInput = React.forwardRef((props, ref) => {
    return(
        <div>
            <input type = " text" ref = {ref}></input>
        </div>
    )
})
export default FRInput
