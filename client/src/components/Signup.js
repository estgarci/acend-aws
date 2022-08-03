
import { useState, useCallback} from 'react';
import { Formik, Field, ErrorMessage, useFormik, Form} from 'formik';
import * as yup from 'yup';
import { TextField } from './TextField';
import { Col, Row,
    Button, Modal, ModalBody, FormText, FormGroup, Input, Label, Container, FormFeedback, Form as RSForm} from 'reactstrap';
import {motion} from 'framer-motion/dist/framer-motion';
import {useNavigate, Navigate} from 'react-router';
import { singUp, singupRequest } from '../redux/actionCreators';
import Singupsuccess from './Singupsuccess';
import { baseUrl } from '../shared/baseUrl';



const Signup = (props) => {

    const newUserSchema = yup.object().shape({
        firstName: yup
            .string(),
        lastName: yup
            .string(),
        lastName: yup
            .string(),
        email: yup
            .string()
            .email("Email must be valid"),
        password: yup
            .string()
            .matches(
                /^([A-Za-z0-9.!@#$\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g,
                'Password can only contain Latin letters, numbers or special characters'
            )
            .min(8,
                "Password must be a minimum of 8 characters"
            )
            .matches(/^(?=.*?[A-Za-z]).+$/,
                "Password must have at least one letter"
            )
            .matches(/^(?=.*?[0-9]).+$/,
                "Password must have at least one number"
            )
            .max(30,
                "Password must be less than 30 characters"
            )
            .required("Enter a password"),
        confirmPass: yup
            .string()
            .required("You must confirm your password")
            .oneOf([yup.ref('password')], 'Passwords must match')
      });

    const singUp = (user) => {
        return fetch(baseUrl + 'api/users/singup', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
                if (response.ok) {
                    return response;
                }
                else if (response.status === 409){
                    return response;
                }
                else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => { return response.json()})
        .catch(error => {
           return error
        });
    };


    return (
        <motion.div className='container-sm text-center sign-up-box' initial={{opacity: .2}} animate={{opacity: 1}} exit={{opacity:.2}}>
            <Formik
                initialValues={{
                    firstname: '',
                    lastname: '',
                    email:'',
                    password:'',
                    confirmPass:''}}
                validationSchema={newUserSchema}
                status={{validationSubmission: false}}
                onSubmit={async (values, actions) =>{
                    let singupRequest = await singUp(values)
                    if (singupRequest.success){
                        actions.setStatus(true)
                    }
                    else if (singupRequest.err.name == 'UserExistsError'){
                        alert("User already exists, try a different email")
                        actions.resetForm({values: {...values, email:'', password: '', confirmPass: ''}})
                    }
                }}
            >
            {formik => 
            (formik.status)?
                <Singupsuccess/>:
                <>
                <div className="h2">Sign up for <span className='logo'>Acend</span></div>
                <small>Become a member and enjoy our rewards!</small>
                <Form className='text-left mt-4 mx-4' onSubmit={formik.handleSubmit}>
                    <TextField label="First Name" name="firstname" type="text"></TextField>
                    <TextField label="Last Name" name="lastname" type="text"></TextField>
                    <TextField label="Email" name="email" type="text"></TextField>
                    <TextField label="Password" name="password" type="password"></TextField>
                    <TextField label="Confirm password" name="confirmPass" type="password" ></TextField>
                    <Button disabled={ !formik.dirty || formik.isSubmitting || !formik.isValid} type="submit" className='w-100 mt-2' value="submit" color="primary"  >Sign up</Button>
                </Form>
                </>
                }
            </Formik>
        </motion.div>
    )
  }
  export default Signup