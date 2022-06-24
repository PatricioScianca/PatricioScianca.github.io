import '../App.css';

function Navbar() {
    return(
        <div>
            <header className="App-header">
                <div className='container'>
                    <h1>-5e<span>tools</span></h1>
                </div>
            </header>
            <nav className="App-nav">
                <div className='container'>
                    <ul className='nav'>
                        <li>Home</li>
                        <li>Player</li>
                        <li>Dungeon Master</li>
                        <li>References</li>
                        <div className='buscador'>
                            <input placeholder='Search' id='buscaminas'></input>
                            <button className='btn btn-default'><span className='glyphicon'>O</span></button>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;