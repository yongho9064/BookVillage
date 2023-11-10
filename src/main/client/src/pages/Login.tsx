import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// @ts-ignore
import hav1 from '../assets/Harvard01.png'
import React from "react";

function LoginPage() {

	return (
		<div style={{
			background: 'linear-gradient(to bottom, #3498db, #2980b9, #1f6691, #15547a, #0f3f63)',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh'
		}}>
			<div>
				<img src={hav1} style={{width: '200px', height: '200px', margin: '50px'}} alt="로고"/>
			</div>
			<Form style={{
				backgroundColor: "white",
				border: '2px solid #ccc',
				width: '350px',
				height: '350px',
				borderRadius: '25px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center'
			}}>
				<div>
					<div style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center'
					}}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>ID</Form.Label>
							<Form.Control type="email" placeholder="아이디" tabIndex={1}/>
							<Form.Text className="text-muted">
								{/*메시지*/}
							</Form.Text>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="비밀번호" tabIndex={2}/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="아이디 기억하기" tabIndex={3}/>
						</Form.Group>
					</div>

					<Button variant="primary" type="submit" tabIndex={4} style={{width: '230px'}}>
						로그인
					</Button>
				</div>
			</Form>
			<div style={{margin: '20px'}}>
				<a href={'www.naver.com'} style={{color: "gray"}}>아이디 찾기</a> <text> | </text>
				<a href={'www.naver.com'} style={{color: "gray"}}>비밀번호 찾기</a> <text> | </text>
				<a href={'www.naver.com'} style={{color: "gray"}}>회원가입</a>
			</div>
		</div>
	);
}

export default LoginPage;
