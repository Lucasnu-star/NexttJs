import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";



const links= [{
    label:'Home',
    route:'/'
  },
  {
    label:'Menu',
    route:'/Menu'
  
  },
{
    label:'Promociones',
    route:'/Promociones'
}] 


function Navigation() {
  return (
    <Navbar>
    <NavbarBrand>
      
      <p className="font-bold text-inherit">ACME</p>
    </NavbarBrand>
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
      {links.map(({ label, route }) => (
                <li key={route}>
                    <Link color="foreground" href="#">
          {label}
        </Link>
                </li>
            ))}
        
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link href="#">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="#" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
)
}
export default Navigation


