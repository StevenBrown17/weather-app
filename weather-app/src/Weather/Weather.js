import React from "react";
import api from './api.js';
import './Weather.css';


//code from http://codepen.io/joshbader/pen/EjXgqr//
const Lightrain=()=>(
  <div className="icon sun-shower">
    <div className="cloud"></div>
    <div className="sun">
      <div className="rays"></div>
    </div>
    <div className="rain"></div>
  </div>
);
const Thunder=()=>(
  <div className="icon thunder-storm">
    <div className="cloud"></div>
    <div className="lightning">
      <div className="bolt"></div>
      <div className="bolt"></div>
    </div>
  </div>
);
const Cloudy=()=>(
  <div className="icon cloudy">
    <div className="cloud"></div>
    <div className="cloud"></div>
  </div>
)
const Snow=()=>(
  <div className="icon flurries">
    <div className="cloud"></div>
    <div className="snow">
      <div className="flake"></div>
      <div className="flake"></div>
    </div>
  </div>
)
const Sunny=()=>(
  <div className="icon sunny">
    <div className="sun">
      <div className="rays"></div>
    </div>
  </div>
);
const Rain=()=>(
  <div className="icon rainy">
    <div className="cloud"></div>
    <div className="rain"></div>
  </div>
);


class Weather extends React.Component {

  constructor(props){
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.setIcon = this.setIcon.bind(this);

    this.state={
      city: '',
      temp: '',
      cond: '',
      value: '',
      id: 1,
      icon: []
    } 
  }//constructor

  onChange(event){
        this.setState({
            value: event.target.value
        });
    }

    onEnter(event){
        if(event.keyCode === 13){
            this.onSubmit();
        }
    }

  onSubmit(){

      //this.props.submitAction(this.state);

      api.getWeather(this.state.value).then((res)=>{
      this.setState({
        city: res.name,
        temp: res.main.temp,
        cond: res.weather[0].description,
        id: res.weather[0].id,
      })
    });

    
    this.setState({value:''});
    setTimeout(() => {
      this.setIcon();
    }, 500);
    
  }

  setIcon(){
    let i = this.state.id;

    if(i===1){
      this.setState({icon:<div>IMAGE UNAVAILABLE</div>})
     }else if(i<=300){
      this.setState({icon:<Thunder/>})
    }else if(i<500){
      this.setState({icon:<Rain/>})
    }else if(i===500){
      this.setState({icon:<Lightrain/>})
    }else if(i<600){
      this.setState({icon:<Rain/>})
    }else if(i<700){
      this.setState({icon:<Snow/>})
    }else if(i<800){
      this.setState({icon:<Cloudy/>})
    }else if(i<803){
      this.setState({icon:<Sunny/>})
    }else if(i<900){
      this.setState({icon:<Cloudy/>})
    }else {
      this.setState({icon:<div>IMAGE UNAVAILABLE</div>})
    }
    

  }
  



  render(){
    return(

      <div>
        <h1>{this.state.city}</h1>
        <h2>Temp: {this.state.temp}°</h2>
        <h2>Conditions: {this.state.cond}</h2>

        <div className="animatedWeather">{this.state.icon}</div>

        <br/>
        <input 
        className="input" 
        placeholder="  ZIP"
        type="text" 
        size="5"
        onChange={this.onChange} 
        onKeyDown={this.onEnter} 
        value={this.state.value}
        />
        <br />
        <br />
        <button className="submitButton" onClick={this.onSubmit}>Submit</button>

      </div>

    );

  }




}



export default Weather