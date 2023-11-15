# BoolFlix

## Description

The aim is to replicate netflix

## Milestone 0:

Design the structure of the global state along the lines of the exercises carried out in the previous days.

## Milestone 1:

Create a basic layout with a searchbar (an input and a button) in which we can completely or partially write the name of a film. We can, by clicking the button, search the API for all the films that contain what the user wrote.
After the API response, we want to display the following values ​​on the screen for each film found:
Title
Original title
Tongue
Vote

## Milestone 2:

We transform the static string of the language into a real flag of the corresponding nation, managing the case in which we do not have the flag of the nation returned by the API (the flags are not present in FontAwesome).

We then broaden the search to include TV series. With the same search action we will have to take both the films that match the query and the TV series, being careful to have similar values ​​at the end (the series and films have different fields in the response JSON, similar but not always identical)
Here is an example of a call for TV series:
https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs

## Milestone 3:

In this milestone we first add the cover of the film or series to our list. Only the final part of the URL is passed to us by the API, this is because we can then generate many different dimensions from that portion of the URL. We will therefore have to take the base URL of the TMDB images: https://image.tmdb.org/t/p/ and then add the dimension we want to generate (we find all the possible dimensions at this link: https://www. themoviedb.org/talk/53c11d4ec3a3684cf4006400) and then add the final part of the URL passed by the API.
URL example:
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png

We then transform the vote from 1 to 10 decimal into an integer number from 1 to 5, so as to allow us to print on the screen a number of solid stars ranging from 1 to 5, leaving the remaining ones empty (we find the icons in FontAwesome).
We always round up to the next unit, we don't handle half-full (or half-empty :P) icons

## Milestone 4:

Let's transform what we have done so far into a real webapp, creating a complete Netflix-like layout:
A header containing logo and search bar
After searching for something in the searchbar, the results appear in the form of a "card" in which the background is represented by the cover image (I recommend the poster_path with w342)
By moving the mouse over a card (on hover), the additional information already taken in the previous points plus the overview appear
