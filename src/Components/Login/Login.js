import React from 'react';
import { useForm } from "react-hook-form";
const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="firstName" ref={register({ required: true })} />
            {errors.firstName && "First name is required"}
            <input name="lastName" ref={register({ required: true })} />
            {errors.lastName && "Last name is required"}
            <input type="submit" />
        </form>
    );
};

export default Login;