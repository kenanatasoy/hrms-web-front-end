import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Container,
  Header,
  Breadcrumb,
  Divider,
  Button,
  Label,
  Icon
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import JobSeekerCVService from "../services/JobSeekerCVService";
import JobSeekerCVSkillService from "../services/JobSeekerCVSkillService";
import JobSeekerCVImageService from "../services/JobSeekerCVImageService";
import JobSeekerCVExperienceService from "../services/JobSeekerCVExperienceService";
import JobSeekerCVLanguagesForm from "../layouts/JobSeekerCVLanguagesForm";
import JobSeekerService from "../services/JobSeekerService";

export default function JobSeekerCVForm() {

  let jobSeekerCVService = new JobSeekerCVService();
 
  useEffect(() => {

    let jobSekerService = new JobSeekerService();

    let jobSeekerCVSkillService = new JobSeekerCVSkillService();

    let jobSekerCVExperienceService = new JobSeekerCVExperienceService();

    let jobSeekerCVImageService = new JobSeekerCVImageService();
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
          Create a CV
        </Header>
        <Breadcrumb size="huge">
          <Breadcrumb.Section link as={NavLink} to="/home">
            Home
          </Breadcrumb.Section>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section active>Create a CV</Breadcrumb.Section>
        </Breadcrumb>
      </Container>

      <Container
        style={{
          marginBottom: "4rem",
        }}
      >
        <Header as="h1">CV</Header>
        <Divider />

        <Formik
          id="jobSeekerCVSkillsFormik"
          initialValues={{ jobDefinition: "" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              actions.resetForm({
                values: {
                  // the type of `values` inferred to be Blog
                  title: '',
                  image: '',
                  body: '',
                },});
              console.log(values);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Header as="h2">Skills</Header>
              <Divider />
              <Label size="large" as="a" color="teal">
                Java
              </Label>
              <br />
              <label htmlFor="jobSeekerCVSkill">
                Skill: &nbsp;&nbsp;&nbsp;
              </label>
              <Field
                type="text"
                name="jobSeekerCVSkill"
                id="jobSeekerCVSkill"
                required
              />
              &nbsp;&nbsp;&nbsp;
              <ErrorMessage name="jobSeekerCVSkill" component="div" />
              <Button icon="plus"></Button>
              <br />
              <input type="submit" value="Submit" disabled={isSubmitting} />
              <br />
              <br />
              <br />
            </Form>
          )}
        </Formik>


        <JobSeekerCVLanguagesForm />
        <br />
        <br />



        <Formik
          initialValues={{ jobDefinition: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              console.log(values);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              
              <Header as="h2">Educations</Header>
              <Divider></Divider>
              <Header as="h2">Experinces</Header>
              <Divider></Divider>

              
              <label htmlFor="jobDefinition">
                Job Definition: &nbsp;&nbsp;&nbsp;
              </label>
              <Field
                as="textarea"
                name="jobDefinition"
                rows="10"
                cols="20"
                id="jobDefinition"
                required
              />
              <ErrorMessage name="jobDefinition" component="div" />
              <br />
              <br />
              <label htmlFor="minSalary">Min Salary: &nbsp;&nbsp;&nbsp;</label>
              <Field type="number" name="minSalary" id="minSalary" />
              <ErrorMessage name="minSalary" component="div" />
              <br />
              <br />
              <label htmlFor="maxSalary">Max Salary: &nbsp;&nbsp;&nbsp;</label>
              <Field type="number" name="maxSalary" id="maxSalary" />
              <ErrorMessage name="maxSalary" component="div" />
              <br />
              <br />
              <label htmlFor="numberOfOpenPositions">
                Number of Open Positions: &nbsp;&nbsp;&nbsp;
              </label>
              <Field
                type="number"
                name="numberOfOpenPositions"
                id="numberOfOpenPositions"
                required
              />
              <ErrorMessage name="numberOfOpenPositions" component="div" />
              <br />
              <br />
              <label htmlFor="deadLineForAppeal">
                Deadline For Appeal: &nbsp;&nbsp;&nbsp;
              </label>
              <Field
                type="datetime-local"
                name="deadLineForAppeal"
                id="deadLineForAppeal"
                required
              />
              <ErrorMessage name="deadLineForAppeal" component="div" />
              <br />
              <br />
              <label htmlFor="isActive">Active: &nbsp;&nbsp;&nbsp;</label>
              <Field type="checkbox" name="isActive" id="isActive" required />
              <ErrorMessage name="isActive" component="div" />
              <br />
              <br />
              <input type="submit" value="Submit" disabled={isSubmitting} />
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}
