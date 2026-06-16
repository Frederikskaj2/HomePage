---
title: Kontakt ejerforeningens administrator
menuTitle: Ejerforeningens administrator
menuGroup: lejlighedsejer
sequence: 2
redirectFrom:
    - /kontakt-bestyrelsen/administrator
---
Ejerforeningen administreres af [Administration Danmark](https://www.administrationdanmark.dk/).

## Hvornår skal administratoren kontaktes?

- Ved spørgsmål om opkrævninger, og lignede.
- Ved salg, ud- og indflytning.
- Ved skade på ejendommen. Her skal både administrator og ejerforeningens bestyrelsen straks kontaktes. Administrator vil herefter hjælpe med at vurdere det videre forløb.
- Al henvendelse vedrørende ejerforeningens forsikringer skal gå igennem administrator, og **ikke** direkte til forsikringsselskabet.

**Ved akut skade skal [vicevært først kontaktes!](/kontakt/vicevaert/)**

## Skriv til administrator

<ContactForm type='administrator' buttonLabel="Send besked">
    <TextInput label="Fulde navn" name="name" required inputProps={{maxLength: 100}} />
    <ApartmentSelect allApartments={false} nonResident={true} />
    <TextInput label="E-mail" name="email" type="email" required inputProps={{maxLength: 100}} />
    <TextInput label="Emne" name="subject" required inputProps={{maxLength: 200}} />
    <TextInput label="Besked" name="message" required multiline inputProps={{maxLength: 5000}} />
</ContactForm>
