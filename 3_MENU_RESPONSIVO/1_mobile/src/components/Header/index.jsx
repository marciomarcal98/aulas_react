import "./index.css"

function Header() {
  return (
    <header>
        <div className="menu-mobile">
            <div className="botao-menu">
                <button>Abrir Menu</button>
            </div>

            <div className="menu">
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