---
id: usage
title: Usage
---

Available function:

- fetch()

## Usage

### With await

```jsx 
await redditImageFetcher.fetch({type: 'meme'}); //returns 1 meme 
await redditImageFetcher.fetch({type: 'wallpaper'}); //returns 1 wallpaper
```

### With callback

```jsx 
redditImageFetcher.fetch({type: 'meme'})
.then(result => { }); //returns 1 meme
```

### Using options

```jsx 
await redditImageFetcher.fetch({ type: 'wallpaper', total: 50 }); //returns 50 wallpapers 
 
await redditImageFetcher.fetch({
    type: 'meme',
    total: 50, 
    addSubreddit: ['memes', 'funny'], 
    removeSubreddit: ['dankmemes']
}); //returns 50 memes by filtering
```

### Custom
It can be used other than fetching memes and wallpapers.
Custom image fetch from defined subreddits:

```jsx 
await redditImageFetcher.fetch({
    type: 'custom',
    total: 50, 
    subreddit: ['cats', 'Catswhoyell', 'sleepingcats'] 
}); //returns 50 cat images
```

<!-- <strong>Note:</strong> For more usage, visit <Link to="/docs/Playground#editor-playground">Editor Playground</Link> and change the codes. -->

## Result

The functions are asynchronous and return array.

import Result from '../src/components/Demo/Result';
import ResultCode from '../src/components/Demo/ResultCode';

<Result data={ResultCode}/>

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
            <td align="left">type</td>
            <td align="center">string</td>
            <td align="left">meme, wallpaper or custom image to fetch</td>
            <td align="center">'meme'</td>
         </tr>
         <tr>
            <td align="left">total</td>
            <td align="center">number</td>
            <td align="left">How many images to get. Max is 50</td>
            <td align="center">1</td>
         </tr>
         <tr>
            <td align="left">subreddit</td>
            <td align="center">[string]</td>
            <td align="left">Custom subreddit libray</td>
            <td align="center">[ ]</td>
         </tr>
         <tr>
            <td align="left">addSubreddit</td>
            <td align="center">[string]</td>
            <td align="left">Add subreddits to subreddit library</td>
            <td align="center">[ ]</td>
         </tr>
         <tr>
            <td align="left">removeSubreddit</td>
            <td align="center">[string]</td>
            <td align="left">Remove subreddits from subreddit library</td>
            <td align="center">[ ]</td>
         </tr>
      </tbody>
   </table>
</div>
