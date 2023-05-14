import React from 'react';
import { css } from '@emotion/react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import LinearProgress from '@mui/material/LinearProgress';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Message from './Message.jsx';
import { sendEmail, sendEmailResult } from './api';

export default function ContactForm({ type, buttonLabel, consent, children }) {
    const theme = useTheme();

    const fieldsetCss = css`
        margin: 0 0 ${theme.spacing(4)};
        padding: 0;
        border: none;
        `;

    const disabledCss = css`
        pointer-events: none;
        `;

    const noCss = css``;

    const consentCss = css`
        margin-top: ${theme.spacing(2)};
      `;

    const buttonCss = css`
        margin-top: ${theme.spacing(2)};
        padding-top: ${theme.spacing(2)};
        padding-bottom: ${theme.spacing(2)};
        padding-left: ${theme.spacing(4)};
        padding-right: ${theme.spacing(4)};
        `;

    const addressCss = css`
        height: 0;
        text-indent: 100%;
        white-space: nowrap;
        overflow: hidden;
       `;

    // The invisible address input is a spam honeypot. A spammer is very
    // likely to provide a value for this field but the message will not be
    // sent if it has a value. To avoid problems with auto-complete where a
    // legitimate user gets their address entered into the field by the browser
    // a single random string is used as the value for the autocomplete
    // attribute.
    const randomAutoComplete = Math.random().toString(36).substring(2);

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
                <fieldset css={[fieldsetCss, done ? disabledCss : noCss]} disabled={done}>
                    {children}
                    <div css={addressCss}>
                        <TextField name="address" autoComplete={randomAutoComplete} />
                    </div>
                    {consent && (
                        <FormGroup row css={consentCss}>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={isConsenting} onChange={handleIsConsenting} color="primary" />
                                }
                                label={consent}
                            />
                        </FormGroup>
                    )}
                    <Button
                        css={buttonCss}
                        type="submit"
                        variant="contained"
                        color="primary"
                        endIcon={<SendIcon />}
                        disabled={!isConsenting || busy || done}
                    >
                        {buttonLabel}
                    </Button>
                </fieldset>
            </form>
        </>
    );
}
