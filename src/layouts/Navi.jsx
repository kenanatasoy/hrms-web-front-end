import React, { useState } from "react";
import { Menu, Container, Image, Dropdown } from "semantic-ui-react";
import SignedIn from "./SignedIn.jsx";
import SignedOut from "./SignedOut.jsx";
import { Link } from "react-router-dom";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  function handleSignOut(params) {
    setIsAuthenticated(false);
  }

  function handleSignIn(params) {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu
        position="right"
        fixed="top"
        style={{ marginTop: "1em", maxHeight: "3.75em" }}
      >
        <Container>
          <Menu.Item>
            {" "}
            <Image src="/images/logo.png" size="small" wrapped />
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              <Link to="/home">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/jobadverts">Job Adverts</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/about">About</Link>
            </Menu.Item>
            <Dropdown text="Pages" className="link item">
              <Dropdown.Menu>
                <Dropdown.Item><Link to="/jobseekers">Job Seekers</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/employers">Employers</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/jobseekercvs">CVs</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* <Menu.Item name="Pages" /> */}
            <Menu.Item>
              <Link to="/contact">Contact</Link>
            </Menu.Item>
            <Menu.Item>
              {isAuthenticated ? (
                <SignedIn signOut={handleSignOut} bisey="1" />
              ) : (
                <SignedOut signIn={handleSignIn} />
              )}

              {/* <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>  */}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
      {/* <br /> */}
    </div>
  );
}
