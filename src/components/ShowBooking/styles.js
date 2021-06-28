import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '90vw',
      },
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    paper:{
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
        width:'30vw'
    },
    textField: {
        width:'100%'

    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    checkbox:{
      margin: theme.spacing(1),
    },
    list:{
      display:'inline-block',
      height:'40px',
      width:'90px',
      paddingLeft:'5px',
      alignContent:'center'
    },
}));

export default useStyles