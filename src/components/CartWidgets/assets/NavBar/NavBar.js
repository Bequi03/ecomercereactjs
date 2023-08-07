import CartWidget from "../../CartWidget"

const NavBar = () => {
    return (
      <div>
        <nav>
          <h3>Servicios</h3>
          <div>
            <button> Servicio 1 </button>
            <button> Servicio 2 </button>
            <button> Servicio 3 </button>
            <button> Servicio 4 </button>
          </div>
        </nav>
        <CartWidget />
      </div>
    );
  };
  
  export default NavBar;