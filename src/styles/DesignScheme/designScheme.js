import React from "react";
import { Button, Icon, ButtonIcon } from "../components/shared/buttons";
export default function DesignScheme() {
	return (
		<div>
			<h1>extra-large title</h1>
			<h1 className="secondary">extra-large title secondary</h1>
			<h2>this is a title</h2>
			<h2 className="secondary">this is a secondary title</h2>
			<h3>wow, a subtitle</h3>
			<h3 className="secondary">woah, secondary subtitle</h3>
			<h4>bruh, this is a medium</h4>
			<h4 className="secondary">medium... but its secondary</h4>
			<p>This is a body, it's supposed to be a sentence</p>
			<p className="secondary">
				This is a body, it's supposed to be a sentence, but now its a little
				more gray
			</p>
			<p className="small">This is a small body, it's supposed to be small</p>
			<p className="small secondary">
				This is a body, it's supposed to be a sentence, but now its a little
				more gray
			</p>
			<p className="extra-small">wow, can you even see this? it's so tiny</p>
			<p className="extra-small secondary">
				this is small and gray... very hard to set
			</p>
			<Icon
				iconName={<MdIcon.MdCheck className="white large" />}
				type={"disabled"}
				buttonSize={"large-container"}
			/>
			<Icon
				iconName={<MdIcon.MdAdd className="white default" />}
				type={"primary"}
				buttonSize={"default-container"}
			/>
			<Icon
				iconName={<MdIcon.MdPerson className="small" />}
				type={"secondary"}
				buttonSize={"small-container"}
			/>
		</div>
	);
}
