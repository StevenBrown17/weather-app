import React from 'react';
import api from './api.js';
import '../Body/Body.css';




class Quote extends React.Component{

    constructor(props){
        super(props);

        this.state={
            quote: '',
            author: ''
        }

        api.getQuote().then((res)=>{
            this.setState({
                quote: res.quote,
                author: res.author
            })
        });
        
    }



    render(){
        return(
            <div  className="quote">
                <br />
                <br />
                <br />
                <br />
                <br />
                    <i>{this.state.quote}</i>
                <br />
                <br />
                -{this.state.author}
                
            </div>


        )
    }


}

export default Quote;