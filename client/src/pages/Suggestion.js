import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Suggestion = ({ user }) => {

	const classes = useStyles();
	const flowerurl= `https://www.yelp.com/search?find_desc=Wedding%20flower%20arrangments&find_loc=${user.zipcode}`
	const venueurl= `https://www.yelp.com/search?find_desc=Wedding%20Venues&find_loc=${user.zipcode}`
	const bridalshopurl= `https://www.yelp.com/search?find_desc=Bridal%20Dress%20Shops&find_loc=${user.zipcode}`

	
	return (
		<div className="suggestion-container">
		<div className={classes.root}>
		<h1> Bride<span style={{textDecoration: "line-through"}}>zilla</span>'s Suggestions</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Flower Arrangements</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  <a href={flowerurl} target="_blank">
          Here are some flower shops most brides use near your area. 
		  </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Wedding Registry</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  <a href="https://www.zola.com/" target="_blank" >
            All our bride's here at bridezilla use Zola for all things wedding registry. 
			</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
	  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Wedding Venue</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  <a href={venueurl} target="_blank" >
            Here are some wedding venues near you <br />
			</a>
			<a href="https://www.hitched.co.uk/wedding-planning/honeymoon-articles/destination-wedding/" target="_blank" >
			or if you are feeling spontaneous here are some top rated wedding destinations
			</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Bridal Shops</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  <a href={bridalshopurl} target="_blank" >
            Here are some popular bridal dress shops near you <br />
			</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Honeymoon</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  <a href="https://travel.usnews.com/rankings/best-honeymoon-destinations/" target="_blank" >
            Here are some of the best honeymoon destinations in the world <br />
			</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
	</div>
	)
}

export default Suggestion
