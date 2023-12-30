import React ,{useState} from 'react'
import styled from 'styled-components'
import BurgerButton from './BurgerButton'

function Navbar() {
  const [clicked,setClicked]= useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <NavCont>
        <h2>Menú <span>Inicio</span></h2>
        <div className={`links ${clicked ?'active' : ''}`}>
          <a onClick={handleClick} href="/">Presentación</a>
          <a onClick={handleClick} href="/">Habilidades</a>
          <a onClick={handleClick} href="/">Formación</a>
          <a onClick={handleClick} href="/">Contacto</a>
        </div>
        <div className='burger'>
        <BurgerButton clicked={clicked} handleClick={handleClick}/>
        </div>
        <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
    </NavCont>
  )
}

export default Navbar


const NavCont = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  
  padding: .4rem;
  background-color: #333;
  align-items: center;
  display: flex;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .burger{
    @media(min-width: 768px){
      display: none;
    }
    
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    transition: all .5s ease;
    a{
      color: #333;
      font-size: 1.5rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        display: inline;
        color: white;
        font-size: 1rem;
      }
      
    }
    
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top:30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      color: white;
    }

  }
`
const BgDiv = styled.div`
  position: absolute;
  background-color: #222;
  top: -700px;
  left: -1000px;
  transition: all .6s ease;
  &.active{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 0 0 80% 0;

  }
  
`