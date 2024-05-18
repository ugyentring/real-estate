import "./navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>UT ESTATE</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agents">Agents</a>
      </div>
      <div className="right">
        <a href="/login">Login</a>
        <a href="/signup" className="register">
          Sign Up
        </a>
        <div className="menuIcon">
          <img src="/menu.png" alt="menu" />
        </div>
        <div className="menu">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agents">Agents</a>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
