import React from  'react'
import file from "./Resume.pdf";
const Resume = ()=>{
return (
    <div>
        <iframe
                style={{ marginLeft:'30%', width: "800px", height: "950px" }}
                src={file}
                type='application/pdf'
                title='title'
        />
    </div>  
)


}
export default Resume;