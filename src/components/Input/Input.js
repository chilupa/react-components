import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import Layout from '../Layout/Layout';
import { useFormik } from 'formik';
import { inputSchema } from '../../validations/inputSchema';

const Input = () => {
  const formik = useFormik({
    initialValues: {
      username: 'johndoe',
    },
    validationSchema: inputSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Layout>
      <form onSubmit={formik.handleSubmit}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField
              id="username"
              name="username"
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </Grid>
          <Grid item>
            <Button type="submit">Submit</Button>
          </Grid>
        </Grid>
      </form>
    </Layout>
  );
};

export default Input;
