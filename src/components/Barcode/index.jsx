import React from 'react';
import { Chat, Container, Image, ImageContainer, Inner, Text } from './styles';

const Barcode = () => {
	return (
		<Container>
			<Inner>
				<ImageContainer>
					<Image src='/img/download/download.png' alt='download' />
				</ImageContainer>
				<Chat>
					<Text>
						Chat <b>ADMIN</b> for verification code
					</Text>
				</Chat>
			</Inner>
		</Container>
	);
};

export default Barcode;
