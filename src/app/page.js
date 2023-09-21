'use client'

// import { DateTime } from 'luxon'
import { useMemo } from 'react'
import movies from './MOCK_DATA.json'
import BasicTable from './components/BasicTable/page'
import Table from './components/Table/page'

function Home() {
  const data = useMemo(() => movies, [])

  const columns = [
    {
      header: 'First',
      accessorKey: 'first_name',
      footer: 'First name',
    },
    {
      header: 'Last',
      accessorKey: 'last_name',
      footer: 'Last name',
    },
    {
      header: 'Email',
      accessorKey: 'email',
      footer: 'Email',
    },
    {
      header: 'Gender',
      accessorKey: 'gender',
      footer: 'Gender',
    },
    {
      header: 'Date of birth',
      accessorKey: 'dob',
      footer: 'Date of birth',
    },
  ]

  const movieColumns = [
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Genre',
      accessorKey: 'genre',
    },
    {
      header: 'Rating',
      accessorKey: 'rating',
    },
  ]

  return (
    <div className='w-full'>
      <BasicTable data={data} columns={columns} />
      {/* <Table /> */}
    </div>
  )
}

export default Home
