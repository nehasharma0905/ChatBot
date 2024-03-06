import axios from 'axios';
export const getResponse = async (data) => {
    console.log({data});
    // return "Hello, I am a bot. How can I help you today?"
    const options = {
        method: 'POST',
        url: 'https://chatgpt-api8.p.rapidapi.com/',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.REACT_APP_CHAT_GPT_API,
            'X-RapidAPI-Host': process.env.REACT_APP_CHAT_GPT_API_URL
        },
        data: data
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data.text;
    } catch (error) {
        console.error(error);
        return "Sorry, I am not able to process your request at the moment(we might have reached rate limit). Please try again later. Thank You!";
    }
}