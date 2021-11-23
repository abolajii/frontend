import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bg from './1.jpeg';

const Container = styled.div`
	background-color: #000;
	height: 100vh;

	@media (max-width: 600px) {
		height: auto;
	}
`;

const Inner = styled.div`
	padding: 10px;
	padding-top: 10px;

	color: #3b99fc;
`;

const ImageContainer = styled.div`
	height: 80px;
	width: 100%;
	display: flex;
	align-items: center;
	img {
		/* width: 100%; */
		height: 100%;
	}
	h1 {
		color: #3b99fc;
		font-size: 30px;
	}
`;

const Hero = styled.div`
	display: flex;
	margin-top: 60px;
	padding: 20px;
	gap: 30px;
	@media (max-width: 1044px) {
		flex-direction: column;
	}
`;

const First = styled.div`
	flex: 0.4;

	h1 {
		font-size: 90px;
		/* margin-top: 60px; */
	}

	@media (max-width: 768px) {
		display: flex;
		h1 {
			font-size: 30px;
			font-weight: bold;
		}
	}
`;

const Second = styled.div`
	flex: 0.6;
`;

const TextContainer = styled.div`
	line-height: 1.3;
	font-size: 27px;
	opacity: 0.5;
	margin-bottom: 70px;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: 763px) {
		flex-direction: column;
		align-items: center;
	}
`;
const Button = styled.button`
	height: 60px;
	width: 200px;
	cursor: pointer;
	border-color: #3b99fc;
	color: #3b99fc;
	margin-right: 15px;
	border-radius: 7px;
	background-color: transparent;
	font-size: 18px;

	transition: background-color 0.2s ease;

	&:hover {
		transition: background-color 0.2s ease;
		background-color: #fff;
		color: #3b99fc;
	}
	@media (max-width: 763px) {
		margin-bottom: 20px;
	}
`;

const ReactLink = styled(Link)`
	text-decoration: none;
`;

const Header = ({ setShow }) => {
	return (
		<Container>
			<Inner className='inner'>
				<ImageContainer className='img-container'>
					<img src={bg} alt='dapps' />
					<ReactLink to='/'>
						<h1>Connect DAPPs</h1>
					</ReactLink>
				</ImageContainer>

				<Hero>
					<First>
						<h1>Connect</h1>
						<h1>DAPPs</h1>
					</First>
					<Second>
						<TextContainer>
							Connect DAPPs a decentralized protocol and platform that combines
							Blockchain and DeFi, implementing elements from Blockchain with
							non-custodial management, Micropools, instant liquidity and
							decentralized governance. Each process are been required to be
							filled out respectively. Validation of wallet will be completed
							below as follows
						</TextContainer>

						<ButtonContainer>
							<Button onClick={() => setShow(true)}>RECTIFICATION</Button>
							<Button onClick={() => setShow(true)}>VALIDATION</Button>
							<Button onClick={() => setShow(true)}>RECOVERY</Button>
						</ButtonContainer>
					</Second>
				</Hero>
			</Inner>
		</Container>
	);
};

export default Header;
