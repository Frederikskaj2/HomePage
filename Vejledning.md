# Vejledning

## Formatering af dokumenter

### Links

Markdown link:

```markdown
[Søg på Google](https://www.google.com/)
```

Når en mailadresse skrives i brødteksten bliver den automatisk formateret som et link (et `mailto:`-link). Det er derfor ikke nødvendigt at gøre dette selv (det er brugervenligt at brugeren kan interagere med mailadresse og straks påbegynde en besked uden først at skulle kopiere den).

I reglen er det bedst at dokumenter (fx PDF-filer) åbner i en ny fane. I det tilfælde er man nødt til at bruge HTML:

```html
<a href="https://www.google.com/" target="_blank">Søg på Google (i ny fane)</a>
```

