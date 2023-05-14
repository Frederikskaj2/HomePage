---
title: Kontakt ejerforeningens bestyrelse
menuTitle: Ejerforeningens bestyrelse
menuGroup: lejlighedsejer
sequence: 1
redirectFrom:
    - /kontakt-bestyrelsen/bestyrelsen
---
Bestyrelsen består af:

- Stefan Vrang (formand)
- Jesper Jensen
- Martin Liversage
- Robert Jørgensen
- Thomas Cato

Suppleanter:

- Emil Bech Madsen
- Line Rasmussen
- Tine Christiansen

## Skriv til bestyrelsen

<ContactForm type='bestyrelse' buttonLabel="Send besked">
    <TextInput label="Fulde navn" name="name" required inputProps={{maxLength: 100}} />
    <ApartmentSelect allApartments={false} nonResident={true} />
    <TextInput label="E-mail" name="email" type="email" required inputProps={{maxLength: 100}} />
    <TextInput label="Emne" name="subject" required inputProps={{maxLength: 200}} />
    <TextInput label="Besked" name="message" required multiline inputProps={{maxLength: 5000}} />
</ContactForm>
