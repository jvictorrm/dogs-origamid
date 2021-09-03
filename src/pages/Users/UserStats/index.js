import React, { lazy, Suspense, useEffect } from 'react'
import Head from '../../../components/Head';
import Loading from '../../../components/Loading';
import ErrorContainer from '../../../components/ErrorContainer';
import useFetch from '../../../hooks/useFetch';
import { STATS_INDEX } from '../../../config/api';
const UserStatsGraphs = lazy(() => import('../../../components/User/UserStatsGraphs'))

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const getData = async() => {
      const { url, options } = STATS_INDEX();
      await request(url, options);
    }
    getData();
  }, [request])

  if (loading) return <Loading />
  if (error) return <ErrorContainer error={error} />
  if (data) return (
    <Suspense fallback={<></>}>
      <Head title="Estatísticas" />
      <UserStatsGraphs data={data}/>
    </Suspense>
  )
  return null;
}

export default UserStats
