import React from 'react'

class Component3 extends React.Component{
 constructor(props){
   super(props)
   console.log(this.props)
 }
 
 render(){
return( 
 
  <div>
    <h1>Hello, Component3</h1>
  </div>
)
}
}
export default Component3;