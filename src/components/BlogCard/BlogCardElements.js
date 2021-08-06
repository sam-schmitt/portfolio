import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const ReadMore = styled(Link)`
	display: flex;
	align-items: center;
	margin: 24px;
`;

export const BlogTitle = styled.nav`
	display: flex;
	align-items: center;
	font-size: 30px;
	margin: 24px;
`;

export const Card = styled(Link)`
	border-radius: 4px;
	cursor: pointer;
	background: #fff;
	border-width: 1;
	flex-wrap: wrap;
	max-width: 50px;
	color: #000;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: #1045ab;

		color: #1045ab;
	}
`;
