import axios from 'axios';
import  RestaurantCard  from '../components/restaurantCard';
import { GetStaticProps } from 'next';
import { Restaurant, RestaurantJsonResponse } from '../models/Restaurant';


export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get("http://localhost:1337/api/restaurants", {
    headers: {
      Accept: "application/json",
    },
  });
  const data: RestaurantJsonResponse = response.data.data;
  return {
    props: {
      data,
    },
  };
};

const Home = ({ data }: RestaurantJsonResponse) => {
  const restaurants = data.map((restaurant) => (
    <RestaurantCard
      id={restaurant.id}
      key={restaurant.id}
      name={restaurant.attributes.name}
      description={restaurant.attributes.description}
      menu={restaurant.attributes.menu}
    />
  ));
  return (
    <>
    <div className="Cards">
      {restaurants}
    </div>
    </>
  );
};
export default Home;
