import React, {Component} from 'react'


class HoldState extends Component{
    constructor(){
        super()
        // adsf
        this.state= {
            employee: 0  

        }
        this.handleNext = this.handleNext.bind(this)
        this.handlePrevious = this.handlePrevious.bind(this)
    }

    handleNext(){
        this.setState({
            employee: this.state.employee + 1
        })
    }

    handlePrevious(){
        this.setState({
            employee: this.state.employee - 1
        })
    }



    render() {

        return(
        <div className='App' style={{boxSizing:'border-box', backgroundColor:'black', height:'100vh', display:'flex'}} >

            {this.props.data.map((element, index) => {
                if(index === this.state.employee)
                    return (
                        <div style={{width:'100vw', display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>

                            <div style={{backgroundColor:'white', color:'black', 
                                margin:'0px', paddingTop:'15px', paddingBottom: '15px', width:'80vw', 
                                display:'flex', flexDirection:'column', alignSelf:'center',
                                }}>
                                    
                                <h1 style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', 
                                fontSize:'16px', marginRight:'5vw'}}>{element.id}/{this.props.data.length}</h1>

                                <h1 style={{
                                    display:'flex', 
                                    marginLeft:'7.5vw', 
                                    }}>Name: {element.name.first} {element.name.last}</h1>

                                <text style={{
                                    display:'flex',
                                    // marginLeft:'7.5vw',
                                    // flexDirection:'column',
                                    justifyContent:'flex-start',
                                    marginLeft: '9vw'
                                    }}>
                                    From: {element.city}
                                    {/* <br></br>
                                    Employer: {element.employer}
                                    <br></br>
                                    Title: {element.title} */}
                                </text>

                                <text style={{
                                    display:'flex',
                                    justifyContent:'flex-start',
                                    marginLeft:'9vw'
                                }}
                                >Employer: {element.employer}
                                </text>

                                <text style={{
                                    display:'flex',
                                    justifyContent:'flex-start',
                                    marginLeft:'9vw'
                                }}
                                >Title: {element.title}
                                </text>
                                
                                <p style={{
                                    display:'flex', 
                                    // flexDirection:'unset',
                                    flexDirection:'column', 
                                    justifyContent:'flex-start',
                                    marginLeft:'-50vw'
                                    }}>
                                    Favorite Movies: 
                                    <br></br>
                                    {element.favoriteMovies.map(element => {
                                        return(
                                            <li 
                                                style={{marginLeft:'62.5vw', 
                                                // flexWrap:'no-wrap', 
                                                alignSelf:'flex-start'
                                                    // justifyContent:'center'
                                                }}
                                            >
                                            {element}
                                            </li>
                                            )
                                    })}
                                </p>

                            </div>

                            <div style={{backgroundColor:'black', display:'flex', margin:'0', flexDirection:'row', justifyContent:'space-between', width:'80vw', alignSelf:'center'}}>
                                
                                <div>
                                <button
                                onClick={() => this.handlePrevious()}
                                style={{backgroundColor:'black', 
                                    color:'white',
                                    borderStyle:'none'
                                    }}
                                >Previous</button>
                                </div>
                                
                                <div>
                                    <button 
                                        style={{backgroundColor:'rgb(0, 153, 255)', 
                                        color:'white',
                                        borderRadius:'5px'
                                        }}
                                      // onClick={}
                                    >Edit</button>

                                    <button
                                       // onClick={}
                                        style={{backgroundColor:'rgb(0, 153, 255)', 
                                        color:'white',
                                        borderRadius:'5px'
                                        }}
                                    >Delete</button>

                                    <button
                                       // onClick={}
                                        style={{backgroundColor:'rgb(0, 153, 255)', 
                                        color:'white',
                                        borderRadius:'5px'
                                        }}
                                    >New</button>
                                </div>

                                <div>
                                    <button
                                        style={{backgroundColor:'black', 
                                        color:'white',
                                        borderStyle:'none',
                                        }}
                                        onClick={() => this.handleNext()}
                                    >Next</button>
                                </div>

                            </div>


                        </div>
                        )
            }
            )}

        </div>
        )
    }
}

export default HoldState