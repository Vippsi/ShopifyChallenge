# Shopify Challenge - Vippsi

## Description:

This application serves to provide a way to view NASA's "A Picture a Day" (APOD) API. 
<br/>Date selection allows for choosing the starting date.
<br/>A user can "like" and "unlike" posts.

## Technologies:
    - React
    - Axios


## Challenges:

The biggest challenges that I faced while building this project was "How should I store "likes" for persistance"

<br/>

I spent the majority of my time working on this feature. 
I realized that I could store the data in localStorage for persistance. However, I struggled with keeping things in sync. I learned about useRef, and this helped tremendously! In the end, I wasn't able to complete this feature. I ran out of time troubleshooting "when I reload the page, I can no longer toggle the state of the 'like' button" 

<br/>

In the future, I want to finish the "like" persistance feature, add a loading indicator, for when data is being fetched. I also wanted to add other NASA API's to the project for viewing

## How to Install
```
npm install
npm start
```

## Live Site:

https://dreamy-morse-462c65.netlify.app/
