import { useState } from 'react'
import { type ComponentMeta } from '@storybook/react'
import Pagination from './Pagination'

export default {
  title: 'Common/Pagination/BoardPagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>

export const Default = () => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Pagination
      count={5}
      currentPage={currentPage}
      totalPage={8}
      onChange={page => setCurrentPage(page)}
    />
  )
}

export const Short = () => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Pagination
      count={5}
      currentPage={currentPage}
      totalPage={3}
      onChange={page => setCurrentPage(page)}
    />
  )
}

export const Long = () => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Pagination
      count={10}
      currentPage={currentPage}
      totalPage={50}
      onChange={page => setCurrentPage(page)}
    />
  )
}
