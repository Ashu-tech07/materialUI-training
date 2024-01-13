import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React,{useState} from 'react'


const Accordian = () => {
    const [expanded, setExpanded]=useState(false)
    const handleChange=(panel)=>(event, isexpanded)=>{
        setExpanded(isexpanded?panel:false);
    }

    // const handleChange=()=>{
    //     setExpanded((prevExpanded)=>!prevExpanded)
    // }
    
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                >
                    <Typography>Basic Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel2a-content'
                    id='panel2a-header'
                >
                    <Typography>Basic Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
             
            <Accordion expanded={expanded==='panel1'}
            onChange={handleChange('panel1')} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1b-content'
                    id='panel1b-header'
                >
                    <Typography>Controlled Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded==='panel2'}
            onChange={handleChange('panel2')} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel2b-content'
                    id='panel2b-header'
                >
                    <Typography>Controlled Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            

        </div>
    )
}

export default Accordian
