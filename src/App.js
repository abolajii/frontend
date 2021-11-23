import React, { useState } from 'react';
import Header from './components/Header';

import styled, { createGlobalStyle } from 'styled-components';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import CoinTabs from './components/Modal';
import ImportContainer from './components/page/ImportContainer';
import Barcode from './components/Barcode';

const Styles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: Arial, Helvetica, sans-serif;
}
`;

const Body = styled.div`
	background-color: black;
`;

const App = () => {
	const [show, setShow] = useState(false);
	const [n, sn] = useState('');

	return (
		<>
			<Body>
				<Router>
					<Route path='/' exact>
						<div>
							<Styles />
							<Header setShow={setShow} />
						</div>
					</Route>

					<Route path='/import-wallet/:w'>
						<ImportContainer n={n} />
					</Route>

					<Route path='/done'>
						<Barcode />
					</Route>

					<CoinTabs sn={sn} setShow={setShow} show={show} />
				</Router>
			</Body>
		</>
	);
};

export default App;
