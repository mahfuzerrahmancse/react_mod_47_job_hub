
import Banner from '../banners/Banner';
import CategoryList from '../categoryList/CategoryList';
import FeaturedJobs from '../featuredJobs/FeaturedJobs';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <CategoryList></CategoryList>
        <FeaturedJobs></FeaturedJobs>
      </div>
    );
};

export default Home;