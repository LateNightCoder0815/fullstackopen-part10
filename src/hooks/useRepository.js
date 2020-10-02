import { useState, useEffect } from 'react';

import { useQuery } from '@apollo/react-hooks';

import { GET_REPO } from '../graphql/queries';


const useRepository = (id) => {
  const { data, error, loading } = useQuery(GET_REPO,{
    fetchPolicy: 'cache-and-network',
    variables: {"id": id}
  });
  
  const [repositories, setRepositories] = useState();

  const fetchRepositories = async () => {
    if(data !== undefined && data.repository !== undefined ){
        setRepositories(data.repository);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, [data]);

  if (error !== undefined) {console.log(error);}

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepository;