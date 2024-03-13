import './navbar.scss';

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
          <img src="logo.png" alt="azzain logo" />
          <span>Azzain Ink</span>
        </div>
        <div className="icons">
          <img src="/search.svg" alt="search icon" />
          <img src="/app.svg" alt="app icon" />
          <img src="/expand.svg" alt="expand icon" />
          <div className="notification">
            <img src="/notifications.svg" alt="notification count" />
            <span>1</span>
          </div>
          <div className="user">
            <img             
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="user icon" /> 
             <span>Omar</span>
          </div>
          <img src="/settings.svg" alt="settings icons" />
        </div>
    </div>
  )
}

export default Navbar