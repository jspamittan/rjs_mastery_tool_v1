import * as React from 'react';
import { BasicTabs } from './Side/Index';
import Crossimg from '../../../assets/images/core/cross.png';

//import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

import { useState } from 'react';

const rside = (props) => {    
  return (
    <>
        <div className="bg-white w-100 p-2 h-100">
            <form class="form-inline p-0" role="form">
                <div className="p-0 center text-start w-75 bg-success border border-secondary" style={{height: "30px", fontSize:"20px"}}> 
                {//<ArrowCircleLeftOutlinedIcon className="fw-bold" fontSize="20px" />
                } Content List
                </div>
                <div className="border border-primary p-0 mt-4 center">
                    <div className="text-info mt-0">
                      <BasicTabs {...props} />
                    </div>
                    {/*<div className='p-0 pb-1 line-height-sm mt-4'>
                       <button className="bg-info p-2 py-1 text-white border border-secondary d-inline w-25 float-left">Preview</button>
                       <button className="bg-success ms-0 p-2 py-1 text-white border border-secondary d-inline w-25 float-right ms-4">Next</button>
                    </div>*/}
                </div>
            </form>
        </div>
    </>
  )
}

export default rside;