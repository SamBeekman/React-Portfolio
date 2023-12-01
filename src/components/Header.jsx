import NavTabs from './NavTabs';
// import { Outlet } from 'react-router-dom';

function Header() {

  return <div> <img src='/header1.jpg' alt="crown header" />
    <h1>Who is Sam Beekman??</h1>
    <div><NavTabs /></div>
    {/* <main><Outlet /></main> */}
  </div>


    ;
}

export default Header;