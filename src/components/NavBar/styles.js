import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding:0
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color:'white'
    },
    book:{
      marginLeft:'auto',
      color:'white',
      textDecoration: 'none'
    },
}));
export default useStyles