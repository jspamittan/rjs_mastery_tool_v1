import { React } from 'react';
import { AddImage } from "./Body/AddImage";
const bodies = () => {
  return (
    <>
        <div className="p-3 bg-white vh-100 mh-100 w-100">
            <span className="border border-secondary bg-white p-2 px-3 h-25 " style={{width: "150px"}} >Body</span>
            <div className="center mx-auto mt-2">
                <AddImage />
                <div className='mt-5 mb-3'>
                    <div className="page-header text-primary rounded border-secondary bg-light d-inline p-4 h-25" style={{width: "15%"}} >Option 1</div>
                    <div className="page-header text-primary rounded border-secondary bg-light d-inline ms-5 p-4 h-25" style={{width: "15%"}} >Option 2</div>
                    <div className="page-header text-primary rounded border-secondary bg-light d-inline ms-5 p-4 h-25" style={{width: "15%"}} >Option 3</div>
                    <div className="page-header text-primary rounded border-secondary bg-light d-inline ms-5 p-4 h-25" style={{width: "15%"}} >Option 4</div>
                </div>
                <div className="center border mt-5 border-secondary p-0 rounded-1" style={{width: "100px"}}> Button </div>
            </div>
        </div>
    </>
  )
}

export default bodies;