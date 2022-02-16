import './home.css';

const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus lacus felis, condimentum feugiat ex porta vel. Donec commodo lacus dolor, ut dictum ligula rhoncus eget. Cras tempus est vitae dignissim mattis. Ut dignissim risus a condimentum scelerisque. Fusce in condimentum nisl, a semper sapien. Nunc tincidunt massa a tincidunt posuere. Donec leo lorem, rutrum vel ex sit amet, mattis vehicula elit. Pellentesque dictum vestibulum condimentum. Phasellus molestie purus urna, tincidunt rhoncus ex rhoncus eu. Fusce ultricies, tortor ut aliquet elementum, urna eros rhoncus sapien, id pulvinar massa odio sit amet mauris. Vivamus euismod ultricies libero, vitae tincidunt libero egestas non. Sed lacus urna, tempus ut dictum mollis, dapibus et mauris.';

const Home = () => (

  <div className="container">
    <h1 className="title">Welcome to our page</h1>
    <p className="description">{paragraph}</p>

    <p className="description">{paragraph}</p>
  </div>
);

export default Home;
