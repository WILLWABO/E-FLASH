import React from "react";
import { Link } from "react-router-dom";
import {
  FaDesktop,
  FaUserCog,
  FaSignOutAlt,
  FaSpinner,
  FaUserCircle,
} from "react-icons/fa";
import { FiChevronDown, FiChevronRight, FiFilePlus, FiList, FiRewind, FiSearch, FiShoppingCart } from "react-icons/fi";
import { FcComboChart } from "react-icons/fc";
import { BsFileEarmarkCheck, BsFileEarmarkDiff } from "react-icons/bs";
import "../../assets/css/sidebar.css";

import { connect } from "react-redux";
import { createUser } from "../../redux/actions/action";
import { Navbar } from "reactstrap";

class NavbarUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navState: false,
    };
  }

  render() {
    return (
      <div>
        <ul id ="nav" className={"side-nav"}>
        <li className="link row">
          <FiShoppingCart color="red" size={30} />
          <p style={styles.text}>
            YOWFLASH
          </p>
        </li>
        <li className="link row">
            <input
            className="search"
            placeholder="Que recherchez-vous?..."
            />
            <FiSearch color="black" size={30} />
        </li>
        </ul>
        <nav id="nav">
          <ul className={"side-nav"}>

            <li className="link row">
              <FiList color="#17a2b8" size={16} style={{ marginTop: 6 }} />
              <Link to="#" style={styles.links}>
                Parcourir les catégories
              </Link>
            </li>

            <li className="link row">
              <FiFilePlus
                color="#00FF00"
                size={16}
                style={{ marginTop: 6 }}
              />
              <Link to="#" style={styles.links}>
                Flasher
              </Link>
            </li>

            <li className="link row">
              <FiChevronRight
                color="#007bff"
                size={16}
                style={{ marginTop: 6 }}
              />
              <Link to="#" style={styles.links}>
                Flash
              </Link>
            </li>

            <li className="link row">
              <FiRewind
                size={16}
                color="#007bff"
                style={{ marginTop: 6 }}
              />
              <Link to="#" style={styles.links}>
                Flashback
              </Link>
            </li>

            <li className="link row">
              <FaSignOutAlt color="red" size={16} style={{ marginTop: 6 }} />
              <Link to="/" style={styles.links}>
                  Déconnecter
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const styles = {
  links: {
    textDecoration: "none",
    margin: 0,
    color: "white",
  },

  user: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8A5A48",
  },

  text: {
    fontFamily: "Montserrat",
    fontSize: 12,
    fontWeight: "bold",
    margin: 0,
    color: "black",
  },
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    save_user: (user) => dispatch(createUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarUser);
