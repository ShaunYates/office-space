# OfficeSpace

This project is a JAM stack app (Angular/Firebase) designed for mobile and desktop to allow users to create and manage office space. Specifically making use of AngularFire and Firestore to manage data. The app is designed to be realtime and responsive, providing user feedback and updates to data instantaneously.

Deployed app available at <https://office-space-e7dcc.web.app/> -> deploy by `yarn build` followed by a `firebase deploy`

## Development server

Yarn was used as the package manager, v1.22.7 to be specific.

Run `yarn install` followed by `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

The development server connects directly to the Firestore instance, just as the deployed app does.

## Differences to the Figma Design

Design was mainly followed with the main difference being to delete/edit a staff member you need to swipe their name to the left, showing the different options

## Project Structure

Under the app folder there is a shared folder for all shared components, dtos, models, pipes and services. The rest of the project is a flat structure with feature components being imported into the main app module -> possible improvement for scalability would be breaking this up into several modules instead.

## Version control

### Git

A rebasing strategy is used for the main branch to keep it up to date with the development branch. Since I am the only one working on this project I pushed my commits straight to develop, but ideally feature branches should be used with all their commits squashed into one on develop as a feature.

## Possible Improvements

- Increased security on Firestore.rules and authentication
- State management through a Redux tool/technology such as NGXS
- Deleting all staff associated with an office when an office is deleted
- Further UI enhancements (picking colour for office, pagination of staff / filtering of offices, allow uses to choose avatar rather than using ngx-avatar, more than just rudimentary form validation etc.)
