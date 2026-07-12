# SYNO SOLUTIONS

Production website for SYNO SOLUTIONS, built with React, TypeScript, Vite, Tailwind CSS, React Router, and Lucide icons.

## Website Structure

- `/` - company overview
- `/solutions` - consultation, process, technology, and automation support
- `/products` - selected InnoX technologies, including Kotti
- `/products/kotti` - Kotti product information
- `/products/innox` - InnoX product information
- `/about` - company approach and distribution role
- `/contact` - enquiry form and company contact details
- `/privacy` - website enquiry privacy notice

SYNO SOLUTIONS is presented as a Malaysia-market business consultation and technology distribution company supporting selected InnoX technology enquiries, including Kotti.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Contact Form

The form posts to the Vercel function at `/api/contact`, which securely relays enquiries to a Google Apps Script web app. The web app records each enquiry in a private Google Sheet. The browser never receives the shared form token.

### Google Sheets Setup

1. Create a Google Sheet and add a tab named `Enquiries` with this first row:

   ```text
   Received at | Full name | Company name | Email | Telephone number | Area of interest | Message
   ```

2. In the sheet, choose **Extensions > Apps Script**. Replace the default code with:

   ```javascript
   const SHEET_NAME = 'Enquiries'

   function doPost(e) {
     try {
       const payload = JSON.parse(e.postData?.contents || '{}')
       const properties = PropertiesService.getScriptProperties()
       const expectedToken = properties.getProperty('FORM_TOKEN')
       const spreadsheetId = properties.getProperty('SPREADSHEET_ID')

       if (!expectedToken || !spreadsheetId || payload.token !== expectedToken) {
         return json({ ok: false, message: 'Unauthorized request.' })
       }

       const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(SHEET_NAME)
       if (!sheet) return json({ ok: false, message: `Sheet "${SHEET_NAME}" was not found.` })

       sheet.appendRow([
         new Date(),
         payload.name || '',
         payload.company || '',
         payload.email || '',
         payload.phone || '',
         payload.topic || '',
         payload.message || '',
       ])

       return json({ ok: true })
     } catch (error) {
       console.error(error)
       return json({ ok: false, message: 'Unable to save this enquiry.' })
     }
   }

   function doGet() {
     return json({ ok: true, service: 'SYNO SOLUTIONS enquiry endpoint' })
   }

   function json(data) {
     return ContentService
       .createTextOutput(JSON.stringify(data))
       .setMimeType(ContentService.MimeType.JSON)
   }
   ```

3. In **Project Settings > Script Properties**, add `SPREADSHEET_ID` (the value between `/d/` and `/edit` in the sheet URL) and `FORM_TOKEN` (a long random secret). Keep the token private.
4. Choose **Deploy > New deployment > Web app**, set **Execute as** to yourself and **Who has access** to `Anyone`, then authorize and copy the deployed URL ending in `/exec`. Do not use the test `/dev` URL.
5. In **Vercel > Project Settings > Environment Variables**, create these Production values:

```bash
GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/your-deployment-id/exec
GOOGLE_SHEETS_FORM_TOKEN=the-same-secret-used-for-FORM_TOKEN
```

6. Redeploy the Vercel project, submit a test enquiry, and confirm that a new row appears in `Enquiries`.

### Troubleshooting the Google Sheet Connection

- Do not press **Run** on `doPost` in the Apps Script editor. It requires the web request event that only the deployed website supplies, so `postData` will be undefined during a manual editor run.
- To confirm the deployed script is available, make sure `doGet` is included in the script above, then open the deployed `/exec` URL in a browser. It should show a small response containing `"ok":true`.
- If the URL does not show that response, choose **Deploy > Manage deployments**, edit the active web app deployment, select **New version**, and deploy again.
- If the website form still returns an error, confirm the tab is named exactly `Enquiries`, the deployment runs as you and is accessible to `Anyone`, and the Vercel `GOOGLE_SHEETS_FORM_TOKEN` exactly matches the Apps Script `FORM_TOKEN` Script Property.

The contact page also retains a clickable direct email address and a **Copy Email Address** button for visitors who prefer to email `synosolutions.ent@gmail.com` themselves. Until both Vercel variables are configured, the form returns a clear direct-email fallback instead of silently losing an enquiry.

`vercel.json` provides clean React Router URLs and security headers for the Vercel deployment.

## Checks

```bash
npm run lint
```
