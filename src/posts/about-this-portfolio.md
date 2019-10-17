---
title: 'About this portfolio'
slug: 'about-this-portfolio'
type: 'blog'
date: '25th September 2019'
---

## I needed a new portfolio
It came across my mind that my portfolio was a little outdated in terms of technologies used to build it. 

The previous website utilized just HTML, plain CSS and vanilla JavaScript. Updating and deployment I would consider tedious.

![old portfolio website](images/old-portfolio.png)

### What was I looking for?
- Component based - love the absence of the loading bar on top of browser's window while switching pages.
- Performance - unlike some WordPress gurus, I'd wouldn't be okay with the page audit sitting on 20/100. 
- Ease of updates - would rather focus on creating rather than fixing.
- Search Engine Optimization - it's a long term game that might turn out to beneficial in the future. 
- Easy to deploy - it builds itself automatically after ```git push```.

### What options did I also consider?

I've done some research about different tools for the job and came up with something like this:

|                                 | Gatsby |   Create React App   |        Next.js       |
|:-------------------------------:|:------:|:--------------------:|:--------------------:|
|          **Rendering**          | Static | Client Side Rendered | Server Side Rendered |
| **Simple to set up and deploy** |   Yes  |          Yes         |          No          |
|             **SEO**             |  Good  |          Bad         |         Good         |
|      **Frequent updates***      |   No   |          Yes         |          Yes         |

frequent updates* - constantly updating values - like once every second.

Unlike next.js, a Gatsby site can be hosted on [netlify](https://www.netlify.com) for free.

![Choosingwisely](images/yoda.jpg)

### Why did I choose Gatsby?

There are a couple of reasons standing behind my choice. 
- Gatsby is a React-based Static Site Generator.
- It's great in terms of SEO.
- Rich plugin directory - there's no point in reinventing the wheel.
- Uses GraphQL to build it's data layer and therefore - fetching data from multiple sources works like a charm.
- Ability to be hosted on netlify.


### How did it go?

In the past I've done a couple of small project using React, so I was already somewhat familiar with relevant practices.

#### Sourcing content
Like my wife rushing to Starbucks to get her pumpkin spice latte as soon as it's back on the menu, I rushed into sourcing content using a headless CMS. It was like that latte - after all it's coffee, but I didn't like something about it. That something in this case was **image optimization**. 

- RICH TEXT RENDERERING THOUGHTS TO BE ADDED

In order to do this I set up my content model, installed ```gatsby-source-contentful```. The idea backing it up seemed great - easy to implement. Set up the deployment trigger on content changes. 

I got to admit that that I enjoyed the development process using Gatsby. I'm glad that I made this choice for a project like a portfolio website - I would definitely choose it again.

I have to note that Gatsby has an incredible [documentation](https://www.gatsbyjs.org/docs/) and [tutorials](https://www.gatsbyjs.org/tutorial/) to get you up and running fairly quickly.

## - OFF TO BED - GRAMMARLY WOULD HELP - WILL FINISH IT ASAP.
