import { useState, useContext } from 'react'
import { styled } from '@mui/material/styles'
import { Link, Redirect } from 'react-router-dom'
import { PollContext } from '../../../../core/context/PollsContext'
import { Box, Paper, Button, Stack, TextField, Typography, FormControl } from '@mui/material'
import WindowSharpIcon from '@mui/icons-material/WindowSharp'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import MenuList from './MenuList'

const StyledPaper = styled(Paper)((props) => ({
    padding: 20, 
    margin: "auto",
    marginTop: 10, 
    borderRadius: 2,
    height: "auto",
    display: "block"
}));

const PollSide = ({ setInputHeader, setInputBody, setImageHeader, setImageBody }) => {
    const [polls, setPolls] = useContext(PollContext);
    const randomNum = (Math.floor(Math.random()*10000000)+1);
    const randomName = "TMP-" + randomNum;
    const [templateName, setTemplateName] = useState('');
    const [redirect,setRedirect] = useState(false);
    const addTemplate = (e) => {
        e.preventDefault()
        setPolls([...polls, {id:randomNum, name:randomName}])
        setRedirect(true)
    }

    return(
        <>
            {redirect?<Redirect to="/templates" />: ''}
            <Link to="/templates" style={{ textDecoration:"none" }}>
                <Button variant="contained" startIcon={<ArrowBackOutlinedIcon />} color="success"  fullWidth> Template List </Button>
            </Link>
            <StyledPaper>
                <FormControl fullWidth>
                    <Box sx={{ width: '100%' }}>
                        <Stack gap={2}>
                            <Stack alignItems="center">
                                <WindowSharpIcon />
                                <Typography variant="button"> Template </Typography>
                            </Stack>
                            <TextField label="Template No." defaultValue={"TMP-" + randomNum} InputProps={{ readOnly: true, }} />
                            <TextField 
                                label="Template Name" 
                                variant="outlined" 
                                value={templateName}
                                onChange={(e)=>setTemplateName(e.target.value)}
                            />
                            <MenuList setInputHeader={setInputHeader} setInputBody={setInputBody} setImageHeader={setImageHeader} setImageBody={setImageBody}/>
                        </Stack>
                        <Stack direction="row" gap={2} sx={{ display: 'grid', gridTemplateColumns: { sm: '1fr 1fr' }, gap: 1,}}>
                            <Button variant="contained">Preview</Button>
                            <Button variant="contained" onClick={addTemplate} >Save</Button>
                        </Stack>     
                    </Box>
                </FormControl>
            </StyledPaper>
        </>
    )
}

export default PollSide;