import { Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useInputView } from './useInputView';

interface InputViewProps {
  onSendClicked: (m: string) => void;
}

const buttonSX = {
  height: '100%',
  width: '100%',
  backgroundColor: '#d32f2f',
};

const InputView = ({
  onSendClicked,
}: InputViewProps) => {
  const {value, setValue, handleOnSend} = useInputView(onSendClicked);

  return (
    <Grid container spacing={1}>
      <Grid item xs={10}>
        <TextField
          fullWidth
          placeholder="Message"
          sx={{ backgroundColor: '#fff' }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Grid>
      <Grid item xs={2}>
        <Button sx={buttonSX} onClick={handleOnSend} variant="contained">
          Send
        </Button>
      </Grid>
    </Grid>
  );
};

export { InputView };
