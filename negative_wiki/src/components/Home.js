import '../App.css';
import { FaUsers, FaStar, FaMedal, FaClipboardList, FaBomb, FaAtom, FaBook, FaRegUserCircle } from "react-icons/fa";

function Home() {
    return(
        <div className='App-home'>
            <div className='upper-row'>
                <div className='top-text'>
                    <div className='reference-text'>Players</div>
                </div>
                <div className='left-row'>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaUsers/></div>
                        <h4>Races</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaStar/></div>
                        <h4>Classes</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaMedal/></div>
                        <h4>Feats</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaClipboardList/></div>
                        <h4 id='dos-lineas'>Options <br/>& Features</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaRegUserCircle/></div>
                        <h4>Backgrounds</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaBomb/></div>
                        <h4>Items</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaBook/></div>
                        <h4>Spells</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaAtom/></div>
                        <h4>Psionics</h4>
                    </a>
                </div>
            </div>

            {/* <div className='lower-row'>
                <div className='top-text'>
                    <div className='reference-text'>Players</div>
                </div>
                <div className='left-row'>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaUsers/></div>
                        <h4>Races</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaStar/></div>
                        <h4>Classes</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaMedal/></div>
                        <h4>Feats</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaClipboardList/></div>
                        <h4 id='dos-lineas'>Options <br/>& Features</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaRegUserCircle/></div>
                        <h4>Backgrounds</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaBomb/></div>
                        <h4>Items</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaBook/></div>
                        <h4>Spells</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaAtom/></div>
                        <h4>Psionics</h4>
                    </a>
                </div>
            </div> */}
        </div>
    );
};

export default Home;