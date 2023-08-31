import { useState } from "react"
import "./index.css"

function Header() {
    const [abrirFechar, setAbrirFechar] = useState(false)

    function handleAbrirFecharMenu() {
        if(abrirFechar) {
            setAbrirFechar(false)
            return
        }

        setAbrirFechar(true)
    }

  return (
    <header>
        <div className="menu-mobile">
            <div className="botao-menu">
                <button onClick={handleAbrirFecharMenu}>{abrirFechar == true ? "Fechar Menu" : "Abrir Menu"}</button>
            </div>

            <div className={`menu ${abrirFechar == true ? "" : "close"}`}>
                <nav>
                    <a href="">Configurações</a>
                    <a href="">Login</a>
                    <a href="">Sobre</a>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header