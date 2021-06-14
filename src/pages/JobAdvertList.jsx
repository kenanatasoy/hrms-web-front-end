import React, { useState, useEffect } from "react";
import { Card, Grid, Container, Button } from 'semantic-ui-react';
import JobAdvertService from "../services/JobAdvertService";
import Categories from "../layouts/Categories";
import { NavLink } from "react-router-dom";

export default function JobAdvertList() {

  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getJobAdverts()
      .then((result) => setJobAdverts(result.data.data));
  }, []);

  

  return (
    <div>
      <Container>
        <Grid divided="vertically">
          <Grid.Row>
            <Grid.Column mobile={0} tablet={8} computer={4}>
              <Categories />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={12}>
              {jobAdverts.map((jobAdvert, index) => (
                <Card fluid key={index} className="job-advert-card">
                  <Card.Content>
                    <Card.Header>{jobAdvert.title}</Card.Header>
                    <Card.Meta>
                      <span className="date">
                        Yayınlanma Tarihi:{" "}
                        {new Date(jobAdvert.publishedDateTime).toDateString()}
                      </span>
                    </Card.Meta>
                    <Card.Meta>
                      <span className="date">
                        Son Başvuru Tarihi:{" "}
                        {new Date(jobAdvert.deadLineForAppeal).toDateString()}
                      </span>
                    </Card.Meta>
                    <Card.Description>
                      {jobAdvert.jobDefinition}
                      <br />
                      {jobAdvert.companyName}
                      <br />
                      <strong>{jobAdvert.city}</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                  <div className="ui two buttons">
                    <Button className="button" as={NavLink} to={`/jobadverts/${jobAdvert.id}`}>İlan Detayı</Button>
                  </div>
                  </Card.Content>
                </Card>
              ))}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
