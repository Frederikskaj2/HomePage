---
title: Parkering ved flytning
menuGroup: beboer
sequence: 2
---
I forbindelse med ind- og udflytning kan man få tilladelse til at parkere et køretøj foran ens opgang. Ansøgning skal indsendes mindst **fem dage** før dagen for flytningen. Hvis man har brug for en tilladelse i flere dage skal man lave flere ansøgninger.

Man kan køre langs kajkanten fra Aalborg Universitet København. Det er også muligt at få fjernet pullerterne ved indkørslen til området (rød cirkel på oversigtskortet nedenfor).

Vær opmærksom på at stierne inde i området flere steder er meget smalle, og eventuelle skader på grønne områder forvoldt af køretøjet vil blive krævet udbedret for beboerens regning.

## Anmod om tilladelse til parkering ved flytning

Anmodningen sendes til Copark (og DEAS hvis pullerterne skal åbnes). I tvivlstillfælde kan man rette henvendelse til Copark på telefon 42&nbsp;90&nbsp;50&nbsp;10.

Oplys registreringsnummer på køretøjet eller hvis ikke det er muligt beskriv det så godt som det kan lade sig gøre.

<ContactForm type="flytning" buttonLabel="Send besked">
    <TextInput label="Fulde navn" name="name" required inputProps={{ maxLength: 100 }} />
    <ApartmentSelect allApartments={true} />
    <TextInput label="E-mail" name="email" type="email" required inputProps={{ maxLength: 100 }} />
    <TwoFields
        field1={<DateInput label="Dato" name="date" minRelativeDate="5" required />}
        field2={<CheckboxInput label="Fjern pullerter (rød cirkel nedenfor)" name="removeBollards" />}
    />
    <TextInput label="Beskrivelse af køretøj" name="subject" helperText="Fx »XY&nbsp;12&nbsp;345«, »Flyttefirma&nbsp;X« eller »Udlejning&nbsp;Y«" required inputProps={{ maxLength: 50 }} />
</ContactForm>

![Oversigtskort over Frederikskaj 2](oversigtskort.png)
