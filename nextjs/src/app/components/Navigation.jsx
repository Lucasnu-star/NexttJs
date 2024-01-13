'use client'

import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";


export default function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
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




