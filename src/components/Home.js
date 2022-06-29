import '../App.css';
import { FaUsers, FaStar, FaMedal, FaClipboardList, FaBomb, FaAtom, FaBook, FaRegUserCircle, FaDungeon, FaDragon, FaMap, FaSkullCrossbones, FaSlidersH, FaBookmark, FaMagic, FaCoins } from "react-icons/fa";

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
                        <h4>Options / Features</h4>
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
                        <div className='Icons'><FaMagic/></div>
                        <h4>Spells</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaAtom/></div>
                        <h4>Psionics</h4>
                    </a>
                </div>
            </div>

            <div className='lower-row'>
                <div className='top-text'>
                    <div className='reference-text'>Players</div>
                </div>
                <div className='left-row'>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaDungeon/></div>
                        <h4>Adventures</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaBook/></div>
                        <h4>Books</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaBookmark/></div>
                        <h4>Quick Reference</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaSkullCrossbones/></div>
                        <h4>Conditions</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaDragon/></div>
                        <h4>Bestiary</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaMap/></div>
                        <h4>DM Screen</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaCoins/></div>
                        <h4>Loot Generator</h4>
                    </a>
                    <a className='Item-Button btn'>
                        <div className='Icons'><FaSlidersH/></div>
                        <h4>CR Calculator</h4>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;