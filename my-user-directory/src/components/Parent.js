import {Component} from 'react'
import {data} from './data'
import HoldState from './HoldState'



class Parent extends Component{
    render(){
        return(
            <div className="App" style={{marginTop:'0', marginBottom:'0'}}>
                <HoldState data={data}
                // asdf
                />                
            </div>
        )
    }
}


export default Parent