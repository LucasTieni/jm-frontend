const apiUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:8080' // development api
    : 'http://localhost:8080'; // production api

export {
    apiUrl
};