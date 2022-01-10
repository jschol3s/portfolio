# Welcome to the source code of my portfolio website!

### This project isn't quite finished. I'm working on completing the initial page

### visit experience, and the contact functionality. When you first visit the page

### type 'welcome' and press enter.

This was created using React and Remix.
I had a ton of fun making it, and I'm happy with how it turned out!
I thought it would be neat to try to recreate the style and functionality of the macOS terminal but
as a portfolio website.
If you have any suggestions on how I could improve it or features I could add, I'd love to hear them!

I ran into an interesting render issue when creating this. I originally was trying to store JSX element
components in the state for the commands. Everything seemed to work fine doing it this way until I tried
to implement the clear functionality. It would clear all the commands except for the first one. Instead of
completely clearing the component to be a fresh new one, it would remember the state it was in before it was
'cleared'. The output would remain what it originally was. This was some pretty weird rendering behavior that
took me a while to get my head around. Eventually, I realized I needed to take a new approach, which is when
I switched things to the way they are now, which is using ID's for the state, and not just JSX elements.
