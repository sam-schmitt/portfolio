import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import BlogCard from "../../BlogCard/BlogCard";
import { FiChevronRight } from "react-icons/fi";

export default function NFTsSection(props) {
	const history = useHistory();

	return (
		<div style={{ padding: 10 }}>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<h1>NFTs</h1>
				<p
					onClick={() => {
						history.push("/blogs");
					}}
					style={{
						display: "flex",
						alignItems: "center",
					}}
				>
					See All
					<FiChevronRight />
				</p>
			</div>
			<div style={{ display: "flex", flexDirection: "row" }}>
				<nft-card
					contractAddress='0x2953399124f0cbb46d2cbacd8a89cf0599974963'
					tokenId='83794037348477068752744317654486895228635023878356671312157023954105909903361'
				></nft-card>
				<script src='https://unpkg.com/embeddable-nfts/dist/nft-card.min.js'></script>
			</div>
		</div>
	);
}
