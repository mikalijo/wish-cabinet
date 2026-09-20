# Mika’s Magic Wish Cabinet

A tiny, illustrated cabinet of wishes. Built with HTML, CSS, and vanilla JavaScript. No installation, framework, build step, accounts, database, cookies, analytics, or saved browser data. All included illustrations are local SVG files.

## How it works

Gifts are visible immediately, with a picture, name, price, and optional note. “Visit Item ↗” opens the product in a separate tab. Category buttons filter the regular wishlist, and price sorting works in both tabs. Tab moves between the controls and product links. There are no doors to open or close.

## Find your wishlist

Open `script.js` in a text editor, such as Visual Studio Code. At the top, find:

```js
const wishlist = [
  // Your gift objects live here.
];
```

That is the only place you need to edit product information. `index.html` contains the page wording, `style.css` controls the design, and `assets/` contains illustrations and any photographs you add.

## Add a gift

1. Find the last gift inside the `wishlist` array.
2. Add a comma after its closing `}`.
3. Paste a new object before the final `];`:

```js
{ number: 13, name: 'My new wish', price: '$50', category: 'Cozy Things', note: 'Why I love it.', image: 'assets/my-gift.jpg', link: 'https://example.com/product' }
```

4. Choose a unique number, edit the values, and save. Number 13 is an example; use any unused number. The cabinet follows the order of the objects, and styles repeat automatically.
5. Refresh the browser to see your new door.

Keep quotation marks around text. Separate objects with commas. If text contains a single quote, escape it (`'It\'s lovely'`) or use double quotes (`"It's lovely"`). Category and note are optional: omit their fields or use an empty string `''`. Other fields should be provided.

Categories are case-sensitive. Use `Little Things`, `Cozy Things`, `Beauty`, `Books & Curiosities`, or `Big Wishes`. A new category name automatically adds a filter. `All` is reserved for showing every gift.

## Edit or delete a gift

To edit, change the values inside that gift’s `{ ... }` object and save. Prices are text you maintain manually; the website does not fetch live prices.

To delete, remove the entire object and its following comma. The remaining objects must have commas between them. You do not need to renumber the other gifts.

## Images

The most reliable approach is to place a photo you have permission to use in `assets/`, then use `image: 'assets/my-gift.jpg'`. Use simple filenames, and match uppercase/lowercase exactly. Include the image file in your GitHub commit.

You can also paste a full image address beginning with `https://`. It must point to the image itself, not a shop page. Some shops block external image loading or change their image addresses. Remote images need an internet connection and are requested from the hosting site. Local images work offline. A small star illustration appears if an image cannot load. The gift name supplies its alternative text, so use descriptive product names.

## Product links

Replace each sample `link` with the full product page address copied from your browser, including `https://`. Links open in a new tab with `noopener noreferrer`. Opening a product link keeps its card open. An invalid link displays “A product link is coming soon.” No purchases happen on this website.

## Preview locally

Double-click `index.html` to open it in a browser. Everything works directly from the folder; no server is required. After edits, save your file and refresh the browser. If you use VS Code, its optional Live Server extension can refresh for you.

## Put it on GitHub

1. Create a GitHub repository, for example `wish-cabinet`.
2. Select **Add file → Upload files** and drag in `index.html`, `style.css`, `script.js`, and the `assets` folder (and this README). Keep `index.html` at the repository root.
3. Commit the upload.
4. For a simple future text edit, open `script.js` on GitHub, click the pencil, edit a gift, and choose **Commit changes**. Upload any new photographs too.

If you prefer Git on your computer, open a terminal in this `wish-cabinet` folder. For the first upload to an empty repository, replace YOUR-USERNAME in the following:

```sh
git init
git add index.html style.css script.js README.md assets
git commit -m "Create wish cabinet"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/wish-cabinet.git
git push -u origin main
```

For later changes:

```sh
git add index.html style.css script.js README.md assets
git commit -m "Update my wishes"
git push
```

If you edited on GitHub, run `git pull` before making further local edits. GitHub Desktop is also a beginner-friendly way to commit and push.

## Deploy with Vercel

1. Sign in to Vercel and choose **Add New → Project**.
2. Connect GitHub and import your `wish-cabinet` repository.
3. Choose the **Other** framework preset. Leave the build command unset and serve the project root (output directory `.` if a value is requested). No install command or environment variables are needed.
4. If you uploaded the whole enclosing folder instead, set Root Directory to `wish-cabinet`.
5. Deploy, then open the URL Vercel gives you.

With Git integration enabled, pushing or committing to the production branch (normally `main`) automatically triggers a new deployment. Wait for the deployment to finish, then refresh the public site. Other branches can receive preview deployments. Check the Vercel project’s deployment status if an update has not appeared.

## Before sharing

Check each category, open every gift, and follow your replacement product links. Try a narrow mobile window and keyboard-only navigation. The site includes focus outlines, hidden inactive gift controls, live filter counts, and reduced-motion support. Nothing is deployed or connected to GitHub automatically by these files.

Vercel references: [static build settings](https://vercel.com/docs/builds/configure-a-build) and [Git deployments](https://vercel.com/docs/git).

## 2026 Advent Calendar tab

Switch between **Wish Cabinet** and **2026 Advent Calendar** above the category filters. The collection has unnumbered doors for advent calendar gifts and sample cozy activities. All doors are available now so you can preview them; there is no date lock.

Edit the separate `adventCalendar2026` array in `script.js` to change each entry’s `name` and `note`. You can also add `image`, `price`, and `link` fields using the same format as wishlist gifts. A day without a link simply shows its message. Wishlist categories stay in the Wish Cabinet tab. Switching tabs resets open doors and the category filter.

Advent entries keep a unique `number` in the data as an internal identifier, but numbers and December dates are not displayed on their doors. The main wishlist still displays numbered doors.

## Price sorting

Use **Arrange the cabinet** in either tab to select original order, low to high, or high to low. Sorting uses the numeric amounts shown, without converting currencies; unpriced entries stay last in both price orders. Category filters continue to work while sorting. Switching tabs keeps the selected sort order. Use prices like `$305.00`, `€316`, or `£1,278` (a dot for decimals and optional commas for thousands).

## Gift cards

The **Gift Cards** section appears beneath the regular Wish Cabinet, and is hidden in the Advent Calendar tab. It starts with “Favorite places coming soon.” Add your preferred stores to `giftCards` in `script.js`:

```js
const giftCards = [
  { name: 'Store name', amount: 'Any amount', note: 'For my next little treat.', link: 'https://example.com/gift-card' }
];
```

Replace the example URL with the actual gift-card purchase page. Add more objects separated by commas. `amount` and `note` are optional. Gift cards have their own section and are not included in cabinet price sorting or category filtering.

The **Looking for gift cards? Jump here** shortcut above the tabs takes visitors straight to gift cards, switching back to the regular wishlist when needed.

## Current collection

Only Mika’s chosen gifts and general gift ideas are listed; the original sample items have been removed. There are six advent calendars. Jewelry has its own category. General ideas use an illustration and an unconfirmed price until a specific item is chosen. The heated blanket link and price are an example; any queen/king heated blanket is welcome. The Dyson note requests the Spain version for use in Spain.
