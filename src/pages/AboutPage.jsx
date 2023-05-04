import firstImage from '../assets/image1.png';
import secondImage from '../assets/image2.avif';
import thirdImage from '../assets/image3.png';
import ProfileView from '../styles/ProfileView';

const devProfiles = [
  {
    image: firstImage,
    devName: 'Kashuba Ivan',
    devInfo: 'Frontend, Backend',
    livingPlace: 'Chop, UA',
  },
  {
    image: secondImage,
    devName: 'Volodymyr Kopynets',
    devInfo: 'Frontend, Backend',
    livingPlace: 'Uzhhorod, UA',
  },
  {
    image: thirdImage,
    devName: 'Voloshyn Roman',
    devInfo: 'Android, Backend',
    livingPlace: 'Khust, UA',
  },
];

const AboutPage = () => {
  return (
    <div className='text-int-white-main flex flex-col gap-4 px-10 text-[18px]'>
      <div className='text-4xl font-semibold'>About Us</div>
      <div>
        Welcome to <span className='font-bold'>KINO-EXPERT</span>, the ultimate destination for movie enthusiasts! Our
        mission is to create an
        engaging and informative platform for film lovers to discover, discuss, and review their favorite movies.
      </div>
      <div>
        At <span className='font-bold'>KINO-EXPERT</span>, we believe that the magic of cinema should be experienced and
        shared by everyone. Our
        platform offers a unique blend of features that cater to the needs of both casual movie-goers and dedicated film
        aficionados. Here's what you can do on our web-app:
      </div>
      <ul className='list-decimal px-4 flex flex-col gap-0.5'>
        <li>
          <span className='italic font-semibold'>Discover Films:</span> Explore our extensive library of films, spanning
          across a wide
          range of genres, countries,
          and
          decades. Dive into the world of cinema and unearth hidden gems or revisit timeless classics.
        </li>
        <li>
          <span className='italic font-semibold'>Read Reviews:</span> Get insightful perspectives on movies from fellow
          film lovers. Our user-generated reviews
          provide diverse opinions, ensuring that you'll always find a viewpoint that resonates with you.
        </li>
        <li>
          <span className='italic font-semibold'>Write Reviews:</span> Join the conversation by sharing your own
          thoughts and opinions on the films you've watched.
          Our platform encourages thoughtful critique and lively discussions, helping you connect with like-minded movie
          enthusiasts.
        </li>
        <li>
          <span className='italic font-semibold'>Search by Name or Genre:</span> Can't remember the name of that amazing
          film you watched years ago? Our
          user-friendly
          search function allows you to easily find movies by title, genre, or even keywords, making it a breeze to
          discover new favorites.
        </li>
        <li>
          <span className='italic font-semibold'>Personalized Genre Insights:</span> Keep track of your movie-watching
          habits with our dynamic genre analysis
          feature.
          By analyzing your film selections, we'll help you uncover your favorite genres and make personalized
          recommendations based on your taste.
        </li>
      </ul>
      <div>
        Join us today at <span className='font-bold'>KINO-EXPERT</span> and become a part of our thriving community of
        movie lovers. We can't wait
        to hear what you think, and together, we'll embark on a cinematic journey like no other. Happy watching!
      </div>
      <div className='text-4xl font-semibold text-center'>Developer Team</div>
      <div className='flex flex-row flex-wrap justify-center gap-10 text-center mb-5'>
        {devProfiles.map((item, index) => (
          <ProfileView key={index} src={item} />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
