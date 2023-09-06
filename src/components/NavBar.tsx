function NavBar() {
   
  
    return (
      <header className="bg-eerie_black fixed z-50 w-full flex flex-row pl-2 pr-1 py-1 justify-between">
        <div className="font-nunito flex">
            <div className="text-orange_(web)">Xavi</div>
            <div className="text-white-600">.</div>
            <div className="text">Dev</div>
        </div>
        <div className="flex flex-row">
            <a href="#about" className="px-2 border border-white-100 font-thin font-montserrat rounded-md ">
              Sobre mi
            </a>
            <a href="#projects" className="px-2 border border-white-100 font-thin font-montserrat rounded-md ml-1">
              Proyectos
            </a>
        </div>
      </header>
    )
  }
  
  export default NavBar;
  