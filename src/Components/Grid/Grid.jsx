import { useState } from "react";
import Card from "../Card/Card";
import IsWinner from "../../helpers/CheckWinner";
import './Grid.css'
const Grid=({noOfCards})=>{
    const [board,setboard]=useState(Array(noOfCards).fill(""));
    const[turn,setTurn]=useState(true)// true:0 , false:X ki turn hai
    const[winner,setwinner]=useState(null);
    const play=(index)=>{
      if(turn==true){
        board[index]="O";
      }
      else{
        board[index]="X";
      }
      
      const win=IsWinner(board,turn?"O":"X");
      if(win){
        setwinner(win);
      }

      setboard([... board]);
      setTurn(!turn);
    }
    const reset=()=>{
      setTurn(true);
      setwinner(null);
      setboard(Array(noOfCards).fill(""));
    }
   return(
  <div className="Grid-Wrapper">
    <h1 className="header "> Tic-Tac-Game   </h1>
  
    {

      winner &&(  // conditional rendering
        <>
        <h1 className="turn-highlight">  Winner is {winner} </h1>
        <button className="reset"  onClick={reset}> Play Again</button>
        </>
      )
    }
       
   
    <h1 className="turn-highlight">Current Turn : {(turn)?'O':'X'}</h1>
      <div className="Grid">
  {board.map((el,idx) => <Card gameEnd={winner?true:false}   key={idx} onplay={play} player={el} index={idx} />)}

    </div>
  </div>
   )
}
export default Grid;