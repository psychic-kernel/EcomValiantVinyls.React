import { UncontrolledCarousel, uncontrolledCarousel } from 'reactstrap';

const Jumbotron = () => {

    return (
        <>
            <UncontrolledCarousel
                items={[
                    {
                        altText: 'product banner images',
                        key: 1,
                        src: '/assets/banner-1.jpeg',
                        height: `${10}%`
                    },
                    {
                        altText: 'product banner images',
                        key: 1,
                        src: '/assets/banner-2.jpeg',
                        height: `${10}%`
                    },
                    {
                        altText: 'product banner images',
                        key: 1,
                        src: '/assets/banner-3.jpeg',
                        height: `${10}%`
                    }
                ]}
            />
        </>
    );
}; export default Jumbotron;