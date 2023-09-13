function NavBar() {
   
  
    return (
      <header className="fixed z-50 flex flex-row justify-between w-full py-1 pl-2 pr-1 bg-eerie_black">
        <div className="flex text-2xl font-nunito">
            <div className="text-orange_(web)">Xavi</div>
            <div className="text-white-600">.</div>
            <div className="text-white-300">Dev</div>
        </div>
        <div className="flex flex-row">
            <a href="#projects" className="px-2 ml-1 font-thin border rounded-md border-white-100 font-montserrat">
              Proyectos
            </a>
        </div>
      </header>
    )
  }
  
  export default NavBar
  