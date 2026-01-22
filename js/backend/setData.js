function setData(data) {
    localStorage.setItem(`${localStorage.length}`, JSON.stringify(data));
    return console.log("Data successfully set!");
}

export default setData;