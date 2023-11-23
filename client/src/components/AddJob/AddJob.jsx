import React, { useState } from 'react';
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";
import { useCreateJobQuery } from '../../hooks/query/useAddJobQuery';

import { Input } from '../Form/Input';
import { Label } from '../Form/Label';
import { Error } from '../Form/Error';
import { Modal } from '../Modal/Modal';

import { convertArrObjToStr, convertFileToBase64, getValueSelect } from '../../utils/misc';
import { toolsData, languagesData, positionData, roleData } from '../../mockData/mockData';
import { useUserContext } from '../../hooks/context/useUserContext';

import '../Form/Form.scss';

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
	const { user } = useUserContext();

	const [open, setOpen] = useState(false);

	const handleToggle = () => {
		setOpen((prev) => !prev);
		reset();
	};

	const onSubmit = async (data) => {

		const base64Logo = await convertFileToBase64(data?.logo[0]);

		const newDataJob = {
			...data,
			languages: convertArrObjToStr(data.languages),
			tools: convertArrObjToStr(data.tools),

			position: data?.position?.label || '',
			role: data?.role?.label || '',

			// position: convertArrObjToStr(data.position),
			// role: convertArrObjToStr(data.role),

			logo: base64Logo,

			new: true,
			featured: true,
		};

		await createJob({ data: newDataJob, email: user?.email });

		reset();

		handleToggle();
	}

	return (
		<div className="add-job-form job-form">

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

					<div className="form-control">
						<Input
							label="Your company logo"
							name="logo"
							type="file"
							placeholder="Company logo"
							accept="image/png, image/jpeg"
							register={register}
						/>
					</div>

					<div className="form-control">
						<Label title="Your position" required={true} />

						<Controller
							control={control}
							name='position'
							rules={{
								required: "This field is required!",
							}}
							render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
								<>
									<Select
										placeholder='Senior Frontend Developer'
										options={positionData}
										value={getValueSelect(value, positionData)}
										onChange={(newValue) => onChange(newValue)}

										className="react-select-container"
										classNamePrefix="react-select"
										onBlur={onBlur}
									/>

									{error &&
										<Error value={error.message} />
									}
								</>
							)}
						/>
					</div>

					<div className="form-control">
						<Label title="Your role" />

						<Controller
							control={control}
							name='role'
							render={({ field: { onChange, onBlur, value } }) => (
								<>
									<Select
										placeholder='Frontend'
										options={roleData}
										value={getValueSelect(value, roleData)}
										onChange={(newValue) => onChange(newValue)}

										className="react-select-container"
										classNamePrefix="react-select"
										onBlur={onBlur}
									/>
								</>
							)}
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
							render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
								<>
									<Select
										isMulti
										placeholder='Languages'
										options={languagesData}
										value={getValueSelect(value, languagesData)}
										onChange={(newValue) => onChange(newValue)}

										className="react-select-container"
										classNamePrefix="react-select"
										onBlur={onBlur}
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
							render={({ field: { onChange, onBlur, value } }) => (
								<>
									<Select
										isMulti
										placeholder='Tools'
										options={toolsData}
										value={getValueSelect(value, toolsData)}
										onChange={(newValue) => onChange(newValue)}
										onBlur={onBlur}
										className="react-select-container"
										classNamePrefix="react-select"
									/>
								</>
							)}
						/>
					</div>
					<div className='mt-5 w-full'>
						<button className="btn" disabled={!isValid}>Save</button>
					</div>
				</form>
			</Modal>
		</div>
	)
}
export { AddJob };