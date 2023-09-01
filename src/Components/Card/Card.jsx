import Icon from "../Icon/Icon"
import './Card.css'
const Card=({player ,onplay,index,gameEnd})=>{
    let icon=<Icon/>
    if(player=='X'){
        icon=<Icon name="cross"/>
    }
    else if(player=='O'){ 
 icon=<Icon  name ="circle"/>
    }
    return (
        <div className="card" onClick={()=>  !gameEnd&&player=="" &&onplay(index)}> 
           {icon}

        </div>
    )
}
 export default Card;