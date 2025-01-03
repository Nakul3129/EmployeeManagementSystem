import { useNavigate, useParams, /* other hooks */ } from 'react-router-dom'; 


 const withRouter = WrappedComponent => props => {
  const navigate = useNavigate();
    const params = useParams();
  
  // other hooks

  return (
    <WrappedComponent
      {...props}
      {...{ navigate /* other hooks */ }}
      {...{params : {params}}}
    />
  );
};

export default withRouter;