import { username, password } from "./secrets";

export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const NEW_MEME = 'NEW_MEME';

function receiveMemes(json) {

    console.log(json.data);
    const memes = json.data;

    return {
        type: RECEIVE_MEMES,
        memes
    }
}

async function fetchMemesJson() {
    return await fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
}

export function fetchMemes() {
    return async function(dispatch) {
        const json = await fetchMemesJson();
        return dispatch(receiveMemes(json));
    }
} 

export function newMeme(meme) {
    return {
        type: NEW_MEME,
        meme
    }
}

async function postMemeJson(params) {
    params["username"] = username;
    params["password"] = password;

    const bodyParams = Object.keys(params).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&');

    console.log('bodyParams', bodyParams);

    return fetch('https://api.imgflip.com/caption_image', {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: bodyParams
    }).then(response => response.json())

    
}

export function createMeme(new_meme_object) {
    return async function(dispatch){
        return postMemeJson(new_meme_object).then((new_meme) =>
          dispatch(newMeme(new_meme))
        );
    }
}