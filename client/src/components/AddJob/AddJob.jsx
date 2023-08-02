import React, { useState } from 'react';
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";
import { useCreateJobQuery } from '../../hooks/useAddJobQuery';

import { Input } from '../Form/Input';
import { Label } from '../Form/Label';

import { tools, languages } from '../../mockData/mockData';

import { Error } from '../Form/Error';
import { Modal } from '../Modal/Modal';
import { useFiltersContext } from '../../hooks/useFiltersContext';
import { useAllJobsQuery } from '../../hooks/useAllJobsQuery';

import './AddJob.scss';

export const getValue = (value, options) => {
	return value ? options.find((option) => option.value === value) : ''
}

const AddJob = () => {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		control,
		reset,

	} = useForm({
		mode: 'onBlur',
	});

	const { createJob } = useCreateJobQuery();

	const { filtersСurrent } = useFiltersContext();
	const { refetch } = useAllJobsQuery(filtersСurrent);

	const [open, setOpen] = useState(false);

	const handleToggle = () => {
		setOpen((prev) => !prev);
		reset();
	};

	const onSubmit = async (data) => {
		const convertArrObjToStr = (obj) => ((obj.map((item) => item.label.trim())).toString());
		const newDataJob = {
			...data, languages: convertArrObjToStr(data.languages),
			tools: convertArrObjToStr(data.tools),
			new: true,
			featured: true
		};

		await createJob(newDataJob);
		await refetch();

		reset();

		handleToggle();
	}

	return (
		<div className="add-job-form">

			<button className="btn" onClick={handleToggle}>
				+ Add job
			</button>

			<Modal open={open} onClose={handleToggle}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h3>Add job</h3>
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

					{/* <div className="form-control">
					<Input
						label="Your email"
						name="email"
						register={register}
						required="This field is required!"
					/>

					{errors?.email && <Error value={errors?.email.message} />}
				</div> */}

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
							render={({ field: { onChange, value }, fieldState: { error } }) => (
								<>
									<Select
										isMulti
										placeholder='Languages'
										options={languages}
										value={getValue(value, languages)}
										onChange={(newValue) => onChange(newValue)}
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
						<Label title="Your tools" required={true} />

						<Controller
							control={control}
							name='tools'
							rules={{
								required: "This field is required!",
							}}
							render={({ field: { onChange, value }, fieldState: { error } }) => (
								<>
									<Select
										isMulti
										placeholder='Tools'
										options={tools}
										value={getValue(value, tools)}
										onChange={(newValue) => onChange(newValue)}
										className="react-select-container"
										classNamePrefix="react-select"
									/>
									{error &&
										<div className="error-message">{error.message}</div>
									}
								</>
							)}
						/>
					</div>
					<div className='my-5'>
						<button className="btn" disabled={!isValid}>Save</button>
					</div>
				</form>
			</Modal>
		</div>
	)
}
export { AddJob };