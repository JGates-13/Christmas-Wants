# Creating New Pages

To create a new page with the standard navigation bar:

1. Copy `templates/page-template.html` to your desired location in the `public` folder
2. Update the following in the new file:
   - Change the `<title>` tag to your page title
   - Add any additional CSS files you need
   - Replace the comment `<!-- Page content goes here -->` with your content

Example:
```bash
# Copy the template
cp templates/page-template.html public/your-new-page.html

# Edit the new file with your content
```

## Navigation Menu

To add a new page to the navigation menu:
1. Open `static/nav.js`
2. Find the `<nav>` section
3. Add your new page link following the existing format:
   ```html
   <a href="/your-new-page.html">Page Name</a>
   ```

Remember to maintain consistent styling with the rest of the site by using the existing CSS classes and color scheme.