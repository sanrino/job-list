import React from 'react';
import Select from 'react-select';

import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useJobIdQuery } from '../hooks/useJobIdQuery';
import { languagesData, toolsData } from '../mockData/mockData';

import { Error } from './Form/Error';
import { Input } from './Form/Input';
import { Label } from './Form/Label';
import { Loading } from './Loading/Loading';

import { convertArrObjToStr } from '../utils/misc';

import { useNavigate } from "react-router-dom";

import { useUpdateJobQuery } from '../hooks/useUpdateJobQuery';

import './Form/Form.scss';

const JobEdit = () => {

  const { id } = useParams();

  const { isLoading, job } = useJobIdQuery(id);

  const { updateJob } = useUpdateJobQuery();

  const defaultStringValue = '';

  let navigate = useNavigate();

  const values = {
    id: job?.id || defaultStringValue,
    company: job?.company || defaultStringValue,
    logo: job?.logo || defaultStringValue,
    position: job?.position || defaultStringValue,
    role: job?.role || defaultStringValue,
    level: job?.level || defaultStringValue,
    contract: job?.contract || defaultStringValue,
    location: job?.location || defaultStringValue,

    languages: job?.languages,
    tools: job?.tools,
  };

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    control,
  } = useForm({
    mode: 'onBlur',
    values
  });

  const onSubmit = async (data) => {

    const newDataJob = {
      ...data,
      languages: convertArrObjToStr(data.languages),
      tools: convertArrObjToStr(data.tools),

      new: true,
      featured: true
    };

    await updateJob(newDataJob);

    navigate("/");
  }

  return (
    <div className='edit-job-form job-form container'>
      {
        isLoading ? <Loading /> : <div className='add-job-form'>
          <h1>{job?.company}</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <Input
                label="Your company name"
                name="company"
                placeholder="Company name"
                register={register}
                required="This field is required!"
              />

              {errors?.company && <Error value={errors?.company.message} />}
            </div>

            <div className="form-control">
              <Input
                label="Your position"
                name="position"
                placeholder="Senior Frontend Developer"
                register={register}
                required="This field is required!"
              />
              {errors?.position &&
                <Error value={errors?.position.message} />
              }
            </div>

            <div className="form-control">
              <Input
                label="Your role"
                name="role"
                placeholder="Frontend"
                register={register}
              />
            </div>

            <div className="form-control">
              <Input
                label="Your level"
                name="level"
                placeholder="Senior"
                register={register}
              />
            </div>

            <div className="form-control">
              <Input
                label="Your contract"
                placeholder="Full Time"
                name="contract"
                register={register}
              />
            </div>

            <div className="form-control">
              <Input
                label="Your location"
                name="location"
                placeholder="Ukraine only"
                register={register}
              />
            </div>

            <div className="form-control">
              <Label title="Your languages" required={true} />

              <Controller
                control={control}
                name='languages'
                rules={{
                  required: "This field is required!",
                }}
                render={({ field: { onChange, onBlur }, fieldState: { error } }) => (
                  <>
                    <Select
                      isMulti
                      placeholder='Languages'
                      options={languagesData}
                      defaultValue={values?.languages}
                      onChange={(newValue) => onChange(newValue)}
                      onBlur={onBlur}
                      className="react-select-container"
                      classNamePrefix="react-select"
                    />

                    {error &&
                      <Error value={error.message} />
                    }
                  </>
                )}
              />
            </div>

            <div className="form-control">
              <Label title="Your tools" />

              <Controller
                control={control}
                name='tools'
                render={({ field: { onChange, onBlur }, }) => (
                  <>
                    <Select
                      isMulti
                      placeholder='Tools'
                      options={toolsData}
                      defaultValue={job?.tools}
                      onBlur={onBlur}
                      onChange={(newValue) => onChange(newValue)}
                      className="react-select-container"
                      classNamePrefix="react-select"
                    />
                  </>
                )}
              />
            </div>
            <div className='my-5'>
              <button className="btn" disabled={!isValid}>Save</button>
            </div>
          </form>
        </div>
      }
    </div>
  )
}

export { JobEdit };