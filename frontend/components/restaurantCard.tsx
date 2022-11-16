import Card from "react-bootstrap/Card";
import { Restaurant } from '../models/restaurant';

const RestaurantCard = ({ id, name, description, menu } :any) =>{
  return(
          <Card key={id}>
            <Card.Header>{name}</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {description}
                  </p>
                </blockquote>
              </Card.Body>
                <Card.Footer>
                  <h5>Prix menu midi : {menu}$</h5>
                </Card.Footer>
          </Card>
  );
};

export default RestaurantCard;
