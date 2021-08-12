import React, { useState } from 'react';
import PickerToolbar from "@material-ui/pickers/_shared/PickerToolbar";
import ToolbarButton from "@material-ui/pickers/_shared/ToolbarButton";

import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
	toolbar: {
        direction: "ltr",
        display: "flex",
        flexDirection: "row",
    }
});

const Toolbar = function (props) {

	const { date,
		isLandscape,
		openView,
		setOpenView,
		title} = props;

	const handleChangeViewClick = (view) => (e) => {

		setOpenView(view);

	}

	const classes = useStyles();

	return (
		<PickerToolbar className={classes.toolbar} title={title} isLandscape={isLandscape}>
			
            <ToolbarButton
				onClick={()=>console.log("clicked")}
				variant="h6"
				label="בוקר"
				
			/>
			<ToolbarButton
				onClick={()=>console.log("clicked")}
				variant="h6"
				label="ערב"
				
			/>
		</PickerToolbar>
	);

}

export default Toolbar;
