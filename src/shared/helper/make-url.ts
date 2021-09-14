const makeUrl = (url: string, data: Record<string, any>) => {
    for (let key in data) {
        if (!data.hasOwnProperty(key)) {
            continue;
        }
        url = url.replace("{" + key + "}", data[key]);
    }
    return url;
}
export default makeUrl