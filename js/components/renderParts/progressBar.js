function progressBar(data) {
    const parent = document.createElement('div');
    const child = document.createElement('div');

    const amount = 100 / data.length;

    let numTrue = [];

    data.forEach(ele => {
        if(ele === true) {
            numTrue.push(true);
        }
    })


    const percent = amount * numTrue.length;

    child.style.width = `${percent}%`;

    child.className = 'barChild';
    parent.className = 'parentChild';

    child.textContent= `${Math.trunc(percent)}%`;

    parent.append(child);
    return parent;
}

export default progressBar;