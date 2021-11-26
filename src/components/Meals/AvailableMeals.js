import {v4 as uuid} from "uuid";
import Card         from "../UI/Card";
import MealItem     from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: uuid(),
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: uuid(),
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: uuid(),
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: uuid(),
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => <section>
  <Card>
    <ul>
      {DUMMY_MEALS.map(it =>
          <MealItem key={it.id} id={it.id} name={it.name} description={it.description} price={it.price}/>)}
    </ul>
  </Card>
</section>;

export default AvailableMeals;
