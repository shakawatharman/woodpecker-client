import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const FAQ = () => {
    return (
        <div className="container">
            <h2 className="text-uppercase text-center my-5">frequently asked questions</h2>
            
          <div className="row">
          <div className="col-md-6 mt-5 py-3">
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="fw-bold">Do you have any showroom?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Though our activities are mostly online based, but we have a showroom. It is situated in Chattogram,Fatickcchari.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="fw-bold">How do you deliver your product?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We deliver our products by Sundarban Courier Service & Continental Courier Service, if our client is local. Otherwise we use RedEx for international delivery.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className="fw-bold">How much does your delivery cost?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We demand 100 BDT for local delivery & $5 for international delivery.
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className="fw-bold">Do you have repay system?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It depends. If something goes wrong for our fault, we will repay you. But if the problem would create from your side, then we won't repay.
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className="fw-bold">How can I contact with you?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           You can check our website. We mentioned our contact information in the lower section. Besides you can visit physically and see our shop. 
            </Typography>
        </AccordionDetails>
      </Accordion>
            </div>

            <div className="col-md-6">
                <img className="w-100" src="https://media.istockphoto.com/vectors/vector-illustration-concept-illustration-of-people-frequently-asked-vector-id1222300875?k=20&m=1222300875&s=612x612&w=0&h=0fPv8I3VgzXa_Opm2JTj5-JHEVQdJiFHKXROQ0Plwf8=" alt="" />
            </div>
            </div>   

        </div>
    );
};

export default FAQ;