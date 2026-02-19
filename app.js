let btn = document.querySelector('#btn');

btn.addEventListener('click', async () => {
    let p = document.querySelector('#output');
    p.innerText = "Finding a funny fact...";
    let fact = await getFacts();
    // console.log(fact);
    p.innerText = fact;
});

let url = 'https://catfact.ninja/fact'

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (err) {
        console.log(err);
        return;
    }
}