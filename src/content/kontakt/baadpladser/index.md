---
title: Kontakt vedrørende bådpladser
menuTitle: Bådpladser
menuGroup: baadejer
---
Bådpladser administreres af [By&Bolig](https://byogbolig.com/).

## Skriv til By&Bolig om bådpladser

<ContactForm type='baadplads' buttonLabel="Send besked">
    <TextInput label="Fulde navn" name="name" required inputProps={{maxLength: 100}} />
    <ApartmentSelect allApartments={true} nonResident={true} />
    <TextInput label="E-mail" name="email" type="email" required inputProps={{maxLength: 100}} />
    <TextInput label="Emne" name="subject" required inputProps={{maxLength: 200}} />
    <TextInput label="Besked" name="message" required multiline inputProps={{maxLength: 5000}} />
</ContactForm>
