/**
 * Root file
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */

export const callGetApi = (url) => {
    const response = new Promise((resolve, reject) => {
        fetch(url).then(response => response.json())
        .then(data => resolve(data))
        .catch(_ => {
            reject("ERROR")
        });
    });
    return response;
}