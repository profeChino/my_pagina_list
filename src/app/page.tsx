import  GameCard  from "@/components/GameCard"
async function loadGames() {
  // haciendo una peticion HTTP /api/tasks , esto es mejor si planeas separar el front del back
  const res = await fetch('http://localhost:3000/api/')
  const data = await res.json()
  
  return data;
}

export const dynamic = 'force-dynamic'//no usar esto en desarrollo

const HomePage = async () => {
  const games = await loadGames();

  return (
    <section className="container mx-auto mb-10">
      <div className="grid grid-cols-4 gap-6 mt-10">
        {
          games.map((game: { id: any; }) => {                    
            return <GameCard game={game} key={game.id}/>
          })
        }
      </div>
    </section>
  );
};

export default HomePage;
