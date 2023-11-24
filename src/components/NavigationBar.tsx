import Link from "next/link"

const NavigationBar = () => {
  return (
    <nav className="Navbar">
        <Link href={"/"}>MY GAME LIST</Link>
        <div className="flex">
            <Link href={"/"}>Inicio</Link>
            <Link href={"/new"}>Crear Entrada</Link>
            <Link href={"/about"}>Sobre Nosotros</Link>
        </div>        
    </nav>
  )
}

export default NavigationBar