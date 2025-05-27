
export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}


export type CartItem = Guitar & { // aplicando herencia
  quantity: number; // hereda guitar y le agrega la propiedad quantity
}



export type GuitarID = Guitar['id']; // tipo GuitarID que es el id de Guitar


