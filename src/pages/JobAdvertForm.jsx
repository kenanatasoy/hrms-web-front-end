import React from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumb, Header, Container } from "semantic-ui-react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { useState, useEffect } from "react";
import CityService from "../services/CityService";
import JobTitleService from "../services/JobTitleService";
import JobTypeService from "../services/JobTypeService";
import JobStyleService from "../services/JobStyleService";
import JobAdvertService from "../services/JobAdvertService";

export default function JobAdvertForm() {

  const [cities, setCities] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [jobStyles, setJobStyles] = useState([]);
 
  useEffect(() => {

    let jobAdvertService = new JobAdvertService();

    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));

    let jobTitleService = new JobTitleService();
    jobTitleService.getJobTitles().then((result) => setJobTitles(result.data.data));
  
    let jobTypeService = new JobTypeService();
    jobTypeService.getJobTypes().then((result) => setJobTypes(result.data.data));

    let jobStyleService = new JobStyleService();
    jobStyleService.getJobStyles().then((result) => setJobStyles(result.data.data));

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
          Post a Job Advert
        </Header>
        <Breadcrumb size="huge">
          <Breadcrumb.Section link as={NavLink} to="/home">
            Home
          </Breadcrumb.Section>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section active>Post a Job Advert</Breadcrumb.Section>
        </Breadcrumb>
      </Container>

      <Container
        style={{
          marginBottom: "4rem",
        }}
      >
        <Formik
          initialValues={{ jobDefinition: "" }}
        //   validate={values => {
        //     const errors = {};
        //     if (!values.jobDefinition) {
        //       errors.jobDefinition = 'Required';
        //     } else if (
        //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //     ) {
        //       errors.jobDefinition = 'Invalid email address';
        //     }
        //     return errors;
        //   }}
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
              <label htmlFor="jobTitle">Job Title: &nbsp;&nbsp;&nbsp;</label>
              <Field name="jobTitle" id="jobTitle" as="select" required="true">
              <option defaultValue>Select a job title</option>
                {jobTitles.map((jobTitle) => (
                  <option key={jobTitle.id} value={jobTitle.title}>
                    {jobTitle.title}
                  </option>
                ))}
              </Field>
              <br />
              <br />

              <label htmlFor="jobDefinition">Job Definition: &nbsp;&nbsp;&nbsp;</label>
              <Field as="textarea" name="jobDefinition" rows="10" cols="20" id="jobDefinition" required />
              <ErrorMessage name="jobDefinition" component="div" />
              <br />
              <br />

              <label htmlFor="city">City: &nbsp;&nbsp;&nbsp;</label>
              <Field name="city" as="select" required>
                <option defaultValue>Select a city</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </Field>
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

              <label htmlFor="numberOfOpenPositions">Number of Open Positions: &nbsp;&nbsp;&nbsp;</label>
              <Field type="number" name="numberOfOpenPositions" id="numberOfOpenPositions" required />
              <ErrorMessage name="numberOfOpenPositions" component="div" />
              <br />
              <br />

              <label htmlFor="jobType">Job Type: &nbsp;&nbsp;&nbsp;</label>
              <Field name="jobType" id="jobType" as="select" required>
              <option defaultValue>Select a job type</option>
                {jobTypes.map((jobType) => (
                  <option key={jobType.id} value={jobType.name}>
                    {jobType.name}
                  </option>
                ))}
              </Field>
              <br />
              <br />

              <label htmlFor="jobStyle">Job Style: &nbsp;&nbsp;&nbsp;</label>
              <Field name="jobStyle" id="jobStyle" as="select" required>
              <option defaultValue>Select a job style</option>
                {jobStyles.map((jobStyle) => (
                  <option key={jobStyle.id} value={jobStyle.name}>
                    {jobStyle.name}
                  </option>
                ))}
              </Field>
              <br />
              <br />

              <label htmlFor="deadLineForAppeal">Deadline For Appeal: &nbsp;&nbsp;&nbsp;</label>
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
              <Field type="checkbox" name="isActive" id="isActive" required/>
              <ErrorMessage name="isActive" component="div" />
              <br />
              <br />
            
              <input type="submit" value="Submit" disabled={isSubmitting} />
              {/* Submit
              </input> */}
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}
