import './topbar.scss';
import {Person, Mail} from "@material-ui/icons";

export default function Topbar({menuOpen, setMenuOpen}){
    return(
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className='left'>
                    <a href= "#intro" className='logo'>Hello Folks!</a>
                    <div className='itemContainer'>
                        <Person className='icon'/>
                        <span>+91 </span>
                    </div>
                    
                    <div className='itemContainer'>
                        <Mail className='icon'/>
                        <span>kaleaniketcp@gmail.com</span>
                    </div>
                </div>
                <div className='right'>
                    <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line 1'></span>
                        <span className='line 2'></span>
                        <span className='line 3'></span>
                    </div>
                </div>
                
            </div>

        </div>

    )
}