import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding:0,
      width:'90vw',
      display:'flex',
      paddingTop: theme.spacing(3),
      margin:'0'
    },
    textField:{
        display: 'block',
        marginRight:'auto',
        width:'100vw',
        paddingRight:'20px',
    },
    submit:{
        display: 'block',
        marginLeft:'auto',
        
    },
    table: {
        minWidth: 650,
    },
   
}));
export default useStyles