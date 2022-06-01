import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import Message from './Message';
import { sendEmail, sendEmailResult } from './api';

const useStyles = makeStyles((theme) => ({
    fieldset: {
        margin: 0,
        padding: 0,
        border: 'none',
    },
    disabled: {
        pointerEvents: 'none',
    },
    consent: {
        marginTop: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
    address: {
        height: 0,
        textIndent: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
}));

export default ({ type, buttonLabel, consent, children }) => {
    const classes = useStyles();

    // The invisible address input is a spam honeypot. A spammer is very
    // likely to provide a value for this field but the message will not be
    // sent if it has a value. To avoid problems with auto-complete where a
    // legitimate user gets their address entered into the field by the browser
    // a single random string is used as the value for the autocomplete
    // attribute.
    const randomAutoComplete = Math.random().toString(36).substr(2);

    const [isConsenting, setIsConsenting] = React.useState(!consent);
    const [result, setResult] = React.useState(undefined);
    const [busy, setBusy] = React.useState(false);
    const [done, setDone] = React.useState(false);

    const handleIsConsenting = (event) => {
        setIsConsenting(event.target.checked);
    };

    const getProperties = (form) => {
        const inputs = form.querySelectorAll('input[name], textarea[name]');
        const properties = {};
        for (let i = 0; i < inputs.length; i += 1) {
            const input = inputs[i];
            properties[input.name] = input.value;
        }
        return properties;
    };

    const submit = async (event) => {
        event.preventDefault();

        setResult(undefined);
        setBusy(true);

        const properties = getProperties(event.currentTarget);
        const result = await sendEmail(type, properties);

        setBusy(false);
        setResult(result);
        if (result !== sendEmailResult.error) setDone(true);
    };

    const getSeverity = (result) => {
        if (result === sendEmailResult.accepted) return 'success';
        if (result === sendEmailResult.notAccepted) return 'warning';
        return 'error';
    };

    const getTitle = (result) => {
        if (result === sendEmailResult.accepted) return 'Beskeden er sendt';
        if (result === sendEmailResult.notAccepted) return 'Beskeden er ikke sendt';
        return 'Fejl';
    };

    const getMessage = (result) => {
        if (result === sendEmailResult.accepted)
            return 'Du hører fra os når vi har haft lejlighed til at behandle din henvendelse.';
        if (result === sendEmailResult.notAccepted)
            return 'Din besked ligner spam. Skriv en mail til ejerforeningen@frederikskaj2.dk hvis vi tager fejl.';
        return 'Der er sket en teknisk fejl, og din besked blev ikke sendt.';
    };

    return (
        <>
            {busy && <LinearProgress />}
            {result && <Message severity={getSeverity(result)} title={getTitle(result)} message={getMessage(result)} />}
            <form onSubmit={submit}>
                <fieldset className={`${classes.fieldset} ${done ? classes.disabled : ''}`} disabled={done}>
                    {children}
                    <div className={classes.address}>
                        <TextField name="address" autoComplete={randomAutoComplete} />
                    </div>
                    {consent && (
                        <FormGroup row className={classes.consent}>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={isConsenting} onChange={handleIsConsenting} color="primary" />
                                }
                                label={consent}
                            />
                        </FormGroup>
                    )}
                    <Button
                        className={classes.button}
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={!isConsenting || busy || done}
                    >
                        {buttonLabel}
                    </Button>
                </fieldset>
            </form>
        </>
    );
};
