export const NavBar = () =>{

    /*className={`nav_bar ${isOpen == true ? "active" : ""}`}*/
    /*onClick={()=> setShowContact(true)}*/

    const links = document.getElementsByClassName('nav_link')
    for (let i = 0; i <= links.length; i++) {
        links[i]?.addEventListener('click', ()=>{
          //onclicking, close the nav bar
          
        })
    }
    return(
        <nav>
          <ul>
            <li className="nav_link"><a href="#about">About</a></li> 
            <hr />
            <li className="nav_link"><a href="#skills">Skills</a></li>
            <hr />
            <li className="nav_link"><a href="#projects">Projects</a></li>
            <hr />
            <li className="nav_link"><a href="#blog">Blog</a></li>
            <hr />
            <li className="nav_link"><a >Contact</a></li>
          </ul>
        </nav>
    )
}