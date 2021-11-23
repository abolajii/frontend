import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

import { AiOutlineClose } from 'react-icons/ai';

import './m.css';
import { Link } from 'react-router-dom';

const data = [
	{ id: 1, name: 'Safepal', img: '/img/download/safepal.png' },
	{
		id: 2,
		name: 'Atomic Wallet',
		img: '/img/download/atomicwallet.png',
	},
	{ id: 3, name: 'Coinomi', img: '/img/download/coinomi.png' },
	{ id: 4, name: 'MetaMask', img: '/img/download/metamask.png' },
	{ id: 5, name: 'TrustWallet', img: '/img/download/trustwallet.png' },
	{
		id: 6,
		name: 'WalletConnect',
		img: '/img/download/walletconnect.jpg',
	},
	{ id: 7, name: 'Coinbase Wallet', img: '/img/download/coinbase.jpg' },
	{ id: 8, name: 'Ledger', img: '/img/download/ledger.png' },
	{ id: 9, name: 'TokenPocket', img: '/img/download/tokenpocket.jpg' },
	{ id: 10, name: 'Trezor', img: '/img/download/trezor.png' },
	{ id: 11, name: 'Formatic', img: '/img/download/fortmatic.png' },
	{ id: 12, name: 'Portis', img: '/img/download/portis.png' },
	{ id: 13, name: 'Squarelink', img: '/img/download/squarelink.png' },
	{ id: 14, name: 'Torus', img: '/img/download/torus.jpg' },
	{ id: 15, name: 'Authereum', img: '/img/download/authereum.png' },
	{ id: 16, name: 'VeChain', img: '/img/download/vechain.jpg' },
	{
		id: 17,
		name: 'Scatter Wallet',
		img: '/img/download/scatterwallet.jpg',
	},
	{ id: 18, name: 'Math Wallet', img: '/img/download/mathwallet.png' },
	{ id: 19, name: 'Tomo Chain', img: '/img/download/tomochain.png' },
	{
		id: 20,
		name: 'Binance Smart Chain',
		img: '/img/download/binancesmartchain.png',
	},
	{
		id: 21,
		name: 'Guarda Wallet',
		img: '/img/download/guardwallet.png',
	},
	{ id: 22, name: 'Exodus', img: '/img/download/exodus.jpg' },
	{ id: 23, name: 'Others', img: false },
];

const Inner = styled.div`
	/* padding: 20px; */
	/* background: green; */
	/* height: 100%; */
`;

const LetSee = styled(Modal.Header)`
	display: flex;
	justify-content: center;
`;

const Title = styled(Modal.Title)`
	flex: 0.9;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Box = styled.div`
	height: 65px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 8px;
	border: 2px solid grey;
	color: #333;

	cursor: pointer;
	border-radius: 10px;
`;

const Item = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
	margin-bottom: 20px;

	.link {
		text-decoration: none;
	}

	@media (max-width: 796px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 580px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const Text = styled.div`
	font-size: 13px;
	color: #333;
	font-weight: 600;
`;

const Close = styled.div`
	flex: 0.1;
	display: flex;
	height: 35px;
	align-items: center;
	justify-content: end;

	.icon {
		font-size: 25px;
		cursor: pointer;
	}
`;

const ImgDiv = styled.div`
	height: 25px;
	width: 25px;
	border-radius: 50%;

	img {
		height: 100%;
		width: 100%;
	}
`;

function CoinTabs({ show, setShow, sn }) {
	const handleClick = (name) => {
		sn(name);
		setShow(!show);
	};

	return (
		<>
			<Modal
				show={show}
				onHide={() => setShow(false)}
				backdrop='static'
				keyboard={false}
				scrollable={true}
				size='sm'
				dialogClassName='custom-modal-style'
				aria-labelledby='example-custom-modal-styling-title'>
				<LetSee>
					<Title>Choose your wallet</Title>
					<Close>
						<AiOutlineClose className='icon' onClick={() => setShow(false)} />
					</Close>
				</LetSee>
				<Modal.Body>
					<Inner>
						<Item>
							{data.map(({ name, img, id }) => {
								if (img === false) {
									return (
										<Link
											key={id}
											className='link'
											onClick={() => setShow(!show)}
											to='/import-wallet'>
											<Box>
												<Text>{name}</Text>

												<div></div>
											</Box>
										</Link>
									);
								} else {
									return (
										<Link
											key={id}
											className='link'
											onClick={() => handleClick(name)}
											to={`/import-wallet/${name.toLocaleLowerCase()}`}>
											<Box>
												<Text>{name}</Text>

												<ImgDiv>
													<img src={img} alt={name} />
												</ImgDiv>
											</Box>
										</Link>
									);
								}
							})}
						</Item>
					</Inner>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default CoinTabs;
