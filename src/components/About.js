import React,{useState} from 'react'

export default function About() {
    const[myStyle,setStyle]=useState({
        color:'black',
        backgroundColor:'white',
    });
    const[btntext,setbtntext]=useState('Enable Dark Mode');
   
       
    const handledark=()=>{
        console.log("clicked")
       if(myStyle.color==='black'){
           setStyle({
            backgroundColor:'black',
            color:'red',
            border:'1px white solid'
           })
           setbtntext('Enable Light Mode')
       }
       else{
           setStyle({
            color:'black',
            backgroundColor:'white',
       
           })
           setbtntext('Enable Dark Mode')
        }
       }
    
    return (
        <div className="container my-5" style={myStyle}>
            <h1 className="text-center my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This is the website used to analyze text and to perform various operations on it. It analyzes quickly and efficiently.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                           It is completely free to use. It provides character count,word count and reading time for given text, It also provides text formatter.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            It is compatible with all types of browsers.
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary my-3" onClick={handledark}>{btntext}</button>
            </div>

        </div>
    )
}
