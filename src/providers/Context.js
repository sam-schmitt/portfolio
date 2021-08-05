import React, { useMemo, useState, useEffect, useRef } from "react";

const AllData = () => {
	const [thing, setThing] = useState("thing");

	const provider = useMemo(
		() => ({
			thing,
			setThing,
		}),
		[thing, setThing]
	);
	return provider;
};

export default AllData;
