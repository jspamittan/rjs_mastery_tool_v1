import React, { useState } from 'react';
import { Stack, Button, Box } from '@mui/material'

const PollOption = () => {
  
    const [optionList,setOptionList] = useState([
        { id:1, option: ""},
    ]);

    const handleOptionAdd = () => {
        setOptionList([...optionList, {id:optionList.length+1, option: ""}])
    }
    
    const handleOptionRemove = (indexOption) => {
        const list = [...optionList];
        list.splice(indexOption, 1);
        setOptionList(list)
        
        // console.log(optionList.filter((v,i)=>i !== indexOption ? {...v} : null));
        // setOptionList(optionList.filter((v,i)=>{return i !== indexOption }));
    }

    return(
        <>
            {optionList.map((singleOption, indexOption) => ( 
                <Box key={indexOption} sx={{marginTop:1, }}>
                    <Stack direction="row" justifyContent="center" alignItems="center" gap={2} sx={{ display: 'grid', gridTemplateColumns: { sm: '100fr 1fr' }}}>
                    <Button variant="contained">Option {indexOption+1}</Button>
                    {optionList.length > 1 && (
                        <Button variant="contained" color="error" onClick={() => handleOptionRemove(indexOption)}>X</Button>
                    )}
                    </Stack>
                    {optionList.length - 1 === indexOption && optionList.length < 4 && (
                        <Button variant="contained" color="success" sx={{marginTop:1, }} onClick={handleOptionAdd}>Add Option</Button>
                    )}
                </Box>
            ))}        
        </>
    )
}

export default PollOption;