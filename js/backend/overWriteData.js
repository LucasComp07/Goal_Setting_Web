function overWriteData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    console.log('succesfully overwritten a data!');
}

export default overWriteData;