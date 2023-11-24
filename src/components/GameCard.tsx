"use client";
import { useRouter } from "next/navigation";

const GameCard = ({ game }:any) => {
  const router = useRouter();  
  
  return (
    <div
      className="gameCard"
      onClick={() => {
        router.push(`/games/edit/${game.id}`);
      }}
    >
      <h3 className="font-bold text-2xl mb-2">{game.title}</h3>
      <img src={game.image} alt="" />
      <p>{game.description}</p>
      <p>{new Date(game.postedDate).toLocaleDateString()}</p>
      
    </div>    
  );
};

export default GameCard;
