import React, { useState, useEffect } from "react";
import { Card, Button, Container, Header, Breadcrumb } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import JobSeekerService from "../services/JobSeekerService";

export default function JobSeekerList() {
  const [jobSeekers, setJobSeekers] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService.getJobSeekers().then((result) => {
      setJobSeekers(result.data.data);
      console.log(result.data.data);
    });
  }, []);

  return (
    <div>
      <Container
        fluid
        className="about"
        style={{
          height: "25rem",
          marginBottom: "4rem",
        }}
      >
        <Header textAlign="center" className="about-header">
          Job Seekers
        </Header>
        <Breadcrumb size="huge">
          <Breadcrumb.Section link as={NavLink} to="/home">
            Home
          </Breadcrumb.Section>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section active>Job Seekers</Breadcrumb.Section>
        </Breadcrumb>
      </Container>

      <Container style={{ marginBottom: "8rem" }}>
        {jobSeekers.map((jobSeeker, index) => (
          <Card fluid key={index} className="job-advert-card">
            <Card.Content>
              <Card.Header>
                {jobSeeker.firstName} {jobSeeker.lastName}
              </Card.Header>
              <Card.Meta>
                <span className="date">
                  Yayınlanma Tarihi:{" "}
                  {new Date(jobSeeker.birthDate).toDateString()}
                </span>
              </Card.Meta>
              <Card.Meta>{jobSeeker.emailAddress}</Card.Meta>
              <Card.Description></Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button
                  className="button"
                  as={NavLink}
                  to={`/jobSeekers/${jobSeeker.id}`}
                >
                  İş Arayan Detayı
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Container>
    </div>
  );
}
