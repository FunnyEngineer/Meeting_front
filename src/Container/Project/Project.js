import React from 'react';
import Timeline from './Timeline/Timeline';
import Headbar from './Headbar/Headbar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import InputForm from './InputForm/InputForm';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as Worker } from '../../Components/icon/worker.svg';
import { ReactComponent as Engineer } from '../../Components/icon/engineer.svg';
import { ReactComponent as Teamwork } from '../../Components/icon/teamwork.svg';
import axios from 'axios';

function Project() {

    const btnStyle = {
        position: 'sticky',
        bottom: 10,
        left: window.innerWidth - 80,
        background: 'white',
    }

    const [showInput, setShowInput] = React.useState(false)
    const showLo = () => setShowInput(!showInput)

    const [Input, setInput] = React.useState([
        {
          date: "2011 - present",
          title: "Creative Director",
          subtitle: "Miami, FL",
          iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
          icon: <Engineer stroke="white" strokeWidth="1rem" />,
        },
        {
          date: "2010 - 2011",
          title: "Art Director",
          subtitle: "San Francisco, CA",
          content: "Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
          iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
          icon: <Engineer stroke="white" strokeWidth="1rem" />,
        },
        {
          date: "2006 - 2008",
          title: "Web Designer",
          subtitle: "San Francisco, CA",
          content: "User Experience, Visual Design",
          iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
          icon: <Teamwork fill="white" stroke="white" strokeWidth="1rem" />,
        }
      ])

    const GetDataFromForm = (newDict) => {
      setInput([...Input, newDict]);
      console.log(Input);
      let currentIds = Input.map((data) => data.id);
      let idToBeAdded = 0;
      while (currentIds.includes(idToBeAdded)) {
        ++idToBeAdded;
      }
  
      axios.post('http://localhost:4000/backend/putData', {
        id: idToBeAdded,
        dict: newDict,
      });
    }
    return (
        <div>
            <Headbar />
            <Timeline input={Input} />
            <IconButton onClick={showLo} style={btnStyle} aria-label="delete" color="primary" edge="start" >
                <AddIcon fontSize="large" />
            </IconButton>
            {showInput ? <InputForm output={GetDataFromForm} /> : null}
        </div>

    );
}

export default Project;