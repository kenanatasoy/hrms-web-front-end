import React from "react";
import { Grid, Container, Icon, List, Header } from "semantic-ui-react";

export default function Footer() {
  return (
    <div>
      <Container
        fluid
        style={{
          marginTop: "2rem",
          backgroundColor: "#7a807c",
          color: "white",
          height: "20rem",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Container>
          <Grid>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Header className="footer-lists-titles">Get in touch</Header>
              <List className="footer-lists">
                <List.Content>
                  <Icon name="phone" />
                  +90 0(212) 345 678 102
                </List.Content>
                <List.Content>
                  <Icon name="mail" />
                  info@example.com
                </List.Content>
                <List.Content>
                  <Icon name="world" />
                  www.example.com
                </List.Content>
                <List.Content>
                  <Icon name="location arrow" />
                  Address goes here.
                </List.Content>
              </List>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Header className="footer-lists-titles">By regions</Header>
              
              <List className="footer-lists">
                <List.Content>North America</List.Content>
                <List.Content>Europe</List.Content>
                <List.Content>China</List.Content>
                <List.Content>Brazil</List.Content>
              </List>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Header className="footer-lists-titles">Job Types</Header>
              <List className="footer-lists">
                <List.Content>Full Time Job</List.Content>
                <List.Content>Part Time Job</List.Content>
                <List.Content>Temporary Job</List.Content>
                <List.Content>Internship Job</List.Content>
                <List.Content>Developer</List.Content>
              </List>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Header className="footer-lists-titles">Jobs By Keywords</Header>
              <List className="footer-lists">
                <List.Content>Graphic Designer</List.Content>
                <List.Content>HTML Designer</List.Content>
                <List.Content>WP Developer</List.Content>
                <List.Content>Joomla Developer</List.Content>
                <List.Content>Content Creator</List.Content>
              </List>
            </Grid.Column>
          </Grid>
        </Container>
      </Container>
      <Container
        fluid
        style={{
          color: "white",
          height: "4rem",
          backgroundColor: "rgba(36, 174, 97, 0.99)",
          alignItems: "center",
          display: "flex",
          fontSize: "1.1rem"
        }}
      >
        <p style={{ flex: "1" }}>
          Copyright© <strong>JobHere.</strong> All right reserved.
        </p>
      </Container>
    </div>
  );
}
