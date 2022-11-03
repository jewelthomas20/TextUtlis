import {BrowserRouter as Router,Link} from "react-router-dom";


function Navbar(props){

    return(
    < nav className="NavBar" style={{backgroundColor:props.data===false?"":"black"}}>
    <h1>TextUtils</h1>
    <Router >
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
</Router>
{props.data? <div className="form-check form-switch bar">
<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked onChange={()=>{props.modeStatus(false)}}/>
<label className="form-check-label" htmlFor="flexSwitchCheckChecked">Turn off Dark Mode</label>
</div>
:<div className="form-check form-switch  bar"> <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={()=>props.modeStatus(true)}/>
<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label> </div>}
  

</nav>
    )
}

export default Navbar