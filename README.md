<img src="src/assets/brand/logo/yumyumyes-logo-m.png" style="max-width:300px;" />

# YumYumYes.com - Recipe Search Web App

YumYumYes! is a beautiful, full-featured, responsive web app that interfaces with the [Tasty API](https://rapidapi.com/apidojo/api/tasty) and allows users to search, view and save recipes. It was built from the ground up for [Chingu Voyage 46](https://github.com/chingu-voyages/voyage-project-tier2-recipes).

## Table of contents

- [Overview](#overview)
  - [About Chingu](#about-chingu)
  - [Basic Requirements](#basic-requirements)
  - [Our Solution](#our-solution)
    - [Concept](#concept)
    - [Screenshots](#screenshots)
    - [Links](#links)

## Overview

### The challenge

#### About Chingu:

Chingu is a community of developers who are passionate about learning, helping others, and collaborating on projects. It is a remote, self-organizing, project-based learning platform. Chingu helps you to build your portfolio and network while collaborating on real-world projects with remote team members. "Chingus" are motivated learners who are self-directed and take responsibility for their own learning.

#### Basic requirements:

> Use the Tasty API to create an app that will help anyone interested in creating dishes and flavours to explore recipes in novel ways.

**Landing Page**

_User can see a landing page containing at least the following components:_

- [ ] Header component displaying a welcome message.
- [ ] Search field that enables users to input ingredient(s).
- [ ] Component to explain the use of the application.
- [ ] A scrollable list of recipes displaying the results based on the search criteria. Keep in mind that the Recipe API has over 1500 Recipes, however, it's paginated with 20 recipes per page of result.
- [ ] A summary main recipe component: it should display recipe image, name and link to details.
- [ ] A summary detail recipe component: it should display recipe name, category, and instructions.
- [ ] Ensure mobile responsiveness for the application.

**Search Component**

_Users can input one or multiple ingredient(s)._

- [ ] Initiate the search by either pressing the Enter key or clicking the 'Search' button/icon.
- [ ] Display an error message when an unlisted item is entered.

**Main Data Display Component**

- [ ] Display results for each recipe in the main component.
- [ ] Remain on the landing page if no search ingredient has been entered.

**Summary Detail Component**

_Display the following information of the selected recipe:_

- [ ] Name
- [ ] Category
- [ ] List of instruction
- [ ] List of nutrition
- [ ] Add a Link to the instruction video

## Our Solution

### Concept

We developed a unique web app with a distinctive brand and a whimsical, animated design. YumYumYes! is intended to make recipe browsing fun! Colorful mascots Yumi and Chef Carrots welcome visitors to our pages, and delightful visual motifs including text gradients, 3d colored balls, dashed lines and gentle curves are intended to make the app feel more alive and engaging.

YumYumYes! allows users to search for recipes by ingredient and filter by useful tags such as difficulty, occasion, etc. The app also allows users to save recipes to their favorites list, and to view their favorites list at any time.

The app is built as a fully responsive web app compatible with all modern web browsers, both mobile and desktop. We've taken care to make it intuitive for all users, and accessible to users with different abilities.

### Screenshots

<div style="display:flex;gap:1rem;flex-wrap:wrap;">
    <div style="flex:1;min-width: 200px;">
        <em>Home Page</em>
        <a href="public/screenshots/screenshot-home-dev.png">
            <img src="public/screenshots/screenshot-home-dev.png" alt="Home Page">
        </a>
    </div>
    <!--
    <div style="flex:1;min-width: 200px;">
        <em>Home Page</em>
        <a href="public/screenshots/screenshot-home-dev.png">
            <img src="public/screenshots/screenshot-home-dev.png" alt="Home Page">
        </a>
    </div>
    <div style="flex:1;min-width: 200px;">
        <em>Home Page</em>
        <a href="public/screenshots/screenshot-home-dev.png">
            <img src="public/screenshots/screenshot-home-dev.png" alt="Home Page">
        </a>
    </div>
    <div style="flex:1;min-width: 200px;">
        <em>Home Page</em>
        <a href="public/screenshots/screenshot-home-dev.png">
            <img src="public/screenshots/screenshot-home-dev.png" alt="Home Page">
        </a>
    </div>
    -->
</div>

### Links

- Live Site URL: [YumYumYes.com](https://yumyumyes.com)
- Source Code: [Github Repository](https://github.com/chingu-voyages/v46-tier2-team-19)
- Design Mockup: [YumYumYes Figma Mockup](https://www.figma.com/file/CbJFJOPY0r5EbEpRSNrx9b/YumYumYes-wireframe)
