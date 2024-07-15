// src/components/QuestionField.jsx

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  FormHelperText,
} from "@mui/material";
import { Field } from "formik";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const StyledFormControlLabel = styled(FormControlLabel)(
  ({ theme, correct }) => ({
    "& .MuiRadio-root": {
      color:
        correct === "correct"
          ? theme.palette.success.main
          : correct === "wrong"
          ? theme.palette.error.main
          : undefined,
    },
  })
);

// eslint-disable-next-line react/prop-types
const QuestionField = ({ field, label, options, errors, touched, result }) => {
  const theme = useTheme();

  return (
    <FormControl
      component="fieldset"
      error={Boolean(errors[field] && touched[field])}
      fullWidth
      margin="normal"
    >
      <FormLabel component="legend">{label}</FormLabel>
      <Field as={RadioGroup} aria-label={field} name={field}>
        {
          // eslint-disable-next-line react/prop-types
          options.map((option) => (
            <StyledFormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
              correct={
                result &&
                result[field] === "Correct" &&
                // eslint-disable-next-line react/prop-types
                option.value === result.correct[field]
                  ? "correct"
                  : result &&
                    result[field] === "Wrong" &&
                    // eslint-disable-next-line react/prop-types
                    option.value === result.correct[field]
                  ? "wrong"
                  : undefined
              }
              theme={theme}
            />
          ))
        }
      </Field>
      <FormHelperText>{touched[field] && errors[field]}</FormHelperText>
    </FormControl>
  );
};

export default QuestionField;
