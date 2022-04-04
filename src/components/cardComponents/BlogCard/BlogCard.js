import React from "react";
import styles from "./blogCard.module.css";
import {
	Avatar,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	Typography,
} from "@material-ui/core";
import { FiMoreVertical } from "react-icons/fi";

const BlogCard = ({ title, pubDate, link, description, thumbnail, d }) => {
	function cleanTitle(checkTitle) {
		checkTitle = checkTitle.replace("amp;", "");
		return checkTitle;
	}
	function truncateText(text, start, len) {
		return text.length > len ? text.slice(start, len) : text;
	}
	function spaceAfterUnsplash(text) {
		return text.replace("Unsplash", "Unsplash. ");
	}
	function toText(block) {
		let tag = document.createElement("div");
		tag.innerHTML = block;
		block = tag.innerText;
		return block;
	}
	function convertDate(date) {
		let dateArray = date.slice(0, 10).split("-");
		let year = dateArray.shift();
		dateArray.push(year);
		return `${dateArray.join("/")}`;
	}

	return (
		<div className={styles.container}>
			<Card
				sx={{ maxWidth: 345 }}
				style={{
					backgroundColor: "#484848",
					color: "white",
				}}
			>
				<CardHeader
					title={truncateText(cleanTitle(title), 0, 1000)}
					subheader={convertDate(pubDate)}
					subheaderTypographyProps={{ color: "white" }}
				/>
				<CardMedia
					component='img'
					height='400'
					image={thumbnail}
					alt='Blog Image'
				/>
				{/* <CardContent>
					<Typography variant='body2' color='text.secondary'>
						{truncateText(toText(spaceAfterUnsplash(description)), 0, 300) +
							"..."}
					</Typography>
				</CardContent> */}
				<CardActions>
					{/* <Button size='small'>Share</Button> */}
					<Button
						size='small'
						href={link}
						style={{ color: "white", backgroundColor: "#212121" }}
					>
						Read More
					</Button>
				</CardActions>
				<div style={{ display: "flex", flexWrap: "wrap", padding: 10 }}>
					{d.categories.map(function (d, idx) {
						return (
							<div
								style={{
									display: "flex",
									backgroundColor: "#738cff",
									padding: "4px 6px",
									margin: 2,
									borderRadius: 5,
								}}
							>
								<p>{d}</p>
							</div>
						);
					})}
				</div>
			</Card>
			{/* <a
				href={link}
				rel='noreferrer'
				target='_blank'
				className={styles.title}
				style={{ color: "white" }}
			>
				<h1>{truncateText(cleanTitle(title), 0, 1000)}</h1>
			</a>
			<img src={thumbnail} alt={""} className={styles.image} />

			<h4 className={styles.date}>{convertDate(pubDate)}</h4>

			<div className={styles.description}>
				<p>
					{truncateText(toText(spaceAfterUnsplash(description)), 0, 300) +
						"..."}
				</p>
				<a
					href={link}
					rel='noreferrer'
					target='_blank'
					style={{ color: "#ccc" }}
				>
					Read More
				</a>
			</div>
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{d.categories.map(function (d, idx) {
					return (
						<div
							style={{
								display: "flex",
								backgroundColor: "#738cff",
								padding: "4px 6px",
								margin: 2,
								borderRadius: 5,
							}}
						>
							<p>{d}</p>
						</div>
					);
				})}
			</div> */}
		</div>
	);
};

export default BlogCard;
