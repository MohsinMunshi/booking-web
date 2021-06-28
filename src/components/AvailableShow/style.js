import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(2)
    },
    paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:'270px'
    },
    submit: {
        position:'center',
        margin: theme.spacing(1, 7, 1),
    },
    text: {
        height:'30px'
    },

  }));
  export default useStyles