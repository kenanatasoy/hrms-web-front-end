import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Button,
  Card,
  Container,
  Header,
  Breadcrumb,
  Divider,
  Icon,
  List,
} from "semantic-ui-react";
import JobAdvertService from "../services/JobAdvertService";
import { NavLink } from "react-router-dom";

export default function JobAdvertDetail() {
  let { id } = useParams();

  const [jobAdvert, setJobAdvert] = useState({});

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.getByJobAdvertId(id).then((result) => {
      setJobAdvert(result.data.data);
      console.log(result.data.data);
    });
  }, [id]);

  return (
    <div>
      <Container fluid className="jobdetail-header">
        <Header textAlign="center" className="jobdetail-title">
          Job Details
        </Header>
        <Breadcrumb size="huge">
          <Breadcrumb.Section link as={NavLink} to="/home">
            Home
          </Breadcrumb.Section>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section active>Job Details</Breadcrumb.Section>
        </Breadcrumb>
      </Container>

      <Container className="jobdetail-container">
        <Card fluid key={jobAdvert.id} className="job-advert-card">
          <Card.Content>
            <Card.Header>{jobAdvert.title}</Card.Header>
            {/* <Card.Meta>{jobAdvert.category?.categoryName}</Card.Meta> */}
            <Card.Description>
              Firma: {jobAdvert.companyName}
              <br />
              <span className="date">
                Yayınlanma Tarihi:{" "}
                {new Date(jobAdvert.publishedDateTime).toDateString()}
              </span>
              <br />
              <span className="date">
                Son Başvuru Tarihi:{" "}
                {new Date(jobAdvert.deadLineForAppeal).toDateString()}
              </span>
              <br />
              Açık Pozisyon Sayısı: {jobAdvert.numberOfOpenPositions}
              <br />
              Lokasyon: {jobAdvert.city}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button className="button">
                Apply Now
              </Button>
            </div>
          </Card.Content>
        </Card>

        <Header textAlign="left">Job Description</Header>
        <Divider></Divider>
        <p style={{ textAlign: "left" }}>
          Lorem ipsum dolor sit amet, consectel adipis elit, sed do eiusmod
          tempor incidi ut labore et dolore m aliqua. Ut enim ad minim veniam,
          quis nostrud exercitatik ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in repreh in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudanti totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi archite beatae vitae
          dicta sunt explicabo.
        </p>

        <Header textAlign="left">Job Benefits</Header>
        <Divider></Divider>
        <List style={{ textAlign: "left" }}>
          <List.Item>
            <Icon color="green" name="check" />
            Some form the my have suffered alteration in some form andomised
            words
          </List.Item>
          <List.Item>
            <Icon color="green" name="check" />
            Believable available but the majority have suffer edaration in some
          </List.Item>
          <List.Item>
            <Icon color="green" name="check" />
            There are many variations of passages of Lorem Ipsum available
          </List.Item>
          <List.Item>
            <Icon color="green" name="check" />
            Some form the my have suffered alteration in some form andomised
            words
          </List.Item>
          <List.Item>
            <Icon color="green" name="check" />
            Believable available but the majority have sufferederation in some
          </List.Item>
          <List.Item>
            <Icon color="green" name="check" />
            There are many variations of passages of Lorem Ipsum available
            liable
          </List.Item>
        </List>

        <Header textAlign="left">Job Requirements</Header>
        <Divider></Divider>
        <List ordered style={{ textAlign: "left" }}>
          <List.Item>
            Some form the my have suffered alteration in some form andomised
            words
          </List.Item>
          <List.Item>
            Believable available but the majority have suffer edaration in some
          </List.Item>
          <List.Item>
            There are many variations of passages of Lorem Ipsum available
          </List.Item>
          <List.Item>
            Some form the my have suffered alteration in some form andomised
            words
          </List.Item>
          <List.Item>
            Believable available but the majority have sufferederation in some
          </List.Item>
          <List.Item>
            There are many variations of passages of Lorem Ipsum available
            liable
          </List.Item>
        </List>
      </Container>
    </div>
  );
}
