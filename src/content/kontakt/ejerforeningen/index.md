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
- Ditte Gottlieb
- Esben Lech-Rasmussen
- Martin Liversage
- Thomas Witling

Suppleanter:

- Bjarne Thuun Jensen
- Mark Møller Christensen

## Skriv til bestyrelsen

<ContactForm type='bestyrelse' buttonLabel="Send besked">
    <TextInput label="Fulde navn" name="name" required inputProps={{maxlength: 100}} />
    <ApartmentSelect allApartments={false} nonResident={true} />
    <TextInput label="E-mail" name="email" type="email" required inputProps={{maxlength: 100}} />
    <TextInput label="Emne" name="subject" required inputProps={{maxlength: 200}} />
    <TextInput label="Besked" name="message" required multiline inputProps={{maxlength: 5000}} />
</ContactForm>
