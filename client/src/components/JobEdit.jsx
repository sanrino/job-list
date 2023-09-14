import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Select from 'react-select';
import { Controller, useForm } from 'react-hook-form';

import { Error } from './Form/Error';
import { Input } from './Form/Input';
import { Label } from './Form/Label';
import { Loading } from './Loading/Loading';

import { useJobIdQuery } from '../hooks/query/useJobIdQuery';
import { useUpdateJobQuery } from '../hooks/query/useUpdateJobQuery';
import { useDeleteJobQuery } from '../hooks/query/useDeleteJobQuery';

import { languagesData, toolsData } from '../mockData/mockData';
import { convertArrObjToStr } from '../utils/misc';
import { PROFILE_ROUTE } from '../utils/consts';

import './Form/Form.scss';

const JobEdit = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const { isLoading, isFetching, job } = useJobIdQuery(id);

  const { updateJob } = useUpdateJobQuery();
  const { deleteJobById } = useDeleteJobQuery();

  const defaultStringValue = '';

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
  }

  const deleteJob = async (event, id) => {
    event.preventDefault();

    await deleteJobById(id);
  }

  return (
    <div className='edit-job-form job-form container'>

      {
        isLoading || isFetching ? <Loading /> : <div className='add-job-form'>
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
              <button className="btn ml-3" type='button' onClick={(event) => deleteJob(event, job?.id)}>Delete</button>
            </div>
          </form>
        </div>
      }
    </div>
  )
}

export { JobEdit };