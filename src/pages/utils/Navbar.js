const Navbar = () => {
    return (
        <div className={` flex flex-row justify-between bg-green-400`}>
            <img id="Logo" src={`/fruit1.jpg`} className={`md: w-10 md:h-10 md:ml-10`}></img>
            <div id="menu" className={` flex flex-row justify-evenly`}>
                <span className={`mx-12`}>Home</span>
                <span className={`mx-12`}>About</span>
                <span className={`mx-12`}>Contact</span>
            </div>
            <button id="softCTA" className={`md:mr-20 px-8 border border-solid border-green-800 m-1`}>softCTA</button>
        </div>

    )
    
}
export default Navbar;