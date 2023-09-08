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

export const getValueSelect = (value, options) => {
  return value ? options.find((option) => option.value === value) : ''
}

export const convertArrObjToStr = (obj) => {
  const labels = obj?.map(item => item.label) || [];
  return labels.join(', ');
};