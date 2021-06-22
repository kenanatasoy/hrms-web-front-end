import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Header, Divider } from "semantic-ui-react";
import JobTitleService from "../services/JobTitleService";

export default function JobTitleForm() {
    
  let jobTitleService = new JobTitleService();

  return (
    <div>
      <Container
        fluid
        style={{
          height: "20rem",
          backgroundColor: "grey",
          marginBottom: "1rem",
        }}
      ></Container>
      <Container style={{marginBottom: "2rem"}}>
        <Header>Job Title Form</Header>
        <Divider></Divider>
        <Formik
          initialValues={{ /* email: "", */ title: "" }}
          //   validate={(values) => {
          //     const errors = {};
          //     if (!values.email) {
          //       errors.email = "Required";
          //     } else if (
          //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //     ) {
          //       errors.email = "Invalid email address";
          //     }
          //     return errors;
          //   }}

          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              console.log(values);
              jobTitleService
                .postJobTitle(values)
                .then((result) => console.log(result), 
                      (result) => console.error(result)
                )}, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label htmlFor="jobTitle">Enter a Job Title: </label>
              <Field type="text" name="title" id="jobTitle" />
              <ErrorMessage name="title" component="div" />
              <br />
              <br />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}
