import NavTabs from './NavTabs';
import {Outlet} from 'react-router-dom';

function Header() {
        
    return <div> Header
                <h4>Sam Beekman</h4>
        <div><NavTabs/></div>
        <main><Outlet/></main>
        </div>
    
    
    ;
  }
  
  export default Header;