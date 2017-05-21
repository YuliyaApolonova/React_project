import React from 'react'

class Contacts extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         result: '',
         nameInputErr: '',
         mailInputErr: '',
         phoneInputErr: '',
         messInputErr: ''
      }
      this.nameInput = this.nameInput.bind(this);
      this.mailInput = this.mailInput.bind(this);
      this.messInput = this.messInput.bind(this);
      this.formSubmit = this.formSubmit.bind(this);
   }
   nameInput(e){
   var nameReg = /^[a-zA-Z]+$/;
   if(!nameReg.test(e.target.value)){
      this.setState({nameInputErr: 'Only English letters!!'});
   }
   else{
      this.setState({nameInputErr: ''});
   }
}

   mailInput(e){
   var mailReg = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
   if(!mailReg.test(e.target.value)){
      this.setState({mailInputErr: 'Input correct email!'});
   }
   else{
      this.setState({mailInputErr: ''});
   }
}

   messInput(e){
   var messReg = /^.{20,}$/;
   if(!messReg.test(e.target.value)){
      this.setState({messInputErr: 'Must be > 20 symbols!'});
   }
   else{
      this.setState({messInputErr: ''});
   }
}
   formSubmit(e){

   if((this.state.nameInputErr!='')||(this.state.mailInputErr!='')||(this.state.phoneInputErr!='')||(this.state.messInputErr!='')){
      e.preventDefault();
      this.setState({result: 'Invalid data. Check it!'});
   }
   else{
      this.setState({result: 'Your form is correct!' });
   }
}
   render(){
      return(
            <div id="contacts">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-xs-12 col-md-7">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.8359291561046!2d30.450614817669607!3d50.444156663504785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce87a0bfa6d3%3A0x19327c76da170b91!2sIgnite+Ukraine!5e0!3m2!1sru!2sua!4v1474789633419"  height="450" frameBorder="0" style={{border:0, width:100+'%'}} allowFullScreen></iframe>
                     </div>
                     <div className="col-xs-12 col-md-5">
                        <h1 className="caption"> Keep in Touch </h1>
                        <div id="div-hr">
                           <hr className="hr1"/>
                              <hr className="hr2"/>
                        </div>
                        <form className="contacts-form" onSubmit={this.formSubmit}>
                           <p><input type="text" name="name" placeholder="Name" size="45" onInput={this.nameInput}/></p>
                           <p className="errorMessage">{this.state.nameInputErr}</p>
                           <p><input type="text" name="email" placeholder="E-mail" size="45" onInput={this.mailInput}/></p>
                           <p className="errorMessage">{this.state.mailInputErr}</p>
                           <p><textarea name= "message" placeholder="Your message" onInput={this.messInput}></textarea></p>
                           <p className="errorMessage">{this.state.messInputErr}</p>
                           <p> <button type="submit" > Send request</button></p>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
      )
   }
}

export default Contacts