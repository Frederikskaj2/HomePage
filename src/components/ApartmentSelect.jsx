import React from 'react';
import { css } from '@emotion/react';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

export default function ApartmentSelect ({ allApartments, nonResident }) {
    const theme = useTheme();

    const textFieldCss = css`
    margin-top: ${theme.spacing(2)};
    margin-left: ${theme.spacing(1)};
    margin-right: ${theme.spacing(1)};
    `;

    let apartments = {
        A: [
            '2A, st. tv.',
            '2A, st. th.',
            '2A, 1. tv.',
            '2A, 1. th.',
            '2A, 2. tv.',
            '2A, 2. th.',
            '2A, 3. tv.',
            '2A, 3. th.',
            '2A, 4. tv.',
            '2A, 4. th.',
            '2A, 5. tv.',
            '2A, 5. th.',
        ],
        B: [
            '2B, st. tv.',
            '2B, st. th.',
            '2B, 1. tv.',
            '2B, 1. th.',
            '2B, 2. tv.',
            '2B, 2. th.',
            '2B, 3. tv.',
            '2B, 3. th.',
            '2B, 4. tv.',
            '2B, 4. th.',
        ],
        C: [
            '2C, st. tv.',
            '2C, st. th.',
            '2C, 1. tv.',
            '2C, 1. th.',
            '2C, 2. tv.',
            '2C, 2. th.',
            '2C, 3. tv.',
            '2C, 3. th.',
            '2C, 4. tv.',
            '2C, 4. th.',
            '2C, 5. tv.',
            '2C, 5. th.',
        ],
        D: [
            '2D, st. tv.',
            '2D, st. th.',
            '2D, 1. tv.',
            '2D, 1. th.',
            '2D, 2. tv.',
            '2D, 2. th.',
            '2D, 3. tv.',
            '2D, 3. th.',
        ],
        E: [
            '2E, st. tv.',
            '2E, st. th.',
            '2E, 1. tv.',
            '2E, 1. th.',
            '2E, 2. tv.',
            '2E, 2. th.',
            '2E, 3. tv.',
            '2E, 3. th.',
            '2E, 4. tv.',
            '2E, 4. th.',
            '2E, 5. tv.',
            '2E, 5. th.',
            '2E, 6. tv.',
            '2E, 6. th.',
            '2E, 7.',
        ],
        F: [
            '2F, st. tv.',
            '2F, st. th.',
            '2F, 1. tv.',
            '2F, 1. th.',
            '2F, 2. tv.',
            '2F, 2. th.',
            '2F, 3. tv.',
            '2F, 3. th.',
        ],
        G: [
            '2G, st. tv.',
            '2G, st. th.',
            '2G, 1. tv.',
            '2G, 1. th.',
            '2G, 2. tv.',
            '2G, 2. th.',
            '2G, 3. tv.',
            '2G, 3. th.',
            '2G, 4. tv.',
            '2G, 4. th.',
        ],
        H: [
            '2H, st. tv.',
            '2H, st. th.',
            '2H, 1. tv.',
            '2H, 1. th.',
            '2H, 2. tv.',
            '2H, 2. th.',
            '2H, 3. tv.',
            '2H, 3. th.',
            '2H, 4. tv.',
            '2H, 4. th.',
        ],
        K: [
            '2K, st. tv.',
            '2K, st. th.',
            '2K, 1. tv.',
            '2K, 1. th.',
            '2K, 2. tv.',
            '2K, 2. th.',
            '2K, 3. tv.',
            '2K, 3. th.',
            '2K, 4. tv.',
            '2K, 4. th.',
            '2K, 5. tv.',
            '2K, 5. th.',
        ],
        L: [
            '2L, st. tv.',
            '2L, st. th.',
            '2L, 1. tv.',
            '2L, 1. th.',
            '2L, 2. tv.',
            '2L, 2. th.',
            '2L, 3. tv.',
            '2L, 3. th.',
            '2L, 4. tv.',
            '2L, 4. th.',
            '2L, 5. tv.',
            '2L, 5. th.',
            '2L, 6.',
            '2L, 7.',
        ],
        M: [
            '2M, st. tv.',
            '2M, st. th.',
            '2M, 1. tv.',
            '2M, 1. th.',
            '2M, 2. tv.',
            '2M, 2. th.',
            '2M, 3. tv.',
            '2M, 3. th.',
            '2M, 4. tv.',
            '2M, 4. th.',
            '2M, 5. tv.',
            '2M, 5. th.',
        ],
        N: [
            '2N, st. tv.',
            '2N, st. th.',
            '2N, 1. tv.',
            '2N, 1. th.',
            '2N, 2. tv.',
            '2N, 2. th.',
            '2N, 3. tv.',
            '2N, 3. th.',
        ],
        P: [
            '2P, st. tv.',
            '2P, st. th.',
            '2P, 1. tv.',
            '2P, 1. th.',
            '2P, 2. tv.',
            '2P, 2. th.',
            '2P, 3. tv.',
            '2P, 3. th.',
            '2P, 4. tv.',
            '2P, 4. th.',
        ],
        R: [
            '2R, st. tv.',
            '2R, st. th.',
            '2R, 1. tv.',
            '2R, 1. th.',
            '2R, 2. tv.',
            '2R, 2. th.',
            '2R, 3. tv.',
            '2R, 3. th.',
            '2R, 4. tv.',
            '2R, 4. th.',
            '2R, 5. tv.',
            '2R, 5. th.',
            '2R, 6. tv.',
            '2R, 6. th.',
            '2R, 7.',
        ],
        V: ['2V'],
        W: ['2W'],
    };
    if (!allApartments) {
        const apartmentsToExclude = ['A', 'B', 'C', 'F', 'G', 'M', 'N', 'V', 'W'];
        for (let i = 0; i < apartmentsToExclude.length; i += 1) {
            delete apartments[apartmentsToExclude[i]];
        }
    }
    const nonResidentLetter = 'Z';
    if (nonResident) {
        apartments[nonResidentLetter] = ['Ej beboer'];
    }

    const [letter, setLetter] = React.useState('');
    const [floor, setFloor] = React.useState('');
    const [apartment, setApartment] = React.useState('');

    const setState = (letter, floor) => {
        if (letter && floor) {
            setApartment(letter !== nonResidentLetter ? `Frederikskaj ${floor}` : 'ej beboer');
        } else {
            setApartment('');
        }
    };

    const handleLetterChange = (event) => {
        const letter = event.target.value;
        setLetter(letter);
        const floors = apartments[letter];
        const floor = floors.length === 1 ? floors[0] : '';
        setFloor(floor);
        setState(letter, floor);
    };

    const handleFloorChange = (event) => {
        const floor = event.target.value;
        setFloor(floor);
        setState(letter, floor);
    };

    return (
        <div css={{
            display: 'flex',
            marginLeft: '-' + theme.spacing(1),
            marginRight: '-' + theme.spacing(1),
        }}>
            <TextField
                css={textFieldCss}
                label="Opgang"
                select
                required
                variant="outlined"
                fullWidth
                value={letter}
                onChange={handleLetterChange}
            >
                {Object.keys(apartments).map((letter) => {
                    return letter !== nonResidentLetter ? (
                        <MenuItem key={letter} value={letter}>
                            2{letter}
                        </MenuItem>
                    ) : (
                        <MenuItem key={letter} value={letter}>
                            Ej beboer
                        </MenuItem>
                    );
                })}
            </TextField>
            {letter === '' ? (
                <TextField
                    css={textFieldCss}
                    label="Lejlighed"
                    required
                    disabled
                    variant="outlined"
                    fullWidth
                    value={floor}
                ></TextField>
            ) : (
                <TextField
                    css={textFieldCss}
                    label="Lejlighed"
                    select
                    required
                    variant="outlined"
                    fullWidth
                    value={floor}
                    onChange={handleFloorChange}
                >
                    {apartments[letter].map((floor) => (
                        <MenuItem key={floor} value={floor}>
                            {floor}
                        </MenuItem>
                    ))}
                </TextField>
            )}
            <input type="hidden" name="apartment" value={apartment} />
        </div>
    );
}
