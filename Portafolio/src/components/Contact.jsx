import {
    Button,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
  } from '@chakra-ui/react'  

// The below import defines which components come from formik
import { Field, Form, Formik } from 'formik';

function FormikExample() {
    function validateName(value) {
      let error
      if (!value) {
        error = 'Email is required'
      } else if (value.toLowerCase() !== 'alguien@gmail.com') {
        error = "This email is not avaible 😱"
      }
      return error
    }
  
    return (
        <>
      <Formik
        initialValues={{ name: 'nadie@gmail.com' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) => (
          <Form>
            <FormControl>
                <FormLabel>Full name</FormLabel>
                <Input type='text' />
            </FormControl>
            <Field name='name' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Email</FormLabel>
                  <Input {...field} placeholder='name' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <FormControl>
                <FormLabel>Proyect</FormLabel>
                <Input type='text' />
            </FormControl>
            <FormControl>
                <FormLabel>Message</FormLabel>
                <Input type='text' />
            </FormControl>
            
            <Button
              mt={4}
              colorScheme='teal'
              isLoading={props.isSubmitting}
              type='submit'
            >
              Send me
            </Button>
          </Form>
        )}
      </Formik>
        </>
    )
  }

export default FormikExample;