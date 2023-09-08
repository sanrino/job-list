import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useLoginQuery } from '../../hooks/query/useLoginQuery';
import { Error } from '../Form/Error';
import { Input } from '../Form/Input';
import { REGISTRATION_ROUTE } from '../../utils/consts';

const Login = () => {
  const { login } = useLoginQuery();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset

  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    await login(data);
    reset();
  };

  return (
    <div className="auth-form job-form container">
      {
        <h1>Sign in</h1>
      }
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
          <button className="btn" disabled={!isValid}>Sign in</button>
          <p className='my-5'>
            Need an Account? <Link to={REGISTRATION_ROUTE}>Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export { Login };