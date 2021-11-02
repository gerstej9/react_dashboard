import Logo from '../logo';


const Header = () => (
  <header>
    <div className="heading-rule heading-purple" />
    <div className="heading-rule heading-red" />
    <div className="heading-rule heading-orange" />
    <div className="heading-rule heading-yellow" />
    <div className="main-heading">
      <h1>
        <Logo />
        <a href="/">Numerai Insights </a>
      </h1>
      <nav>
        <a href = "/about">About</a>
      </nav>
    </div>
    <div className="sub-heading">
      <h3>Dark Mode</h3>
      <label className="switch">
        <input className="toggle" type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  </header>
);

export default Header;