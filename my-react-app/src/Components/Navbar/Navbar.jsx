import './Navbar.css'
import { Fragment} from "react";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
//import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Fragment>
      <Container>
        <div className="links__section">
          <ul className="links__section__list">
            <li><Link to=''>Men</Link></li>
            <li><Link to='/Women'>Women</Link></li>
            <li><Link to='/Kids'>Kids</Link></li>
          </ul>
        </div>
      </Container>
    </Fragment>
  )
}
