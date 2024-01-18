

search = document.querySelector('button')
search.addEventListener('click', function() {
    text = document.querySelector('input').value;

    let categories = ["Website", "Raspberry Pi"];

    for (let i = 0; i < categories.length; i++)
    {
        if (text == categories[i])
        {
            alert('you typed an existing category');
        }
    }
});