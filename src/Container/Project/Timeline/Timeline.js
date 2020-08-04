import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ReactComponent as Worker } from '../../../Components/icon/worker.svg';
import { ReactComponent as Engineer } from '../../../Components/icon/engineer.svg';
import { ReactComponent as Teamwork } from '../../../Components/icon/teamwork.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));



function Timeline(props) {
  const classes = useStyles();
  return (
    <div>
    <VerticalTimeline layout={"1-column"}>
      {props.input.map(event => {
        let put_icon
        if ('icon' in event){
          put_icon = event.icon
        }
        else{
          put_icon = <Teamwork fill="white" stroke="white" strokeWidth="1rem" />
        }
        let put_iconStyle
        if ('iconStyle' in event){
          put_iconStyle = event.iconStyle
        }
        else{
          put_iconStyle = { background: 'rgb(33, 150, 243)', color: '#fff' }
        }
        return <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={event.date}
          iconStyle={put_iconStyle}
          icon={put_icon}
        >
          <h3 className="vertical-timeline-element-title" color="black">{event.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{event.subtitle}</h4>
          <p>{event.content}</p>
        </VerticalTimelineElement>
      })}
    </VerticalTimeline>
    </div>
  );
}

export default Timeline;
