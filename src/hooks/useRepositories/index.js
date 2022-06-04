import { useEffect, useState } from 'react'

export const useRepositories = () => {
  const [repositories, setRepositories] = useState(null)
  const [loading, setLoading] = useState(true)
  const fetchRepositories = () => {
    globalThis.fetch('http://192.168.0.3:5000/api/repositories')
      .then(res => res.json())
      .then(res => {
        setRepositories(res)
        setLoading(false)
      }).catch(err => {
        console.log(err.message)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchRepositories()
  }, [])

  const repositoriesNode = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

  return { repositories: repositoriesNode, loading }
}
