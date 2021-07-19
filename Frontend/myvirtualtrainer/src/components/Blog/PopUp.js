import React from 'react'
import './PopUp.css'
function PopUp(props) {
	return(
		<div class= "container2">
			<div class="popUp">
				<div class="topBar">
					<span onClick = {props.closePopUp} class="exit"> X </span>
				</div>
				<img src = {`data:image/png;base64,${props.data.image}`} alt="" class="thumbnail"/>
				<h3 class="title"> {props.data.title} : {props.data.publishingDate.substring(0,10)} </h3>
                <h2 class="title"> {props.data.category} </h2>
                <div className="form-group">
                <textarea
                  className="form-control"
                  rows="8"
                  value={props.data.content} 
                  disabled
                ></textarea>
              </div>
						
			</div>
		</div>
		
	)
}

export default PopUp;