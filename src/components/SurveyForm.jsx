// src/components/SurveyForm.jsx

import { useState } from "react";
import { Formik, Form } from "formik";
import { Button, Typography, ThemeProvider } from "@mui/material";
import theme from "../theme";
import validationSchema from "../validation/validationSchema";
import QuestionField from "./QuestionField";
import ColoredTypography from "./ColoredTypography";

const SurveyForm = () => {
  const [result, setResult] = useState(null);

  const initialValues = {
    question1: "",
    question2: "",
  };

  const correctAnswers = {
    question1: "option2", // Correct answer for Question 1
    question2: "option3", // Correct answer for Question 2
  };

  const handleSubmit = (values) => {
    const results = {
      question1:
        values.question1 === correctAnswers.question1 ? "Correct" : "Wrong",
      question2:
        values.question2 === correctAnswers.question2 ? "Correct" : "Wrong",
      correct: correctAnswers,
    };
    setResult(results);
  };

  return (
    <ThemeProvider theme={theme}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <QuestionField
              field="question1"
              label="Question 1: What is the capital of France?"
              options={[
                { value: "option1", label: "Berlin" },
                { value: "option2", label: "Paris" },
                { value: "option3", label: "Rome" },
                { value: "option4", label: "Madrid" },
              ]}
              errors={errors}
              touched={touched}
              result={result}
            />

            <QuestionField
              field="question2"
              label="Question 2: Which planet is known as the Red Planet?"
              options={[
                { value: "option1", label: "Earth" },
                { value: "option2", label: "Jupiter" },
                { value: "option3", label: "Mars" },
                { value: "option4", label: "Venus" },
              ]}
              errors={errors}
              touched={touched}
              result={result}
            />

            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>

            {result && (
              <div>
                <Typography variant="h6">Results:</Typography>
                <ColoredTypography
                  variant="body1"
                  isCorrect={result.question1 === "Correct"}
                >
                  Question 1: {result.question1}
                </ColoredTypography>
                <ColoredTypography
                  variant="body1"
                  isCorrect={result.question2 === "Correct"}
                >
                  Question 2: {result.question2}
                </ColoredTypography>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </ThemeProvider>
  );
};

export default SurveyForm;
