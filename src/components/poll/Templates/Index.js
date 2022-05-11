import { useState } from 'react'
import { Container, Box, Grid, Paper, FormControl} from '@mui/material'
import { styled } from '@mui/material/styles'
import PollHeader from './header/Index'
import PollSide from './side/Index'
import PollBody from './body/Index'

const Div = styled(Paper)((props) => ({
    color: "#6B8068",
    backgroundColor: props.myColor,
    padding: 3,
    width: 90, 
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ".MuiButton-root": { color: "#FF0000" }
}));

const Poll = () => {

    const [inputHeader, setInputHeader] = useState('');
    const [inputBody, setInputBody] = useState('');
    const [imageHeader, setImageHeader] = useState('');
    const [imageBody, setImageBody] = useState('');

    
    return (
        <Container>
            <Container>
                <Box>
                    <FormControl fullWidth>
                        <Grid container>
                            <Grid item xs={8}>
                                <Div style={{ marginBottom:10 }}>{"Header"}</Div>
                                    <PollHeader display="flex" inputHeader={inputHeader} imageHeader={imageHeader} setImageHeader={setImageHeader} setInputHeader={setInputHeader}/>

                                <Div style={{ marginTop:20 }}>{"Body"}</Div>
                                    <PollBody display="flex" inputBody={inputBody} imageBody={imageBody} setInputBody={setInputBody} setImageBody={setImageBody}/>
                            </Grid>

                            <Grid item xs={4}> 
                                <PollSide setInputHeader={setInputHeader} setInputBody={setInputBody} setImageHeader={setImageHeader} setImageBody={setImageBody} />
                            </Grid>
                        </Grid>
                    </FormControl>
                </Box>
            </Container>
        </Container>
    )
}

export default Poll;