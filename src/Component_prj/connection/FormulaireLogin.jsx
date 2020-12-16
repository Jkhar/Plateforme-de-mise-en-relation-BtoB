import React, { Component } from 'react'
import axios from 'axios'


export default class FormulaireLogin extends Component {
    constructor(props) {
        super(props) ; 
        
        this.state = { 
          email : '' ,
          password :  ''
        } ; 
    
      }
     
    
      handleinputChange = event =>{
        this.setState({
          [event.target.name] : event.target.value   
                    })
      } ; 
    
      handlformSubmit = event => {
        event.preventDefault() ; 
        const note ={
          title : this.state.title , 
          body  : this.state.body 
        }
    {/*        
        axios.post('http://localhost:3200/note/add',note)
                .then(res =>{
                  this.setState({
                    email :"" , 
                    password : ""
                  }) ; 
    
                  this.props.history.push('/') ; 
    
    
                }).catch(err => console.log(err)) ; */}
                console.log(this.state) ;
                this.props.history.push('/') ; 

      }
        render() {
            return (
                
                    <div className="container"> 
                <div className="row" >
                    <div className="col-md-10 my-4 mx-auto" >
                    <div className="card bg-light" >
    
                     <div className="card-header" >Connectez-vous ! </div>
                     <div className="card-body" > 
            
         
     <form method="post"  onSubmit={this.handlformSubmit}>
      
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Saisir votre Email </label>
        <input
        onChange={this.handleinputChange}
        value={this.state.email} 
        type="email" name="email" required class="form-control" id="" placeholder="Email"/>
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Saisir votre Passwoord </label>
        <input
        onChange={this.handleinputChange}
        value={this.state.password} 
        type="password" name="password" required class="form-control" id="" placeholder="mot de pass"/>
      </div>

    
      <div className="form-group">
          <button className="btn btn-primary" type="submit" >Connecter </button>
      </div>
    </form>
    </div> 
     </div> 
      </div> 
      </div>
    
    </div>
            )
        }
}
