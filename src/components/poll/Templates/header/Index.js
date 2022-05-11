import { Container, Box, TextField, FormControl, Button, Stack } from '@mui/material'

const PollHeader = ({ inputHeader, imageHeader, setImageHeader, setInputHeader }) => {
  
    return(
        <Container>
            <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
                <FormControl fullWidth style={{ m: 1 }} variant="filled">
                    <TextField id="filled-basic" label="Input Text" variant="filled" disabled />
                    {imageHeader === "HeaderImage" && 
                        <Box>
                            <FormControl fullWidth>
                                <Stack direction="row" justifyContent="center" alignItems="center" gap={2} sx={{ display: 'grid', gridTemplateColumns: { sm: '100fr 1fr' }}}>        
                                    <Button variant="contained" component="label" sx={{ height:300, marginTop:2, }} disabled>
                                        Upload File <input type="file" accept="image/* " hidden />
                                    </Button>
                                    <Button variant="contained" color="error" sx={{ display:"inline", height:40, }} onClick={() => setImageHeader("Remove")} >
                                        X
                                    </Button>
                                </Stack>
                            </FormControl>
                        </Box>}
                    {inputHeader === "HeaderInput" && 
                        <Box>
                            <FormControl fullWidth>
                                <Stack direction="row" justifyContent="center" alignItems="center" gap={2} sx={{ display: 'grid', gridTemplateColumns: { sm: '100fr 1fr' }}}> 
                                    <TextField id="filled-basic" label="Input Text #1" variant="filled" sx={{ marginTop:2, }} disabled />
                                    <Button variant="contained" color="error" sx={{ display:"inline", height:40, }} onClick={() => setInputHeader("Remove")}>
                                        X
                                    </Button>
                                </Stack>
                            </FormControl>
                        </Box>}
                </FormControl>           
            </Box>
        </Container>
    )
}

export default PollHeader;