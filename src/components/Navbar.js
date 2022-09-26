const Navbar = () => {
  return (
    <div className='navbar'>
      <h2>Too lazy for logo Inc.</h2>
      <div className='links'>
        <button onClick={() => { window.location.href = "/" }} >Home</button>
        <button onClick={() => { window.location.href = "/projects" }}>Projects</button>
        <button onClick={() => { window.location.href = "/blogs" }}>Blog</button>
      </div>
    </div>
  )
}

export default Navbar;