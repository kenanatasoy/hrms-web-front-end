import React, { useState, useEffect } from "react";
import { Card, Button, Grid, Container } from "semantic-ui-react";
import EmployerService from "../services/EmployerService.js";
import { NavLink } from "react-router-dom";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
      <Container>
        <Grid divided="vertically">
          <Grid.Column mobile={16} tablet={8} computer={4}>
            {employers.map((employer, index) => (
              <Card key={index} className="job-advert-card">
                <Card.Content>
                  <Card.Header>{employer.companyName}</Card.Header>
                  <Card.Meta>
                    {/* <span className="date">
                      Yayınlanma Tarihi:{" "}
                      {new Date(employer.publishedDateTime).toDateString()}
                    </span> */}
                  </Card.Meta>
                  <Card.Meta>
                    {/* <span className="date">
                      Son Başvuru Tarihi:{" "}
                      {new Date(jobAdvert.deadLineForAppeal).toDateString()}
                    </span> */}
                  </Card.Meta>
                  <Card.Description>
                    {`${employer.firstName} ${employer.lastName}`}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button as={NavLink} to={`/employers/${employer.id}`}>
                      İşveren Detayı
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            ))}
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
