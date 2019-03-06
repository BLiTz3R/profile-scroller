const data = [
    {
        name: 'Charis Lipton',
        age: 39,
        gender: 'male',
        lookingfor: 'female',
        location: 'Chaidari, GR',
        image: 'https://randomuser.me/api/portraits/men/29.jpg'
    },
    {
        name: 'Teo Fagg',
        age: 32,
        gender: 'female',
        lookingfor: 'male',
        location: 'Piraeus, GR',
        image: 'https://randomuser.me/api/portraits/women/37.jpg'
    },
    {
        name: 'Papi Karafl',
        age: 37,
        gender: 'male',
        lookingfor: 'male',
        location: 'Menidi, GR',
        image: 'https://randomuser.me/api/portraits/men/25.jpg'
    }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next event listener
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile() {
    const currentProfile = profiles.next().value;


    document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
}

// Profile iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            if (nextIndex < profiles.length) {
                return { value: profiles[nextIndex++], done: false }
            } else {
                nextIndex = 1;
                return { value: profiles[0] } 
            }
        }
    };
}