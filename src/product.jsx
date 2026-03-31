import { use } from "react"
import Card from "./card";

export default function Product({cardsPromise,carts, setCarts}){
  const cards = use(cardsPromise);
  return(
    <div className="min-h-screen">
      <div className="container mx-auto pb-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10 mt-10">
          {cards.map(card => 
            <Card key={card.id} card={card} carts={carts} setCarts={setCarts}></Card>
          )}
        </div>
      </div>
    </div>
  )
}