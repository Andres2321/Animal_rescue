import React from 'react'
import { Link } from 'react-router-dom'
// import Button from '@material-ui/core/Button'
// import Menu from '@material-ui/core/Menu'
// import MenuItem from '@material-ui/core/MenuItem'


function SimpleMenu() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

  return (
    <>
      <div className='top-header-div row flex'>
        <h1 className='center'>
          <Link to='/' className='header-title'>
            The Broome County Humane Society
        </Link>
        </h1>
        <div className='flex row'>
          <img className='looking-glass center' src="https://img.icons8.com/search"></img>
          <Link to='/register' className='center sign-up'>
            <h3>Sign Up</h3>
          </Link>
          <Link to='login' className='center log-in'>
            <h3>Log In</h3>
          </Link>
        </div>
      </div>

        {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Adoption
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Adoption Details</MenuItem>
          <MenuItem onClick={handleClose}>Barn Cats</MenuItem>
          <MenuItem onClick={handleClose}>Medically Needy Animals</MenuItem>
          <MenuItem onClick={handleClose}>For Seniors</MenuItem>
        </Menu>

        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Services
      </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Spayes/Neutered</MenuItem>
          <MenuItem onClick={handleClose}>Bording</MenuItem>
          <MenuItem onClick={handleClose}>Grooming</MenuItem>
          <MenuItem onClick={handleClose}>Euthanasia and Cremation</MenuItem>
        </Menu>

        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          About Us
      </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Ways to Help</MenuItem>
          <MenuItem onClick={handleClose}>Supply Wishlist</MenuItem>
          <MenuItem onClick={handleClose}>Employment</MenuItem>
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Animal Cruelty</MenuItem>
          <MenuItem onClick={handleClose}>Local Resources</MenuItem>
          <MenuItem onClick={handleClose}>Contact us</MenuItem>
        </Menu> */}

      <div className='flex row'>

        <div className='dropdown-container'>
        <button className='dropdown-container'>
          Adoption
        </button>
        <div className='dropdown-content'>
          <a>Adoption Details</a>
          <a>Barn Cats</a>
          <a>Medically Needy Animals</a>
          <a>For Seniors</a>
        </div>
        </div>

      <button className='dropdown-btn'>
          Services
        </button>
        <div className='dropdown-content'>
          <a>Spayes/Neutered</a>
          <a>Bording</a>
          <a>Grooming</a>
          <a>Euthanasia and Cremation</a>
        </div>
        <button className='dropdown-btn'>
          About Us
        </button>
        <div className='dropdown-content'>
          <a>Ways to Help</a>
          <a>Supply Wishlist</a>
          <a>Employment</a>
          <a>Blog</a>
          <a>Animal Cruelty</a>
          <a>Local Resources</a>
          <a>Contact us</a>
        </div>
      </div>
    </>
  )
}


export default SimpleMenu