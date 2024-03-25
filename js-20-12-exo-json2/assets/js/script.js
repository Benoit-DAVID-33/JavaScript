
function loadUser () {
    fetch("https://jsonplaceholder.typicode.com/users/"+loadUserId.value)
    .then(reponse => reponse.json())
    .then(data =>{  console.log(data)
        user.style.display = 'block';
        userName.textContent = `${data.name}`;
        userUserName.textContent = `${data.username}`;
        userId.textContent = `${data.id}`;
        userEmail.textContent = `${data.email}`;
        userPhone.textContent = `${data.phone}`;
        userWebsite.textContent = `${data.website}`;
        addressStreet.textContent = `${data.address.street}`;
        addressSuite.textContent = `${data.address.suite}`;
        addressCity.textContent = `${data.address.city}`;
        addressZipcode.textContent = `${data.address.zipcode}`;
        addressLat.textContent = `${data.address.geo.lat}`;
        addressLng.textContent = `${data.address.geo.lng}`;
        
        companyName.textContent = `${data.company.name}`;
        companyCatchPhrase.textContent = `${data.company.catchPhrase}`;
        companyBS.textContent = `${data.company.bs}`;
        console.log(data.name);
});
}

loadUser();
            



