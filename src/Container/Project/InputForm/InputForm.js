import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { add } from 'date-fns';


const useStyles = makeStyles({
  root: {
    position: 'sticky',
    width: 275,
    bottom: 0,
    left: window.innerWidth - 375,
    background: 'white',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: 'fixed',
});

function InputCard(props) {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-06-02T21:11:54'));
  const [titleText, setTitleText] = React.useState("");
  const [contentText, setcontentText] = React.useState("");
  const handleDateChange = (date) => { setSelectedDate(date); };
  const handleTitleChange = (title) => { setTitleText(title.target.value); };
  const handleContentChange = (content) => { setcontentText(content.target.value); };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
        <TextField
          id="filled-full-width"
          label="Title"
          style={{ minWidth: 5 }}
          placeholder="Meeting Title"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={titleText}
          onChange={handleTitleChange}
          variant="filled"
        />
        <TextField
          id="filled-full-width"
          label="Content"
          style={{ minWidth: 5 }}
          placeholder="Meeting Content"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={contentText}
          onChange={handleContentChange}
          variant="filled"
        />
      </CardContent>
      <CardActions>
        <Button size="small" style={{ left: 175 }} onClick={() => props.output({
          date: selectedDate.toString(),
          title: titleText,
          content: contentText,
          click: true
        }
        )}>Submit</Button>
      </CardActions>
    </Card>
  )
}

export default InputCard;