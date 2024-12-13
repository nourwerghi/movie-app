const moviesData = [
  {
    title: 'Casa de Papel',
    description: 'A criminal mastermind known as "The Professor" orchestrates the biggest heist in recorded history by assembling a group of specialists.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_FMjpg_UX1000_.jpg',
    rating: 4.1
  },
 
  {
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family\'s financial future as he battles terminal lung cancer.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg',
    rating: 4.5
  },
  {
    title: 'The Witcher',
    description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    rating: 4.0
  },
  {
    title: 'Peaky Blinders',
    description: 'A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_.jpg',
    rating: 4.7
  },
  {
    title: 'Dark',
    description: 'A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg',
    rating: 4.4
  },
  {
    title: 'The Crown',
    description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the twentieth century.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BZmY0MzBlNjctNTRmNy00Njk3LWFjMzctMWQwZDAwMGJmY2MyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    rating: 4.3
  },
  {
    title: 'Black Mirror',
    description: 'An anthology series exploring a twisted, high-tech multiverse where humanity\'s greatest innovations and darkest instincts collide.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BZTgyNTBkNzctN2I3NC00NTA1LWJiMDMtYzA2MmYyZjc1NWQzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
    rating: 2.4
  },
  
  {
    title: 'The Last of Us',
    description: 'After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity\'s last hope.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg',
    rating: 2.0
  },
  {
    title: 'Game of Thrones',
    description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg',
    rating: 4.6
  },
  {
    title: 'Dune',
    description: 'A noble family becomes embroiled in a war for control of the galaxy\'s most valuable asset while its heir discovers a destiny greater than he could ever imagine.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
    rating: 4.5
  },
  {
    title: 'Spider-Man: No Way Home',
    description: 'Peter Parker seeks help from Doctor Strange when his secret identity is exposed, leading to multiverse-spanning chaos.',
    posterURL: 'https://th.bing.com/th/id/OIP.vcgpjxcMOiZ-5OHIUB-fTAHaJ4?w=137&h=183&c=7&r=0&o=5&pid=1.7',
    rating: 4.3
  },
  {
    title: 'The Queen\'s Gambit',
    description: 'Orphaned chess prodigy Beth Harmon struggles with addiction while striving to become the world\'s greatest chess player.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_.jpg',
    rating: 4.9
  },
  {
    title: 'The Batman',
    description: 'Batman ventures into Gotham City\'s underworld to find the Riddler, a sadistic killer who targets the elite.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg',
    rating: 4.5
  },
  {
    title: 'Lupin',
    description: 'A modern-day gentleman thief seeks to avenge his father\'s death while inspired by the classic tales of Arsène Lupin.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BZjEyMmUyYmYtNTAwYi00OWUwLWJlNzEtMDM2N2QxNzIwMTdjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    rating: 4.2
  },
  {
    title: 'Encanto',
    description: 'The Madrigal family, living in a magical house in Colombia, must unite to save their miracle when it begins to fade.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg',
    rating: 4.6
  },
  {
    title: 'Squid Game',
    description: 'Hundreds of cash-strapped contestants accept a strange invitation to compete in children\'s games for a tempting prize, but the stakes are deadly.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg',
    rating: 4.7
  },
  {
    title: 'No Time to Die',
    description: 'James Bond comes out of retirement to face a mysterious villain armed with dangerous new technology.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg',
    rating: 4.4
  }
];

export default moviesData;
