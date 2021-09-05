import { useState } from 'react';
import {
    Button,
    Grid,
    makeStyles,
    TextField,
    //Typography,
    IconButton,
} from '@material-ui/core'

import {
    FaUserEdit
} from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    grid: {
        display: 'flex',
        flexDirection: 'column',
    },
    item: {
        margin: 10,
    },
    input: {
        display: 'none',
    },
    image: {
        border: 20,
        borderRadius: 80,
        width: 150,
        height: 150,
        boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .1)',
    },
    imageicon: {
        position: 'relative',
        left: '50px',
       

    },

    button: {
        margin: 10,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        width: 150,
        height: 40,
        color: 'white',
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
}));


function Managers() {
    const classes = useStyles();
    const [profile, setProfile] = useState('https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png')
    const [governamentid, setGovernamentid] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSD6NMvOb7RJk0i5B5yIgFHSan6zKplhnja3v7tg-QYHafUfDvqLy8FFxvAKLIWJVEjwM&usqp=CAU')

    const handleDpChange = (event) => {
        setProfile(
            URL.createObjectURL(event.target.files[0])
        )
    }
    const handleGidChange = (event) => {
        setGovernamentid(
            URL.createObjectURL(event.target.files[0])
        )
    }
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid className={classes.grid} >
                    <Grid className={classes.item} item>
                        <TextField id="Name" label="Manager Name" size="small" variant="outlined" />
                    </Grid>
                    <Grid className={classes.item} item>
                        <TextField id="Email" label="Manager Email" size="small" variant="outlined" />
                    </Grid>

                    <Grid className={classes.item} item>
                        <TextField id="Governmentid" label="Government ID" size="small" variant="outlined" />
                    </Grid>

                    <Grid className={classes.item} item>
                        <TextField id="UserName" label="User Name" size="small" variant="outlined" />
                    </Grid>

                    <Grid className={classes.item} item>
                        <TextField id="Password" label="Password" size="small" variant="outlined" />
                    </Grid>

                </Grid>

                <Grid className={classes.grid} >
                    <Grid className={classes.item} item>
                        <TextField id="Age" label="Age" size="small" variant="outlined" />
                    </Grid>

                    <Grid className={classes.item} >
                        <TextField id="Number" label="Mobile Number" size="small" variant="outlined" />
                    </Grid>

                    <Grid className={classes.item} >
                        <TextField className={classes.textarea} id="Address" size="medium" label="Address" variant="outlined" />
                    </Grid>

                    <Button className={classes.button}>Create Manager</Button>
                </Grid>
                <Grid className={classes.grid} >
                    <Grid className={classes.item} item>
                        <input accept="image/*" onChange={handleDpChange} className={classes.input} id="dp-icon-button-file" type="file" />
                        <label htmlFor="dp-icon-button-file">
                            <IconButton className={classes.imageicon} color="primary" aria-label="upload picture" component="span">
                                <FaUserEdit />
                            </IconButton>
                        </label>
                        <img className={classes.image} src={profile} alt='Profile' />
                    </Grid>
                </Grid>
                <Grid className={classes.grid} >
                    <Grid className={classes.item} item>
                        <input accept="image/*" onChange={handleGidChange} className={classes.input} id="id-icon-button-file" type="file" />
                        <label htmlFor="id-icon-button-file">
                            <IconButton className={classes.imageicon} color="primary" aria-label="upload picture" component="span">
                                <FaUserEdit />
                            </IconButton>
                        </label>
                        <img className={classes.image} src={governamentid} alt='Governament Id'></img>
                    </Grid>
                </Grid>
            </Grid>


        </div>
    )
}

export default Managers
