import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";


export default function App() {
  const menuItems = [{
      item: 'Home',
      index: '/'

  },
  {
    item: 'Menu',
    index: '/Menu'

},
{
  item: 'Promociones',
  index: '/Promociones'

},

    
  ];

  return (
    <Navbar disableAnimation isBordered  className="text-black">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
      <NavbarBrand>
        <img src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" alt="Logo" className="logo-img  h-10" />
</NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
         
          <p className="font-bold text-inherit">LOGO</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="warning">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

     

      <NavbarMenu>
      {menuItems.map((menuItem, index) => ( 
  <NavbarMenuItem key={index}>
    <Link
      className="w-full text-black"
      size="lg"
      href={menuItem.index}  
    >
      {menuItem.item}
    </Link>
  </NavbarMenuItem>
))}
      </NavbarMenu>
    </Navbar>
  );
}
