const projects = [
  {
    title: 'TODO List',
    devs: ['TodoList • Front End Dev • 2022'],
    description:
      '"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. It also allows you to edit notes and delete task that has been completed.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'asset/todo-list.png',
  },
  {
    title: 'BOOKSTORE CMS',
    devs: ['Bookstore • Full Stack Dev 2022'],
    description:
      'This is an online library application that enables users to keep track of books in their library by adding to and removing books from a list. user can also check the percentage reading the book. Built with React JS, Redux and CSS',
    tags: ['JavaScript', 'React', 'Redux'],
    image: 'asset/bookstore.png',
  },

  {
    title: 'TV MAZE',
    devs: ['Tv Maze • Front End Dev  • 2022'],
    description:
      'This is an API-based website that record the different user interactions which includes likes, comments and reservations. Three interfaces are built and each of them shows the home page, comments popup and the reservation popup.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'asset/tv-maze.png',
  },
  {
    title: 'FOOD-RECIPE APP',
    devs: ['Food Recipe • Full Stack Dev • 2022'],
    description:
      'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have and generate a shopping list based on what you have and what you are missing from a recipe.',
    tags: ['Rails', 'ruby', 'Postgres'],
    image: 'asset/food-recipe.png',
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
                        <p class="work-para">${projects[i].devs}</p>
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
                    <p class="work-para">${projects[j].devs}</p>
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
                <button type="submit" class="modal-project">See Live
                    <img src="asset/Icon.svg" alt="logo">
                </button>
                <button type="submit" class="modal-project">See Source
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
