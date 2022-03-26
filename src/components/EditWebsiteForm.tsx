import {
  Box,
  Button,
  Checkbox,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { WebsiteItem } from "../types";

interface Props {
  old: WebsiteItem;
  onClose: () => void;
  update: (oldW: WebsiteItem, newW: WebsiteItem) => void;
}

const EditWebsiteForm: React.FC<Props> = ({ old, onClose, update }) => {
  return (
    <Formik
      initialValues={{ ...old }}
      validate={(values) => {
        const errors: any = {};
        if (!values.websiteUrl) {
          errors.websiteUrl = "Required";
        } else if (
          !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/i.test(
            values.websiteUrl
          )
        ) {
          errors.websiteUrl =
            "Invalid Website URL. It must start with the HTTP Protocol.";
        }
        if (!values.minutesAllowed) {
          errors.minutesAllowed = "Required";
        } else if (values.is_atomic || values.is_nuclear) {
          if (values.minutesAllowed !== old.minutesAllowed) {
            errors.minutesAllowed =
              "You can't edit the minutes allowed when the nuclear or atomic options are active.";
          }
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        update(old, values);
        onClose();
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values }) => (
        <Box as={Form}>
          <ModalContent>
            <ModalHeader>Edit Website:</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormLabel>Website URL</FormLabel>
              <Field as={Input} type="text" name="websiteUrl" />
              <ErrorMessage name="websiteUrl" />
              <FormLabel>Minutes Allowed</FormLabel>
              <Field as={Input} type="number" name="minutesAllowed" />
              <ErrorMessage name="minutesAllowed" />
              <FormLabel>Obliterating Options</FormLabel>
              <Field
                as={Checkbox}
                isChecked={values.is_nuclear}
                type="checkbox"
                name="is_nuclear"
              >
                Nuclear
              </Field>
              <br />
              <Field
                as={Checkbox}
                isChecked={values.is_atomic}
                type="checkbox"
                name="is_atomic"
              >
                Atomic
              </Field>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red" size="sm" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                size="sm"
                colorScheme="green"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Box>
      )}
    </Formik>
  );
};

export default EditWebsiteForm;
