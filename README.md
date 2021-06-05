# Numerai_Insights

## Authors:
* James Gerstenberger

**Version**: 1.1.14

## Overview
An application to allow Numerai users the ability to easily compare model performance. The application provides performance statistics for each model across live rounds, pending payouts, staked amounts, and mmc and correlation rankings for each model. In addition the application provides a total sum of all staked models, pending payouts across all models and total "live" staked amount which is the sum of all pending payouts with the sum of all staked amounts.

## User Instructions
To use this application, create a model collection by entering a name and adding your model names. Users can create multiple model collections and can add any number of models to each collection. Once a user has created a collection they are able to view the collection detail page which provides information on each model performance as well as collection performance. For security purposes all model collections are stored in local storage.

## Libraries, Frameworks & Packages
  * cookie-parser: 1.4.5
  * dotenv: 8.2.0
  * ejs: 3.1.5
  * express: 4.17.1
  * node-fetch: 2.6.1
  * Jquery
  * Google Fonts
  * Font Awesome

## Setup
To utilize this application locally, clone the repository and create a .env file with ```PORT=3002```. Run npm install to download the necessary dependencies. This program utilizes node.js and therefore that must be installed as well.

## Design
CSS design follows SMACSS protocol and includes reset,base, layout, modules. and modal css files.

## API Endpoints
https://api-tournament.numer.ai/

## Credits and Collaborations
* Codefellows TA Chance Harmon
* Codefellows .eslintrc.json and .gitignore frameworks
* W3Schools
* CSS tricks
* Heroku
* Numerai Graph QL API
* Eric Meyers CSS Reset
* Egory Myznik "glyph_2" photo credit https://unsplash.com/photos/of_azYsANQY
