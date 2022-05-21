const projects = [
  {
    title: 'Tonic',
    devs: ['CANOPY', ' • Back End Dev', ' • 2015'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tags: ['html', 'css', 'ruby', 'javascript'],
    image: 'asset/Snapshoot-Portfolio3.svg',
  },
  {
    title: 'Multi-Post Stories',
    devs: ['Facebook', ' • Full Stack Dev', ' • 2018'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    tags: ['html', 'css', 'ruby', 'javascript'],
    image: 'asset/Snapshoot-Portfolio.svg',
  },

  {
    title: 'Facebook 360',
    devs: ['Facebook', ' • Full Stack Dev', ' • 2020'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tags: ['html', 'css', 'ruby', 'javascript'],
    image: 'asset/Snapshoot-Portfolio1.svg',
  },
  {
    title: 'Uber Navigation',
    devs: ['Uber', ' • Lead Developer', ' • 2022'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tags: ['html', 'css', 'ruby', 'javascript'],
    image: 'asset/Snapshoot-Portfolio2.svg',
  },
];

const workpage = document.querySelector('#workpage');
for (let i = 0; i < projects.length; i += 1) {
  workpage.innerHTML += `
           <div class="work-box">
                <div class="work-img">
                    <img src="${projects[i].image}" alt="image one">
                </div>
                <div class="work-info">
                    <h2 class="work-title">${projects[i].title}</h2>
                    <div class="work-meta">
                        <p class="work-para">canopy</p>
                        <img src="asset/Counter.svg" alt="dot">
                        <p class="work-para1">Back End Dev</p>
                        <img src="asset/Counter.svg" alt="dot">
                        <p class="work-para2">2015</p>
                    </div>
                    <div class="work-note">
                        <p>${projects[i].description}</p>
                    </div>
                    <div class="work-tag">
                        <ul>
                        ${projects[i].tags
    .map((j) => `<li> <div class="tag">${j}</div></li>`)
    .join('')}
                        </ul>
                    </div>
                    <button type="button" id="btn-${i}" class="see-project">See Project</button>
                </div>
            </div>
           `;
}

const modal = document.getElementById('modal1');

for (let j = 0; j < projects.length; j += 1) {
  const seeBtn = document.querySelectorAll(`[id=btn-${j}]`);
  seeBtn.forEach((bt) => {
    bt.addEventListener('click', () => {
      modal.style.display = 'block';
      modal.innerHTML = `
            <div class="modal-box">
            <span class="closeBtn">&times;</span>
            <div class="modal-info">
                <h3 class="modal-title">${projects[j].title}</h3>
                <div class="modal-meta">
                    <p class="modal-para">canopy</p>
                    <img src="asset/Counter.svg" alt="dot">
                    <p class="modal-para1">Back End Dev</p>
                    <img src="asset/Counter.svg" alt="dot">
                    <p class="modal-para2">2015</p>
                </div>
            </div>
            <div class="modal-img">
                <img src="${projects[j].image}" alt="image one">
            </div>
                <div class="modal-note">
                    <p>${projects[j].description}</p>
                    <p>${projects[j].description}</p>
                    <p>${projects[j].description}</p>
                </div>
                <div class="modal-dir">
                <div class="modal-tag">
                    <ul>
                    ${projects[j].tags
    .map((k) => `<li><div class="tag">${k}</div></li>`)
    .join('')}     
                    </ul>
                    <ul>
                    ${projects[j].tags
    .map((k) => `<li><div class="tag">${k}</div></li>`)
    .join('')}
                    </ul>
                </div>
                <img class="line" src="asset/Vector4.svg" alt="line">
                <div class="modal-btn">
                <button type="button" class="modal-project">See Live
                    <img src="asset/Icon.svg" alt="logo">
                </button>
                <button type="button" class="modal-project">See Source
                    <img src="asset/Vector.svg" alt="git_logo">
                </button>
                </div>
            </div>
        </div>
            `;
      const closeBtn = document.querySelector('.closeBtn');
      closeBtn.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
      });
    });
  });
}
