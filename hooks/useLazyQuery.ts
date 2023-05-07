import { useQuery } from '@tanstack/react-query'
import {
  type QueryKey,
  type QueryFunction,
  type UseQueryOptions,
} from '@tanstack/react-query'

export default function useLazyQuery(
  key: QueryKey,
  fn: QueryFunction,
  options: UseQueryOptions = {}
) {
  const query = useQuery(key, fn, {
    ...options,
    enabled: false,
  })

  return [query.refetch, query]
}
