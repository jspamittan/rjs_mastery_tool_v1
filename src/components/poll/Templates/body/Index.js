import { Container, Box, TextField, FormControl, Button, Stack } from '@mui/material'
import PollOption from './PollOption'

const PollBody = ({ inputBody, imageBody, setInputBody, setImageBody }) => {

    return(
        <Container sx={{ marginBottom:5, }}>
            <Box>
                <FormControl fullWidth>
                    {inputBody === "BodyInput" && 
                        <Box>
                            <FormControl fullWidth>
                                <Stack direction="row" justifyContent="center" alignItems="center" gap={2} sx={{ display: 'grid', gridTemplateColumns: { sm: '100fr 1fr' }}}> 
                                    <TextField id="filled-basic" label="Input Text #2" variant="filled" sx={{ marginTop:2, }} disabled />
                                    <Button variant="contained" color="error" sx={{ display:"inline", height:40, }} onClick={() => setInputBody("Remove")}>
                                        X
                                    </Button>
                                </Stack>
                            </FormControl>
                        </Box>}
                    {imageBody === "BodyImage" && 
                        <Box>
                            <FormControl fullWidth>
                                <Stack direction="row" justifyContent="center" alignItems="center" gap={2} sx={{ display: 'grid', gridTemplateColumns: { sm: '100fr 1fr' }}}>        
                                    <Button variant="contained" component="label" sx={{ height:300, marginTop:2, }} disabled>
                                        Upload File <input type="file" accept="image/* " hidden />
                                    </Button>
                                    <Button variant="contained" color="error" sx={{ display:"inline", height:40, }} onClick={() => setImageBody("Remove")}>
                                        X
                                    </Button>
                                </Stack>
                            </FormControl>
                        </Box>}
                </FormControl>
                <PollOption />   
            </Box>
        </Container>
    )
}

export default PollBody;