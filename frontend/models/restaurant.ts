export interface Restaurant {
    id: number,
    attributes : RestaurantAttribute
}

export interface RestaurantAttribute{
  name: string,
  description: string,
  menu: number,
}

export interface RestaurantJsonResponse {
  data: Restaurant[];
}
