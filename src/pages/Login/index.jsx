import React, {useState, useEffect} from 'react';
import { FormControl, Input, FormHelperText, Grid } from '@mui/material';

const Login = () => {
  const [login, setLogin] = useState("");

  return (
    <Grid item xs={12}>
      <FormControl fullWidth>
        <Input id="login_nome" aria-describedby="login_nome_helper_text" value={login} onChange={e => { setLogin(e.target.value) }} />
        <FormHelperText id="tarefa_titulo_helper_text">Título da Tarefa.</FormHelperText>
      </FormControl>
    </Grid>
  );
}

export default Login;