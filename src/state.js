import { create } from 'reworm';

const globalState = create('globalStore',{
	category: "tech",
	currency: "USD"
  });

export const {
	set, 
	select,
	subscribe
} = globalState ;