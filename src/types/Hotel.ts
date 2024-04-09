interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  price: string;
  image: string;
  departureFrom: string;
  description?: string;
  capacity: string;
  availability: {
    date: string;
    duration: string;
  };
}

export default Hotel;
