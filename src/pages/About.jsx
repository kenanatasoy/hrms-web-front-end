import React from "react";
import {
  Container,
  Header,
  Image,
  Grid,
  Divider,
  Breadcrumb,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function About() {

  return (
    <div>
      <Container
        fluid
        className="about"
      >
        <Header textAlign="center" className="about-header">
          About Us
        </Header>
        <Breadcrumb size="huge">
          <Breadcrumb.Section link as={NavLink} to="/home">Home</Breadcrumb.Section>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section active>About</Breadcrumb.Section>
        </Breadcrumb>
      </Container>

      <Container style={{ marginTop: "6em", height: "35em" }}>
        <Grid stackable columns={2}>
          <Grid.Column>
            <Image src="/images/wireframe/paragraph.png" />
          </Grid.Column>
          <Grid.Column>
            <h2>About Job Here</h2>
            <Divider></Divider>
            <p>
              <strong>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </strong>
              <br />
              Lorem ipsum dolor sit amet, consectel adipis elit, sed do eiusmod
              tempor incidi ut labore et dolore m aliqua. Ut enim ad minim
              veniam, quis nostrud exercitatik ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in repreh in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudanti totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi archite beatae vitae dicta sunt explicabo.
            </p>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
