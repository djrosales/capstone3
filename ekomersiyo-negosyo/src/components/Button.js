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
