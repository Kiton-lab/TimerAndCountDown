// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {
	//Countdown Date And Timer
	const [timerDays, setTimerDays] =  useState('00');
	const [timerHours, setTimerHours] =  useState('00');
	const [timerMins, setTimerMins] =  useState('00');
	const [timerSeconds, setTimerSeconds] =  useState('00');

	let interval = useRef();

	const startTimer = () =>{
		const countDownDate = new Date('April 30, 2022 00:00:00').getTime();

		interval = setInterval(() => {
			const nowDate = new Date().getTime();
			const distance = (countDownDate - nowDate) / 1000;

			const days = Math.floor(distance / 3600 / 24);
			const hours = Math.floor(distance / 3600) % 24;
			const mins = Math.floor(distance / 60) % 60;
			const seconds = Math.floor(distance) % 60;

			if(distance < 1) {
				clearInterval(interval.current);
			} else {
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMins(mins);
				setTimerSeconds(seconds);
			}

		}, 1000);
	};

	useEffect(() => {
		startTimer();
		return () => {
			clearInterval(interval.current);
		};
	});


	//Date And Times
	const [dateTime, setDateTime] =  useState(new Date());

	useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);

	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<h3>ยินดีต้อนรับเข้าสู่</h3>
				<p>
					ระบบสารสนเทศเพื่อการจัดการแผนที่และสารบบที่ดิน
				</p>
				<p>
					อีก
				</p>
				<div className='inlinecss'>
					<section>
						<h2>{timerDays}</h2>
						<p><small>days</small></p>
					</section>
					<section>
						<h2>{timerHours}</h2>
						<p><small>hours</small></p>
					</section>
					<section>
						<h2>{timerMins}</h2>
						<p><small>mins</small></p>
					</section>
					<section>
						<h2>{timerSeconds}</h2>
						<p><small>seconds</small></p>
					</section>
				</div>
				<p>
					โดย
				</p>
				<p>
					กลุ่มวิชาการมาตรฐานแผนที่
				</p>
				<p>
					สำนักจัดการแผนที่และสารบบที่ดิน
				</p>
				<p>
					สำนักงานการปฏิรูปที่ดินเพื่อเกษตรกรรม
				</p>
				<p>
					{ `~ ${dateTime.toLocaleString('TH')} ~` }
				</p>
			</header>
		</div>
	);
}

export default App;
