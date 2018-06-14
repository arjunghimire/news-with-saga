import styled, { keyframes} from 'styled-components'

const AppWrapper = styled.div`
  text-align: center;
  margin: auto;
  width: 60%;
`;

const rotated360 = keyframes`
	from { 
		transform : rotate(0deg);
	}
	to {
		transform : rotate(360deg);
	}
`;

const Header = styled.header`
  background: white;
  color: #000;
  animation: ${rotated360} 2s linear infinite;
  height: 200px;
  padding: 20px;
  `;

const Button = styled.button`
  background: ${props => props.primary ? "blue" : "red"};
  color: ${props => props.primary ? "white" : "yellow"};
  `;

export { AppWrapper,Header,Button };