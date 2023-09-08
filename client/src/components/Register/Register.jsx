import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useRegisterQuery } from '../../hooks/query/useRegisterQuery';
import { Error } from '../Form/Error';
import { Input } from '../Form/Input';
import { LOGIN_ROUTE } from '../../utils/consts';

const Register = () => {
  const { registration } = useRegisterQuery();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,

  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    await registration(data);
  };

  return (
    <div className="auth-form job-form container">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <Input
            label="Email"
            name="email"
            placeholder="Email"
            register={register}
            required="This field is required!"
          />

          {errors?.email && <Error value={errors?.email.message} />}
        </div>

        <div className="form-control">
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            register={register}
            required="This field is required!"
          />

          {errors?.password && <Error value={errors?.password.message} />}
        </div>

        <div className='my-5'>
          <button className="btn" disabled={!isValid}>Create account</button>
          <p className='my-5'>
            Already have an account? <Link to={LOGIN_ROUTE}>Sign In</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export { Register };