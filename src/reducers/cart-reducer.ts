import type { Guitar } from "../types";

export type cartActions =
    { type: 'add-to-cart'; payload: { item: Guitar} } |
    { type: 'remove-from-cart'; payload: { id: Guitar['id']}} |
    { type: 'increase-quantity'; payload: { id: Guitar['id']}} |
    { type: 'decrease-quantity'; payload: { id: Guitar['id']}} |
    { type: 'clear-cart'};

