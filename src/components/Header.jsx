const Header = ({ navClickHandler }) => {
  return (
    
      <div className="header">
        <div className="container">
        <div className="site-brand">
          <div onClick={navClickHandler}>DEMO Streaming</div>
        </div>
        <div className="header-nav">
          <button className="btn login-btn">Log In</button>
          <button className="btn trial-btn">Start your free trial</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
