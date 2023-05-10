---
title: Kontakt ejerforeningens administrator
menuTitle: Ejerforeningens administrator
menuGroup: lejlighedsejer
sequence: 2
redirectFrom:
    - /kontakt-bestyrelsen/administrator
---
Ejerforeningen administreres af [LEA Ejendomspartner](https://www.lea.dk/).

## Hvornår skal administratoren kontaktes?

- Ved spørgsmål om opkrævninger, og lignede.
- Ved salg, ud- og indflytning.
- Ved skade på ejendommen. Her skal både administrator og ejerforeningens bestyrelsen straks kontaktes. Administrator vil herefter hjælpe med at vurdere det videre forløb.
- Al henvendelse vedrørende ejerforeningens forsikringer skal gå igennem administrator, og **ikke** direkte til forsikringsselskabet.

**Ved akut skade skal [vicevært først kontaktes!](/kontakt/vicevaert/)**

Gebyrer (per juli 2020):

- Gebyr for besvarelse af ejerlejlighedsskema fra ejendomsmægler i forbindelse med salg: kr.&nbsp;4.250,–
- Ejerskiftegebyr ved indflytning: kr.&nbsp;2.100,– (opkræves hos køber)
- Rykkergebyr ved for sen betaling af fællesudgifter m.m.: Begynder ved kr.&nbsp;100,–
- Gebyr for manuel genfremsendelse af opkrævninger og lign.: kr.&nbsp;135,–

LEA opkræver ikke gebyr vedr. vand/varme, men forsyningsselskaberne opkræver et gebyr på omkring kr. 500–700 Dette gebyr pålægges sælger.

## Skriv til administrator

<ContactForm type='administrator' buttonLabel="Send besked">
    <TextInput label="Fulde navn" name="name" required inputProps={{maxlength: 100}} />
    <ApartmentSelect allApartments={false} nonResident={true} />
    <TextInput label="E-mail" name="email" type="email" required inputProps={{maxlength: 100}} />
    <TextInput label="Emne" name="subject" required inputProps={{maxlength: 200}} />
    <TextInput label="Besked" name="message" required multiline inputProps={{maxlength: 5000}} />
</ContactForm>
