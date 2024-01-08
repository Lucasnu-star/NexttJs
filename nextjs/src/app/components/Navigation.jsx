import Link from "next/link"


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
    <header className="flex items-center py-5 ">
        <div className="bg-slate-600 mx-2">
            <p className="">Logo</p>
        </div>
    <nav className="w-full"> 
        
    <ul className="flex justify-center items-center gap-5">  
        {links.map(({ label, route }) => (
        <li key={route}>
            <Link href={route} >
            {label}
            </Link>
        </li>
        ))}
    </ul>
    </nav>
    
    </header>
)
}
export default Navigation