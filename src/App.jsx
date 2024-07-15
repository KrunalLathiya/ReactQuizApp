// src/App.jsx

import SurveyForm from "./components/SurveyForm";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="sm">
      <h1>General Knowledge Survey</h1>
      <SurveyForm />
    </Container>
  );
};

export default App;
