import React, {useState} from 'react';
import {Stack} from "@mui/material";
import ButtonPink from "./ui/ButtonPink";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';


const TextFieldStyled = styled(TextValidator)(() => ({
    background: "#FFFFFF", border: "none", outline: "none", '& .MuiOutlinedInput-notchedOutline': {
        border: "1px solid #D9DDFE", borderRadius: "1.5rem",
    }, marginBottom: "3.8rem",
}))

function ContactUsForm() {
    const [email, setEmail] = useState();

    const handlerChange = (event) => {
        const email = event.target.value;
        setEmail(email);
    }
    const handlerSubmit = () => {
        console.log("Fake form")
    }
    return (
        <Box
            // component="form"
            noValidate
            autoComplete="off"
            width="100%"
            sx={{
                "& .MuiFormControl-root.MuiTextField-root ": {
                    borderRadius: "1.5rem",
                },
            }}
        >
            <ValidatorForm
                onSubmit={handlerSubmit}
                onError={errors => console.log(errors)}
            >
                <Stack direction={{lg: "row", xs: "column"}} spacing={4} justifyContent="space-between" sx={{
                    "& .MuiFormControl-root": {
                        width: {
                            xs: "100%",
                        }
                    }
                }}>
                    <TextFieldStyled
                        InputLabelProps={{required: false}}
                        required
                        id="outlined-basic"
                        label="First Name"
                        color="darkblue"
                    />
                    <TextFieldStyled
                        InputLabelProps={{required: false}}
                        required
                        id="outlined-basic"
                        label="Last Name"
                        color="darkblue"
                    />
                </Stack>
                <TextFieldStyled
                    InputLabelProps={{required: false}}
                    required
                    fullWidth
                    id="outlined-basic"
                    label="Email Address"
                    color="darkblue"
                    onChange={handlerChange}
                    validators={['required', 'isEmail']}
                    errorMessages={['Required', 'Email is not valid']}
                    value={email}
                />
                <TextFieldStyled
                    InputLabelProps={{required: false}}
                    required
                    fullWidth
                    id="outlined-basic"
                    label="Subject Message"
                    color="darkblue"
                />
                <TextFieldStyled
                    InputLabelProps={{required: false}}
                    required
                    fullWidth
                    id="outlined-basic"
                    label="Your inquiry here"
                    multiline
                    rows={8}
                    color="darkblue"
                />
                <ButtonPink type="submit" sx={{marginTop: "2rem"}}>Send Message</ButtonPink>
            </ValidatorForm>

        </Box>
    );
}

export default ContactUsForm;