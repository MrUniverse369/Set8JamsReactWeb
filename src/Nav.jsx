import './App.css'

function Nav(){
    return( <nav
        className="navBarContainer"
      >
        <div className="container-fluid  justify-content-center ">

          <div>
            <ul className="navbarNav">

              <li className="navItem">
                <a className="navLink" href="#Hnl">Home</a>
              </li>

              <li className="navItem">
                <a className="navLink" href="#Hnl">Harveysninelives</a>
              </li>
              <li className="navItem">
              <a className="navLink" href="#TrueNature">True Nature</a>
              </li>
              <li className="navItem">
              <a className="navLink" href="#GalacticCrusade">GalacticCrusade</a>
      
              </li>
            </ul>
          </div>
        </div>
      </nav>

)
}

export default Nav