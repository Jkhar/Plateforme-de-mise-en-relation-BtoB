import React, { Component } from 'react'
import './Dan.css'

class DeposerAnnonce extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            AdThemes: '',
            AdUnderThemes: null
        }
    }
    handleChange(e) {
        this.setState({AdThemes: e.target.value});
      }
    

      handleSubmit = (event) => {
        event.preventDefault();
        const { AdThemes} = this.state;
        alert(`Your registration detail: \n 
        
        AdThemes: ${AdThemes}\n
        `);
      };
    
       
     
    render () {
        return (
   
<div className="container"> 
          <div className="row" >
              <div className="col-md-10 my-4 mx-auto" >
              <div className="card bg-light" >

               <div className="card-header" ><center><h1>Desposez-vous votre Annonce ! </h1></center></div>
               <div className="card-body" > 
                          
                    
       
                               <form onSubmit={this.handleSubmit}>
                                       <div  className="form-group">
                                           
                                            <label for="adtitle">  <h6>Titre d'annonce</h6> </label>
                                             <input type="text" name="adtitle" placeholder="Titre de votre Annonce......."  className="form-control " />
                                       </div>
                                       <div  className="form-group "> <label for="Selecionner la langue de l'annonce">
                                       <h6>ad language</h6>
                                   </label> <select  className="form-control" id="ccmonth">
                                       <option value="" selected disabled>--Séléctionner la langue de votre Annonce--</option>
                                       <option>Francais</option>
                                       <option>Anglais</option>
                                       
                                   </select> </div>

                                   <div  className="form-group "> <label for="AdThemes">
                                       <h6>Théme</h6>
                                   </label> <select  id="AdThemes"  onChange={this.handleChange} className="form-control" id="AdThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Insurance">Insurance</option>
                                       <option value="Financing">Financing</option>
                                       <option value="Petrol_Gas_Mines"> Petrol / Gas / Mines</option>
                                       <option value="Telecommunication">Telecommunication</option>
                                       <option value="Services">Services</option>
                                       <option value="Transport_Logistics_Storage">Transport, Logistics and Storage</option>
                                       <option value="Food_Beverage">Food and Beverage</option>
                                       <option value="Real_Estate">Real Estate</option>
                                       <option value="Training">Training</option>
                                       <option value="Projects_Partnerhip">Projects Partnerhip</option>
                                       <option value="RenewableEnergy">Renewable Energy</option>
                                       <option value="TextileIndustry">Textile Industry</option>
                                       
                                   </select> </div>

                                   {this.state.AdThemes=="Financing" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous Thémes</h6>
                                   </label> <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme --</option>
                                       <option value="Banks">Banks </option>
                                       <option value="Investment Funds">Investment Funds</option>
                                       <option value="Business Angels">Business Angels</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   {this.state.AdThemes=="Petrol_Gas_Mines" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous thémes</h6>
                                   </label> <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Exploration">Exploration /  /  / Others </option>
                                       <option value="Distribution">Distribution</option>
                                       <option value="Equipment">Equipment</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   {this.state.AdThemes=="Telecommunication" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous thémes</h6>
                                   </label> <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Manufacturing">Manufacturing</option>
                                       <option value=" Installation"> Installation</option>
                                       <option value="Turnkey Projects">Turnkey Projects</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   {this.state.AdThemes=="Services" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous thémes</h6>
                                   </label> <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Fiduciary">Fiduciary</option>
                                       <option value="Law Firm"> Law Firm</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   {this.state.AdThemes=="Transport_Logistics_Storage" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous thémes</h6>
                                   </label> <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Manufacturing">Manufacturing</option>
                                       <option value="Transport">Transport</option>
                                       <option value="Logistics">Logistics</option>
                                       <option value="Storage">Storage</option>
                                       <option value="Others">Others</option>
                                   </select> </div>}

                                   {this.state.AdThemes=="Food_Beverage" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous thémes</h6>
                                   </label> <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Producers">Producers</option>
                                       <option value="Cooperatives">Cooperatives</option>
                                       <option value="Trading Companies">Trading Companies</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   {this.state.AdThemes=="Real_Estate" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous thémes</h6>
                                   </label> <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Architect">Architect </option>
                                       <option value="Building Materials">Building Materials</option>
                                       <option value="Construction">Construction</option>
                                       <option value="Services ">Services (Guarding / Gardening…) </option>
                                       <option value="Property Management">Property Management</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   {this.state.AdThemes=="Training" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous thémes</h6>
                                   </label> <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                      
                                       <option value="Specialized Masters">Specialized Masters</option>
                                       <option value="Languages">Languages</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   
                                   {this.state.AdThemes=="RenewableEnergy" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous thémes</h6>
                                   </label> <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Manufacturing">Manufacturing</option>
                                       <option value="Installation">Installation</option>
                                       <option value="Turnkey Projects">Turnkey Projects</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   {this.state.AdThemes=="TextileIndustry" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous thémes</h6>
                                   </label> <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Manufacturing">Manufacturing</option>
                                       <option value="Distribution">Distribution</option>
        
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

       
                                   <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1"><h6>Description de l'annonce</h6></label>
                                    <textarea  
                                    class="form-control" 
                                    required name="description" 
                                     onChange={this.handleChange} 
                                      id="" placeholder="Description ....."
                                       rows="3"></textarea>
                                     </div>
                                     

                                     <form>
  <div class="form-group">
    <label for="exampleFormControlFile1"><h6>Selectionner image de l'annonce  </h6></label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
</form>

                                        <div className="form-group ">
                                          <button className="btn btn-primary  " type="submit" >Envoyer</button>
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

export default DeposerAnnonce
