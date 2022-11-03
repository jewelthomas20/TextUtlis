import { useState } from "react";
import './text.css'

function TextUtils(props) {
    const [text, setText] = useState("")

    const CopyText =()=> {
        var copyText = document.getElementById("Box");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied to ClipBoard",'success')
    }

    //TextUtils functions
  function upCase() { 
    props.showAlert("Successfully Converted to Upper Case",'success')
    setText(text.toUpperCase()) 
  }

  function lowCase() {
    props.showAlert("Successfully Converted to Lower Case",'success')
    setText(text.toLowerCase()) 
    
     }

function clear() {setText("") }

 
  function reverse() {
    let revdata = text.split("")
    let str = ''
    for (let i = revdata.length - 1; i >= 0; i--) {

      str = str + revdata[i]
    }
    props.showAlert("Successfully Reversed the Data",'success')

    setText(str)
  }

  function remSpace() {
    let data = text.split(/[ ]+/)
    props.showAlert("Successfully Removed Blank Space",'success')

    setText(data.join(" "))
  }

    return (
        <div className={props.mode ? "TextContainerBlack" : "TextContainer"}>
            <div className="formCard">
            <h1>Enter Text Below</h1>
                <textarea id="Box" rows={8} cols={115} onChange={(e) => setText(e.target.value)} value={text} placeholder="Enter Your Text" />
                <br />
                <h3>Text Size</h3>
                <p>{text.split(" ").length} Words {text.length} Letters</p>
                <h2>Preview</h2>
                <p style={{wordWrap:"break-word",width:'630px'}}>{text.length>0?text:"Enter something to Preview"}</p>
                <button type="submit" onClick={upCase}  ><b>Upper Case</b></button>
                <button type="submit" onClick={lowCase}><b>Lower Case</b></button>
                <button type="submit" onClick={reverse}><b>Reverse</b></button>
                <button type="submit" onClick={remSpace}><b>Remove Extra Space</b></button>
                <button type="submit"  onClick={CopyText}><b>Copy Text</b></button>
                <button type="submit" onClick={clear}><b>Clear</b></button>
                
            </div>
        </div>
    )
}

export default TextUtils;

