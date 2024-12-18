const moviesData = [
  {
    id: 1,
    title: 'Casa de Papel',
    description: 'A criminal mastermind known as "The Professor" orchestrates the biggest heist in recorded history by assembling a group of specialists.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_FMjpg_UX1000_.jpg',
    rating: 4.1,
    trailerURL: 'https://www.youtube.com/embed/hMANIarjT50'
  },
 
  {
    id: 2,
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family\'s financial future as he battles terminal lung cancer.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg',
    rating: 4.5,
    trailerURL: 'https://www.youtube.com/embed/HhesaQXLuRY'
  },
  {
    id: 3,
    title: 'The Witcher',
    description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    rating: 4.0,
    trailerURL: 'https://www.youtube.com/embed/ndl1W4ltcmg'
  },
  {
    id: 4,
    title: 'Peaky Blinders',
    description: 'A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_.jpg',
    rating: 4.7,
    trailerURL: 'https://www.youtube.com/embed/oVzVdvGIC7U'
  },
  {
    id: 5,
    title: 'Dark',
    description: 'A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.',
    posterURL: 'https://th.bing.com/th/id/R.78b672d45ae312951116aa870df0be35?rik=ml7eH6XcM9atAw&riu=http%3a%2f%2fwww.impawards.com%2fintl%2fgermany%2ftv%2fposters%2fdark.jpg&ehk=alOWYdZqzpy4Gu5R1pU%2fNw323neyzN0Vtt7ntjmFGng%3d&risl=&pid=ImgRaw&r=0',
    rating: 3.0,
    trailerURL: 'https://www.youtube.com/embed/rrwycJ08PSA'
  },
  {
    id: 6,
    title: 'The Crown',
    description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the twentieth century.',
    posterURL: 'https://th.bing.com/th/id/R.6944899ec64230ad7aef89826edc6942?rik=D%2fAD9%2bVGoeg1lw&pid=ImgRaw&r=0',
    rating: 2.0,
    trailerURL: 'https://www.youtube.com/embed/JWtnJjn6ng0'
  },
  {
    id: 7,
    title: 'Oppenheimer',
    description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg',
    rating: 4.8,
    trailerURL: 'https://www.youtube.com/embed/uYPbbksJxIg'
  },
  {
    id: 8,
    title: 'Barbie',
    description: 'Barbie suffers a crisis that leads her to question her world and her existence. Join her on a journey of self-discovery in the real world.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    rating: 4.2,
    trailerURL: 'https://www.youtube.com/embed/pBk4NYhWNMM'
  },
  {
    id: 9,
    title: 'Avatar: The Way of Water',
    description: 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na\'vi race to protect their home.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg',
    rating: 4.7,
    trailerURL: 'https://www.youtube.com/embed/d9MyW72ELq0'
  },
  {
    id: 10,
    title: 'Game of Thrones',
    description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg',
    rating: 4.6,
    trailerURL: 'https://www.youtube.com/embed/KPLWWIOCOOQ'
  },
  {
    id: 11,
    title: 'Dune',
    description: 'A noble family becomes embroiled in a war for control of the galaxy\'s most valuable asset while its heir discovers a destiny greater than he could ever imagine.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
    rating: 4.5,
    trailerURL: 'https://www.youtube.com/embed/8g18jFHCLXk'
  },
  {
    id: 12,
    title: 'Spider-Man: No Way Home',
    description: 'Peter Parker seeks help from Doctor Strange when his secret identity is exposed, leading to multiverse-spanning chaos.',
    posterURL: 'https://th.bing.com/th/id/OIP.vcgpjxcMOiZ-5OHIUB-fTAHaJ4?w=137&h=183&c=7&r=0&o=5&pid=1.7',
    rating: 3.5,
    trailerURL: 'https://www.youtube.com/embed/JfVOs4VSpmA'
  },
  {
    id: 13,
    title: 'The Queen\'s Gambit',
    description: 'Orphaned chess prodigy Beth Harmon struggles with addiction while striving to become the world\'s greatest chess player.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_.jpg',
    rating: 4.9,
    trailerURL: 'https://www.youtube.com/embed/oZn3qSgmLqI'
  },
  {
    id: 14,
    title: 'The Batman',
    description: 'Batman ventures into Gotham City\'s underworld to face a mysterious villain armed with dangerous new technology.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg',
    rating: 4.5,
    trailerURL: 'https://www.youtube.com/embed/mqqft2x_Aa4'
  },
  {
    id: 15,
    title: 'Lupin',
    description: 'A modern-day gentleman thief seeks to avenge his father\'s death while inspired by the classic tales of Arsène Lupin.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BZjEyMmUyYmYtNTAwYi00OWUwLWJlNzEtMDM2N2QxNzIwMTdjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    rating: 2.0,
    trailerURL: 'https://www.youtube.com/embed/ga0iTWXCGa0'
  },
  {
    id: 16,
    title: 'Encanto',
    description: 'The Madrigal family, living in a magical house in Colombia, must unite to save their miracle when it begins to fade.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg',
    rating: 4.6,
    trailerURL: 'https://www.youtube.com/embed/CaimKeDcudo'
  },
  {
    id: 17,
    title: 'Squid Game',
    description: 'Hundreds of cash-strapped contestants accept a strange invitation to compete in children\'s games for a tempting prize, but the stakes are deadly.',
    posterURL: 'https://th.bing.com/th/id/OIP.qbN_eed32JF9rqE8YtlXpQHaLE?rs=1&pid=ImgDetMain',
    rating: 4.7,
    trailerURL: 'https://www.youtube.com/embed/oqxAJKy0ii4'
  },
  {
    id: 18,
    title: 'No Time to Die',
    description: 'James Bond comes out of retirement to face a mysterious villain armed with dangerous new technology.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg',
    rating: 3.0,
    trailerURL: 'https://www.youtube.com/embed/BIhNsAtPbPI'
  }
];

export default moviesData;
