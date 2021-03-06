import {
    Button,
    Grid,
    makeStyles,
    TextField,
    Typography
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        width: '100vw',
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        background:'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)'
    },
    form: {
        padding: 10,
        borderRadius: 10,
       // border: "1px solid grey",
        background:'linear-gradient(to right, #c9d6ff, #e2e2e2)'
    },
    item: {
        margin: 10,
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        width: 100,
        height: 40,
        color: 'white',
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    h2: {
        fontSize: '40px',
        fontWeight: 800,
        color:'#6190e8'
    }
}));

function Login() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid className={classes.form} >
                <Grid className={classes.item}>
                    <Typography className={classes.h2}>AIS Tech</Typography>
                </Grid>
                <Grid className={classes.item}>
                    <TextField id="Email" label="Email" size="small" variant="outlined" />
                </Grid>
                <Grid className={classes.item}>
                    <TextField id="Password" label="Password" size="small" variant="outlined" />
                </Grid>
                <Grid className={classes.item}>
                    <Button className={classes.button} >Login</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login