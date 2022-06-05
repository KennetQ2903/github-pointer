import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../../graphql/queries.js'
export const useRepositories = () => {
  const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES)
  const { repositories = null } = data
  const repositoriesNode = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

  return { repositories: repositoriesNode, loading, refetch }
}
