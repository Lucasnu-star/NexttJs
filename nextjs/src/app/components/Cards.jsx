import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";


const burguers = [
    {
      item: 1,
      title: 'Hamburguesa Clasica',
      description: 'Una hamburguesa clasica con el mejor pan de la ciudad.',
      price: '3000'
    },
    {
      item: 2,
      title: 'Hamburguesa Completa',
      description: 'Una hamburguesa completa, lechuga, tomate, jamon y queso.',
      price: '4500'
    }
  ];


  function Cards() {
    return burguers.map((burguers) => ( 
      <Card className="py-4 flex ">
        <CardHeader className="pb-0 pt-2 px-4 text-center  ">
        
          <section key={burguers.item}>
            <h2>{burguers.title}</h2>
            <p>{burguers.description}</p>
            <Button>{burguers.price}</Button>
          </section>

        </CardHeader>
        <CardBody className="overflow-visible py-2 flex items-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
        <Button>Añadir al carrito</Button>
      </Card>
    ))}
 
  
  export default Cards;