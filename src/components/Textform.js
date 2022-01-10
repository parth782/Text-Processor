import React, { useState } from 'react'

export default function Textform(props) {
    const handleonchange = (event) => {
        setText(event.target.value);
    }
    const handleonclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert('Your Text is converted to Uppercase', 'success')
    }
    const handlecopy = () => {
        //let textcopy = document.getElementById('text');
       // textcopy.select();
        navigator.clipboard.writeText(text);
       // document.getSelection().removeAllRanges();
        props.showalert('Your Text is copied', 'success')

    }
    const removespace = () => {
        let newText = text.split(/[  ]+/);// used to spilt words and convert int arrays
        setText(newText.join(" "));
        props.showalert('Your Text is formatted', 'success')
    }
    const handleclear = () => {
        let newtext = "";
        setText(newtext);
        props.showalert('Your Text is cleared', 'success')
    }
    const handleonlower = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert('Your Text is converted to Lowercase', 'success')
    }


    const [text, setText] = useState('');

    return (

        <>
            <div className="container my-5">


                <div className="mb-3">
                    <label htmlFor="text" className="form-label"><h2>{props.heading}</h2></label>
                    <textarea className="form-control" id="text" name="text" value={text} onChange={handleonchange} rows="10" placeholder="Enter Text"></textarea>
                </div>
                <button className="btn btn-primary mx-3 my-2" onClick={handleonclick} disabled={text.length===0} >Capitalize</button>
                <button className="btn btn-warning mx-3 my-2" onClick={handleonlower} disabled={text.length===0} >Covert To lowercase</button>
                <button className="btn btn-danger mx-3 my-2" onClick={handleclear} disabled={text.length===0} >Clear Text</button>
                <button className="btn btn-success mx-3 my-2" onClick={handlecopy} disabled={text.length===0} >Copy Text</button>
                <button className="btn btn-danger mx-3 my-2" onClick={removespace} disabled={text.length===0} >Remove Spaces</button>
            </div>
            <div className="container my-5">
                <h1> <span className="badge bg-secondary">Your Text Summary</span></h1>
                <h2>{ text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters </h2>
                <h3>Time taken to read should be: {0.08 * text.length}minutes</h3>
                <h4> <span className="badge bg-secondary">Preview</span></h4>
                <h5>{text.length > 0 ? text : 'Nothing to preview'}</h5>
            </div>
        </>
    )
}
