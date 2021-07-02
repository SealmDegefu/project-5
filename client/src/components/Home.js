import React, { useEffect, useRef, useState } from 'react';
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import './Home.css'

const Home = ({ user }) => {
	const [timerDays,setTimerDays] = useState('00')
	const [timerHours,setTimerHours] = useState('00')
	const [timerMinutes,setTimerMinutes] = useState('00')
	const [timerSeconds,setTimerSeconds] = useState('00')

	let interval = useRef();
	const startTimer = () =>{
		const countdownDate = new Date(`${user.wedding_date}`).getTime();
		interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countdownDate - now;

			const days = Math.floor(distance / (1000 * 60 * 60 * 24 ));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60) ));
			const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60) ));
			const seconds= Math.floor((distance % (1000 * 60) / 1000));

			if (distance < 0){
				//stop timer
				clearInterval(interval.current)
			} else{
				//update timer
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		}, 1000)
	}

	useEffect(() => {
		startTimer();
		return () => {
			clearInterval(interval.current)
		}
	})
  return (
	  <div>
	  <Confetti>
	  </Confetti>
		<center>
    <section className="timer-container">
		<section className="timer">
			<div>
      			<h2>Count Down Before The Big Day</h2>
	  		</div>
	  		<div>
	  			<section>
		  			<p>{timerDays}</p>
		  			<p><small>Days</small></p>
	  			</section>
	  			<span>:</span>
	  			<section>
		  			<p>{timerHours}</p>
		  			<p><small>Hours</small></p>
	  			</section>
	  			<span>:</span>
	  			<section>
		  			<p>{timerMinutes}</p>
		  			<p><small>Minutes</small></p>
	  			</section>
	  			<span>:</span>
	  			<section>
		  			<p>{timerSeconds}</p>
		  			<p><small>Seconds</small></p>
	  			</section>
      </div>
	  </section>
    </section>
	  </center>
	  </div>
	  
  );
}

export default Home
