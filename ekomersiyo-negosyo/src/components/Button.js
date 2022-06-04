import styled from "styled-components";


export const ButtonCart = styled.button `
background: transparent;
border:0.04rem solid var(--lightGreen);
color: var(--mainYellow);
border-radius: 0.5rem;
cursor:pointer;
transition:all 0.5s ease-in-out;
&:hover{
	background:var(--lightGreen);
	color:green;
}
&:focus{
	outline:none;
}
`;


export const ButtonSign=styled.button`
background: transparent;
border:0rem solid var(--lightGreen);
color: var(--mainYellow);
border-radius: 0.5rem;
cursor:pointer;
transition:all 0.5s ease-in-out;
&:hover{
	background:var(--lightGreen);
	color:green;
}
&:focus{
	outline:none;
}
`;


export const BackButton = styled.button `
font-size:1.4rem;
background: transparent;
border:0.05rem solid var(--lightBlue);
border-color: ${props => props.cart ? "var(--mainYellow)":"var(--lightBlue)"};
color: ${prop => (prop.cart? "var(--mainYellow)":"var(--ligthBlue)")};
border-radius: 0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
	background: ${prop => prop.cart ? "var(--mainYellow)":"var(--mainBlue)"};
	color:white;
}
&:focus{
	outline:none;
}
`;