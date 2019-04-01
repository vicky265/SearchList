

import React,{Component} from 'react';
//const userList = require('./userlist.json')
class SearchInputComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            searchValue:'',
            userList:[],
            filteredUserList:[]
        }
    }
    componentDidMount (){
        fetch('http://www.mocky.io/v2/5ca233833300004d00d33f17')
        .then(response =>
            response =response.json()
        ).then(
            data=>{
                console.log(data);
                this.setState({
                    userList:data
                })
            }
        )
        console.log(this.state.userList)
    }
    handleChange=(event)=>{
        this.setState({
            searchValue:event.target.value
        })
        
    }
    searchHandler=()=>{
        let filteredUserList='';
     { this.state.userList && this.state.userList.map((list,index)=>{
      if( list.name === this.state.searchValue )
         filteredUserList = list;
        }
        )
        console.log(filteredUserList)
    }
}
    
    render(){
        return(
            <div>
                <input type="text" value={this.state.searchValue} onChange={this.handleChange} name="search"/>
                <button onClick={this.searchHandler}>search</button>
            </div>
        )
    }
}
export default  SearchInputComponent;
