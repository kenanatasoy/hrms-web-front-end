import React, { useEffect, useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Header,
  Divider,
  Button,
  Label,
  Icon,
} from "semantic-ui-react";
import JobSeekerCVLanguageService from "../services/JobSeekerCVLanguageService";
import LanguageProficiencyService from "../services/LanguageProficiencyService";
import LanguageService from "../services/LanguageService";



export default function JobSeekerCVLanguagesForm() {

  const [languageProficiencies, setLanguageProficiencies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [jobSeekerCVLanguages, setJobSeekerCVLanguages] = useState([]);

  let deleteLanguage = (id) => {
    setTimeout(() => {
      console.log(id);
      jobSeekerCVLanguageService
        .deleteJobSeekerCVLanguageById(id)
        .then((result) => console.log(result));
    }, 400);
  };

  const languagesRef = useRef();
  const [languageButtonText, setLangButtonText] = React.useState("Add new language");
  const [isShowedLangButton, setStateLangButton] = React.useState(true);

  const handleOpeningLanguagesForm = () => {

    if (languagesRef.current.style.display != "none") {
      languagesRef.current.style.display = "none";
      setStateLangButton(true);
    } else {
      languagesRef.current.style.display = "block";
      setStateLangButton(false);
    }
  };

  const handleResettingClosingLanguagesForm = ({resetForm}) => {
    if(languagesRef.current.style.display == "block"){
      languagesRef.current.style.display = "none"
      resetForm({
        values: {
          proficiencyId: "",
          languageId: "",
        },
      });
    }
  }

  let jobSeekerCVLanguageService = new JobSeekerCVLanguageService();

  useEffect(() => {


    let languageService = new LanguageService();
    languageService
      .getLanguages()
      .then((result) => setLanguages(result.data.data));

    let languageProficiencyService = new LanguageProficiencyService();
    languageProficiencyService
      .getLanguageProficiencies()
      .then((result) => setLanguageProficiencies(result.data.data));


    jobSeekerCVLanguageService
      .getJobSeekerCVLanguages()
      .then((result) => setJobSeekerCVLanguages(result.data.data));



  }, [jobSeekerCVLanguages]);


  return (
    <div>
      <Header as="h2">Languages</Header>
      <Divider />

      {jobSeekerCVLanguages.map((jobSeekerCVLanguage) => (
        <Label
          as="a"
          size="large"
          color="teal"
          key={jobSeekerCVLanguage.id}
          value={jobSeekerCVLanguage.id}
        >
          {jobSeekerCVLanguage.language}
          <Label.Detail>{jobSeekerCVLanguage.proficiency}</Label.Detail>
          <Icon
            onClick={() => deleteLanguage(jobSeekerCVLanguage.id)}
            name="delete"
          />
        </Label>
      ))}

      {isShowedLangButton && (
        <Button icon="plus" onClick={handleOpeningLanguagesForm}>
          {languageButtonText}
        </Button>
      )}

      <Formik
        id="jobSeekerCVLanguagesFormik"
        initialValues={{ jobSeekerCVId: "8" }}
        onSubmit={(values, actions) => {
          values.jobSeekerCVId = 8;
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            jobSeekerCVLanguageService.postJobSeekerCVLanguage(values).then(
              (result) => {
                actions.resetForm({
                  values: {
                    proficiencyId: "",
                    languageId: "",
                  },
                });
                languagesRef.current.style.display = "none";
                setStateLangButton(true);
                console.log(result);
              },
              (result) => console.error(result)
            );
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form ref={languagesRef} style={{ display: "none" }}>
            <br />
            <br />
            
            
            <label htmlFor="languageId">Language: &nbsp;&nbsp;&nbsp;</label>
            <Field
              as="select"
              name="languageId"
              id="languageId"
              className="formikField"
              required
            >
            <option defaultValue>Select a language</option>
              {languages.map((language) => (
                <option
                  key={language.id}
                  value={language.id}
                >
                  {language.language}
                </option>
              ))}
            </Field>
            <ErrorMessage name="languageId" component="div" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            
            <label htmlFor="proficiencyId">Proficiency: &nbsp;&nbsp;&nbsp;</label>
            <Field
              as="select"
              name="proficiencyId"
              id="proficiencyId"
              className="formikField"
              required
            >
              <option defaultValue>Select a level</option>
              {languageProficiencies.map((languageProficiency) => (
                <option
                  key={languageProficiency.id}
                  value={languageProficiency.id}
                >
                  {languageProficiency.proficiency}
                </option>
              ))}
            </Field>
            <ErrorMessage name="proficiencyId" component="div" />


            &nbsp;&nbsp;&nbsp;
            
            <Button className="reset" onClick={handleResettingClosingLanguagesForm}>Reset</Button>
            <Button disabled={isSubmitting}>Add</Button>
            <br />
            <br />
            <br />
          </Form>
        )}
      </Formik>
    </div>
  );
}
