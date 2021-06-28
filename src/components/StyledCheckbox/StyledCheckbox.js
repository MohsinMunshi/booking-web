import React from 'react';
import clsx from 'clsx';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './styles'

const StyledCheckbox = (props) => {
    const classes = styles()
    return (
        <Checkbox
            className={classes.root}
            disableRipple
            color="default"
            onClick={()=>{ 
                console.log('did i clicked')
                props.handleClick(props.sheet)
            }}
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            inputProps={{ 'aria-label': 'decorative checkbox' }}
            {...props}
        />
    )
}

export default StyledCheckbox
