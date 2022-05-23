import "./index.css";

const Modale = (props) => {
  return (
    <div
      onClick={() => {
        props.setShow(false);
      }}
      className="modale"
    >
      
     
     
    
      <img src={props.character.image} />

      
      <div className="ModaleContainer">

       <div> <h2 style={{color: "red"}}>Point me !</h2> </div><br/>
   
      <div>Name : {props.character.name}</div> <br/>
      <div>Patronus: {props.character.patronus}</div><br/>
      <div>House :  {props.character.house}</div><br/>
   
    
    
      
      

      
      </div>
    
    
    
    </div>
  );
};

export default Modale;