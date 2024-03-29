import { useEffect,useState } from "react"
export default function Contact(){
	var [height,setHeight]=useState('100px')
	useEffect(()=>{
		var css=getComputedStyle(document.querySelector('.App'))
		setHeight(css.height)
	},[])
	return (
		<div className='col-darkblue'>
			<div id="Contact" style={{height:height}}
			/>
			<div id="contact" style={{
				height:'100vh'}}>
				<form action="mailto:abhiquanta123@gmail.com"
					method="post"
					enctype="text/plain"
				>
					<h2>Hire Me</h2>
					<p>Contact me through my email. Send Hi.
					</p>
					<label htmlFor="Name">Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
					/>
					<label htmlFor="Mail">Email
					</label>
					<input
						type="email"
						id='email'
						name="email"
					/>
					<label htmlFor="Message">Message
					</label>
					<textarea
						id="msg"
						name="msg"
					/>
					<button
						onClick={e=>e.preventDefault()}
						type="submit"
					>Submit
					</button>
				</form>
			</div>
		</div>
	)
}
