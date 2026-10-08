# Cashlotse – statische Landingpage

Die Website ist in HTML, CSS und JavaScript gebaut. Sie benötigt keinen Build-Schritt, kein Framework und kein Backend.

## Lokal ansehen und veröffentlichen

1. Öffne `index.html` im Browser.
2. Zum Veröffentlichen lade den gesamten Inhalt dieses Ordners auf deinen Webhoster. Behalte `assets/`, `css/` und `js/` in ihrer Ordnerstruktur.

## Inhalte anpassen

- **Texte und Angebote:** Bearbeite `index.html`. Die sechs Produktkarten mit Preisen stehen im Abschnitt `id="leistungen"`.
- **Farben:** Ändere die Markenvariablen am Anfang von `css/styles.css`: Anthrazit `#111820`, Orange `#FF5A00`, Weiß `#FFFFFF`, Dunkel `#0D1319`.
- **Gründerfoto:** Ersetze in `index.html` den `.photo-placeholder`-Block durch ein eigenes Bild und einen passenden Alternativtext.
- **Offene Angaben:** Ergänze vor Veröffentlichung die Datenschutzhinweise passend zu Hosting und tatsächlich eingesetzten Diensten sowie die endgültige Website-Adresse und ein Social-Media-Vorschaubild. Ersetze den Foto-Platzhalter durch ein eigenes Foto und ergänze den Bildnachweis, falls erforderlich.
- **Social Media:** Trage die vollständige Domain bei `og:url` sowie die absolute URL eines Vorschaubilds bei `og:image` ein.
- **Kontaktformular:** Es versendet noch keine Daten. Die Stelle zum späteren Anbinden eines Formulardienstes ist im HTML kommentiert. Aktualisiere dann auch die Datenschutzhinweise.

## Logos

Die neuen Cashlotse-Logo- und Kompass-Varianten liegen in `assets/`. Die transparente horizontale Variante wird in Kopf- und Fußzeile verwendet; die helle Variante auf dunklem Hintergrund erscheint im Hero. Die früheren Logo-PNGs wurden entfernt.

Es werden keine externen Schrift-, Analyse-, Tracking- oder Cookie-Dienste geladen. Die Schriftwahl nutzt vorhandene Systemschriften. Scrollanimationen und Seitenübergänge respektieren `prefers-reduced-motion`.
