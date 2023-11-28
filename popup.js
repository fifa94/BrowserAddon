{
  "name": "Ahoj světe!",
  "version": "1.0",
  "description": "Zobrazí jednoduchý popup s textem 'Ahoj světe!'",
  "content_scripts": [
    {
      "matches": ["*://*/*"],
      "js": ["popup.js"]
    }
  ],
  "permissions": ["tabs", "tabs.active"]
}