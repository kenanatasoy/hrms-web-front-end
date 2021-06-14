import React, { useEffect, useState } from "react";
import {
  Container,
  Form,
  Select,
  Button,
  Card,
  Grid,
  Header,
} from "semantic-ui-react";
import JobTitleService from "../services/JobTitleService";
import JobAdvertService from "../services/JobAdvertService";
import CityService from "../services/CityService";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [jobTitles, setJobTitles] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService.getJobTitles().then((result) =>
      setJobTitles(
        result.data.data.map((jobTitle) => ({
          key: jobTitle.id,
          value: jobTitle.title,
          text: jobTitle.title,
        }))
      )
    );
  }, []);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) =>
      setCities(
        result.data.data.map((city) => ({
          key: city.id,
          value: city.name,
          text: city.name,
        }))
      )
    );
  }, []);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getJobAdverts()
      .then((result) => setJobAdverts(result.data.data));
  }, []);

  return (
    <div>
      <Container
        fluid
        style={{
          backgroundColor: "#ced2d9",
          height: "40em",
          position: "relative",
        }}
      >
        <Form
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)",
            width: "100%",
          }}
          verticalAlign="middle"
        >
          <h1 style={{ color: "black", fontSize: "3.5em", display: "block" }}>
            Find Job On Our Site
          </h1>

          <Select
            className="select"
            placeholder="Select a city"
            clearable
            options={cities}
          />
          <Select
            className="select"
            placeholder="Select a job title"
            clearable
            options={jobTitles}
          />
          <Button positive>Search</Button>
        </Form>
      </Container>
      <Container>
        <Header as="h1" textAlign="center" style={{ marginTop: "1.40em" }}>
          Job Adverts
        </Header>
        <Grid divided="vertically" style={{ marginTop: "0.82em" }}>
          {jobAdverts.slice(0, 4).map((jobAdvert) => (
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Card key={jobAdvert.id} className="job-advert-card">
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
                    <Button
                      className="button"
                      as={NavLink}
                      to={`/jobadverts/${jobAdvert.id}`}
                    >
                      İlan Detayı
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
