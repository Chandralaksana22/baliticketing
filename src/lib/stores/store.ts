
import { writable } from 'svelte/store';


export const ticketStore = writable({
    id: '',
    name: '',
    slug: '',
    adults: 0,
    children: 0,
    infants: 0,
    date: '',
    adult_price: 0,
    children_price: 0,
    infant_price: 0,
    total_price: 0,
});
