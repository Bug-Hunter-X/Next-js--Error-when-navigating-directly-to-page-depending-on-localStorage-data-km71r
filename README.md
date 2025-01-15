# Next.js LocalStorage Data Error

This repository demonstrates a common error encountered when using localStorage to store data in Next.js applications.  The issue arises when a user directly accesses a page that relies on data in localStorage which is not yet available.  This can lead to errors if the expected data is not found.

## Scenario

The application has two pages: `Home` and `About`.

- The `About` page accesses user data from `localStorage`.
- If the user navigates directly to `/about` without first visiting `/home`, the `user` data will not exist, resulting in an error.

## Solution

The provided solution addresses this by adding a check for the user's existence before accessing data from `localStorage` and handling cases where the data might be missing.
