---
id: usage
title: Usage
---

Available functions:

- getMemes()
- getWallpapers()

## Usage

### With await

```jsx 
await redditImageFetcher.getMemes(); //returns 1 meme 
await redditImageFetcher.getWallpapers(); //returns 1 wallpaper
```

### With callback

```jsx 
redditImageFetcher.getMemes()
.then(response => { }); //returns 1 meme

redditImageFetcher.getWallpapers()
.then(response => { });//returns 1 wallpaper
```

### Using options

```jsx 
await redditImageFetcher.getWallpapers({ total: 50 }); //returns 50 wallpapers 
 
await redditImageFetcher.getMemes({ 
    total: 50, 
    addSubReddit: ['memes', 'funny'], 
    removeSubReddit: ['dankmemes'] 
}); //returns 50 memes by filtering
```

### Other usage
It can be used other than fetching memes and wallpapers.
Use as cat image fetcher:

```jsx 
await redditImageFetcher.getMemes({ 
    total: 50, 
    removeAllSubReddit: true, 
    addSubReddit: ['cats', 'Catswhoyell', 'sleepingcats'] 
}); //returns 50 cat images
```

<!-- <strong>Note:</strong> For more usage, visit <Link to="/docs/Playground#editor-playground">Editor Playground</Link> and change the codes. -->

## Result

The functions are asynchronous and return array.

```
[
  {
    id: "hfh51v",
    title: "Illuminated City at Night [1920 x 1200]",
    postLink: "https://redd.it/hfh51v",
    image: "https://i.redd.it/b6x9i2n830751.jpg",
    thumbnail: "https://b.thumbs.redditmedia.com/mLCk8Bh0N4M8hZafHsbAmw8rM7JEEznsT2nRZSo3GsU.jpg",
    subreddit: "wallpaper",
    NSFW: false,
    spoiler: false,
    createdUtc: 1593066557,
    
  },
  {
    id: "h9glhi",
    title: "Missing Home by Just Jaker",
    postLink: "https://redd.it/h9glhi",
    image: "https://cdnb.artstation.com/p/assets/images/images/027/020/665/large/just-jaker-galax-noise.jpg",
    thumbnail: "https://b.thumbs.redditmedia.com/4utBLNbsIDDLl46z494PCRkDhmAnapQq9FL7l-07aJo.jpg",
    subreddit: "ImaginaryFuturism",
    NSFW: false,
    spoiler: false,
    createdUtc: 1592228591
  }
]
```


## Options

<div className="z-table-wrapper">
  <table>
   <thead>
      <tr>
         <th align="left">Property</th>
         <th align="center">Type</th>
         <th align="left">Description</th>
         <th align="center">Default</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td align="left">total</td>
         <td align="center">number</td>
         <td align="left">How many images to get. Max is 50</td>
         <td align="center">1</td>
      </tr>
      <tr>
         <td align="left">addSubReddit</td>
         <td align="center">[string]</td>
         <td align="left">Add subreddits to subreddit library</td>
         <td align="center">[ ]</td>
      </tr>
      <tr>
         <td align="left">removeSubReddit</td>
         <td align="center">[string]</td>
         <td align="left">Remove subreddits from subreddit library</td>
         <td align="center">[ ]</td>
      </tr>
      <tr>
         <td align="left">removeAllSubReddit</td>
         <td align="center">boolean</td>
         <td align="left">Remove all default subreddits from subreddit library</td>
         <td align="center">false</td>
      </tr>
   </tbody>
</table>
</div>
