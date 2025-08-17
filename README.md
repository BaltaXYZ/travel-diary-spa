# Resedagbok – Travel Diary App

Det här projektet är en prototyp av en webbaserad resedagbok där användare kan skapa resor, ladda upp bilder och videor, tagga personer och platser och därefter navigera genom ett galleri med kraftfulla filter. Projektet är utformat för att vara en fullstack‑lösning med en fri och flexibel teknikstack.

## Val av teknikstack

Projektet använder **Next.js** (App Router) och **React** för frontend och serverrenderade API‑rutter. Databasen hanteras via **PostgreSQL** och **Prisma** som ORM. **Tailwind CSS** används för styling. Denna kombination ger ett modernt utvecklingsflöde och en enkel distribution där frontend och backend kan samexistera i samma kodbas.

### Anledningar till dessa val

- **Next.js** erbjuder både client‑ och serverrendering samt möjlighet att exponera API‑rutter, vilket gör att vi inte behöver ett separat Express‑lager.
- **Prisma** ger en typad datamodell och enkel migrering mot PostgreSQL.
- **PostgreSQL** är en robust databas med stöd för avancerade sökningar, index och utökning (t.ex. PostGIS om platsfilter behövs i framtiden).
- **Tailwind** gör det lätt att snabbt bygga responsiva gränssnitt.

Du kan ändra dessa val eller ersätta delar av stacken om du vill; projektet är modulärt uppbyggt. Viktigast är att de funktionella kraven uppfylls (galleri med filter, uppladdning, kommentarer, redigering) och att appen går att köra via Docker Compose.

## Funktionalitet

Appen är uppdelad i olika sidor (rutter) enligt specifikationen:

| Route | Beskrivning |
|------|-------------|
| `/` | Dashboard / Mina resor |
| `/trips` | Lista alla resor |
| `/trips/[tripId]` | Galleri per resa med filterpanel |
| `/trips/[tripId]/upload` | Uppladdning av foton och filmer |
| `/media/[mediaId]` | Detaljvy för media inklusive kommentarer |
| `/trips/[tripId]/settings` | Resans inställningar |
| `/people` | Personregister |
| `/tags` | Tagg‑översikt |

### Onboarding

När en ny användare startar appen behöver denne först koppla sitt Flickr‑ och YouTube‑konto. Denna onboarding vy återfinns i designen (se `docs` eller beskrivningen i uppgiften) och består av två knappar där OAuth‑flödet initieras. Kopplingarna måste vara klara innan första resan skapas.

### Databasmodell

Datamodellen finns i `prisma/schema.prisma`. Den utgår från följande enheter:

- **User** – representerar en användare.
- **Trip** – en resa med titel, datumintervall, beskrivning och ägare.
- **TripMembership** – kopplar användare till resor med roller (owner, editor, contributor, viewer).
- **Media** – foto eller film, med länk till externa källor (Flickr/YouTube), tidpunkter och beskrivning.
- **MediaMeta** – lagrar EXIF/metadata.
- **Tag** och **MediaTag** – hanterar hashtags.
- **Person** och **MediaPerson** – hanterar personer som syns i ett media.
- **Comment** – kommenterar media med trådade svar.
- **TripDay** – hjälper till med dag‑visning.
- **AuditLog** – spårar ändringar (finns förberedd men behöver implementeras i kod).

Modellen kan anpassas och utökas vid behov.

## Kom igång

1. **Klona repot och installera beroenden**

   ```bash
   git clone https://github.com/<ditt‑användarnamn>/travel-diary-app.git
   cd travel-diary-app
   npm install
   ```

2. **Konfigurera miljövariabler**

   Kopiera `.env.example` till `.env` och fyll i dina egna värden för databasen, Flickr och YouTube samt eventuellt NextAuth (om du väljer att implementera auth med NextAuth). Se till att databasens URL pekar på rätt host när du kör via Docker Compose.

3. **Kör upp utvecklingsmiljön**

   Starta Postgres via Docker Compose (samt appen om du vill köra allt i containrar):

   ```bash
   docker-compose up -d db
   # starta appen antingen via docker-compose eller lokalt
   npm run dev
   ```

4. **Kör migreringar och generera Prisma‑klient**

   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. **Seed (valfritt)**

   Det medföljer ett enkelt seed‑script (`prisma/seed.ts`) som du kan utgå från. Det fyller inte databasen men visar hur du ansluter till Prisma. Utveckla detta för att skapa testdata.

## Anteckningar och antaganden

Det här projektet är ett skelett för vidare utveckling. Det innehåller alla rutter och komponenter som behövs för att komma igång men saknar fullständig logik för autentisering, uppladdning och integration mot Flickr och YouTube. Tanken är att du ska kunna bygga vidare och implementera dessa delar stegvis.

### Autonomi

Denna kodbas är framtagen i autonomt läge enligt instruktionen. Därför har rimliga antaganden gjorts:

- **Inget NPM‑nätverk**: På grund av att Internet är avstängt i utvecklingsmiljön har inga paket installerats under själva genereringen. Du behöver själv köra `npm install` i en miljö med internet när du ska bygga och köra appen.
- **OAuth och API‑nycklar**: Implementation av Flickr och YouTube‑integration saknas. Lägg till logik i `app/api` och på klientsidan för att initiera OAuth‑flödet och ladda upp filer.
- **Auth**: Ingen färdig inloggningslösning följer med. Integrera t.ex. NextAuth, Clerk eller en egen lösning beroende på behov.

## Licens

Projektet är licensierat under MIT‑licensen. Se `LICENSE` för mer information.