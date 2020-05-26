import React, {Component} from 'react'
import api from './api'

class Listar extends Component{

    state={
        pagamentos: [],        
    }

    async componentDidMount(){
        const response = await api.get('') 
        console.log(response.data);
        
        this.setState({ pagamentos: response.data})
    }

    render(){
        return(<div> <h1>teste</h1></div>)
    }
}


export default Listar