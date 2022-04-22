import * as yup from 'yup';

export const inputSchema = yup.object({
  username: yup.string().required('Username is required'),
});
