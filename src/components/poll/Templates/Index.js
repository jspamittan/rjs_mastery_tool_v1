import React from 'react'
import Headers from './TemplateHead';
import Bodies from './TemplateBody';
import Rside from './TemplateSide';
export const Templates = () => {
  return (
    <>
       <div className="d-flex mh-100">            
            <div className="w-75 d-inline mh-100">
                <div className="headers d-block w-100 h-25 border-bottom border-dark">
                    <Headers />
                </div>
                <div className="bodies d-block w-100 h-75 ">
                    <Bodies />
                </div>
            </div>
            <div className="w-25 d-flex mh-100 d-inline">
                <Rside />
            </div>
        </div> 
    </>
  )
}