import axios from 'axios';

const URL = `https://pixabay.com/api/`;
const API_KEY = '32589447-ffbdd7a8f0a573b29764024b7';

export const onSearch = (name, page) => {
  const response = axios.get(`${URL}`, {
    params: {
      key: API_KEY,
      q: name,
      page: `${page}`,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });
  return response;
};

// import axios from 'axios';

// const URL = `https://pixabay.com/api/`;
// const API_KEY = '32589447-ffbdd7a8f0a573b29764024b7';

// export const onSearch = (searchName, page) => {
//   const response = axios.get(`${URL}`, {
//     params: {
//       key: API_KEY,
//       q: searchName,
//       page: page,
//       per_page: 12,
//       image_type: 'photo',
//       orientation: 'horizontal',
//     },
//   });

//   return response;
// };

// export default {
//   onSearch,
// };
