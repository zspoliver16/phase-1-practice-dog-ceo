fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((data) => renderImages(data))

function renderImages(objStoringUrls) {
    urlArr = objStoringUrls.message

    const imgContainer = document.querySelector('#dog-image-container')

    urlArr.forEach((url) => {
        const img = document.createElement('img')
        img.src = url
        imgContainer.appendChild(img)
    })
}

fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((data) => renderBreedNames(data))

function renderBreedNames(objStoringBreeds) {
    breedObj = objStoringBreeds.message
    breedArr = Object.keys(breedObj)

    const breedContainer = document.querySelector('#dog-breeds')

    breedArr.forEach((breed) => {
        const li = document.createElement('li')
        li.textContent = breed
        breedContainer.appendChild(li)

        li.addEventListener('click', () => li.style.color = 'salmon')
    })

    const dropdown = document.querySelector('#breed-dropdown')

    dropdown.addEventListener('change', (e) => handleSelectBreed(e))

    function handleSelectBreed(e) {

        breedContainer.textContent = ""

        const filteredBreeds = breedArr.filter((breed) => {
            if (breed.charAt(0) === e.target.value) {
                return true
            }
            else {
                return false
            }
            // return breed[0] === e.target.value
        })

        filteredBreeds.forEach((breed) => {
            const li = document.createElement('li')
            li.textContent = breed
            breedContainer.appendChild(li)
    
            li.addEventListener('click', () => li.style.color = 'salmon')
        })
    }
}