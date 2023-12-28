import './Heading.css';

const Heading = props => {
  const { headingText } = props;

  return <h2 className='heading'>{headingText}</h2>;
};

export default Heading;