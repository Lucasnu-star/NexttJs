import Link from "next/link"

const links= [{
    label:'home',
    route:'/'
  },
  {
    label:'about',
    route:'/about'
  
  }] 
function page() {
  return (
    <header>
      <nav>
        <ul>
            {links.map(({label,route})=>(
              <li key={route}>
                <Link href={route}>
                 {label}
                </Link>
              </li>
            ))}
        </ul>
    </nav>
    </header>
  )
}
export default page
