export const selectedValues = (values, data) => {
  let obj = [];

  values?.split(' ').map((element) => {
    (
      data.find(item => {
        if (item.label === element.replace(',', '')) {
          obj = [...obj, item]
        }
      })
    )
  })
  return obj;
}

export const selectedValue = (value, data) => {
  let obj = [];
  data.find(item => {
    if (item.label === value.replace(',', '')) {
      obj = [...obj, item]
    }
  });

  return obj;
}

export const getValueSelect = (value, options) => {
  return value ? options.find((option) => option.value === value) : ''
}

export const convertArrObjToStr = (obj) => {
  const labels = obj?.map(item => item.label) || [];
  return labels.join(', ');
};

export const convertFileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve(''); // Return an empty string if there's no file
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
};