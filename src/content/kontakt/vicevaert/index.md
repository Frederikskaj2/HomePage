---
title: Kontakt viceværten
menuTitle: Vicevært
menuGroup: beboer
sequence: 1
redirectFrom:
    - /kontakt-bestyrelsen/vicevaert
---
[DEAS](https://deas.dk/) driver viceværtsfunktionen på Frederikskaj&nbsp;2.

## Hvornår skal viceværten kontaktes?

### Akut skade

Hvis der opstår akutte skader som f.eks. sprunget vandrør eller utæt varmeforsyning, eller andet som kan påvirke fællesområder eller andre beboere, skal viceværten straks kontaktes.

Hvis viceværten ikke kan kontaktes, er det beboerens ansvar, at kontakte anden fagmand som kan afhjælpe problemet akut, og beboeren skal herefter kontakte ejerforeningens bestyrelse og administrator.

### Navn på postkasse

For at sikre et ensartet udtryk har ejerforeningen en aftale med viceværten om, at han skifter navneskilt på postkasserne i tilfælde af navneændringer og indflytning.

## Kontakt viceværten

Viceværten skal primært kontaktes via DEAS Service Center:

- Telefon til Service Centeret: 70&nbsp;30&nbsp;23&nbsp;30 kl. 08.00&ndash;16.00 i hverdagene. Udenfor åbningstid stilles videre til BELFOR Skadesservice.
- E-mail: [fs@deas.dk.](mailto:fs@deas.dk.)

### Viceværtens postkasse

Hvis du har nøgler eller andet som skal gives til viceværten, så findes viceværtens postkasse ved nedgangen til varmecentralen imellem opgang 2N og&nbsp;2P.

### Skriv til viceværten

<ContactForm type='vicevaert' buttonLabel="Send besked">
    <TextInput label="Fulde navn" name="name" required inputProps={{maxLength: 100}} />
    <ApartmentSelect allApartments={true} />
    <TextInput label="E-mail" name="email" type="email" required inputProps={{maxLength: 100}} />
    <TextInput label="Telefonnummer" name="phone" type="tel" required inputProps={{maxLength: 100}} />
    <TextInput label="Emne" name="subject" required inputProps={{maxLength: 200}} />
    <TextInput label="Besked" name="message" required multiline inputProps={{maxLength: 5000}} />
</ContactForm>
