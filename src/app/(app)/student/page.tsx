'use client'

import { getStudent } from '@/lib/actions'
import { useEffect, useState } from 'react'

export default function Student() {
  const [data, setData] = useState(null)
  const adm = sessionStorage.getItem('Adm')
  useEffect(() => {
    const getData = async () => {
      const res = await getStudent({ adm: adm ?? '2386634' })
      // @ts-ignore
      setData(res)
    }
    getData()
  }, [adm])
  return (
    <section className="w-full h-[35rem] flex items-center justify-center">
      {data?.map((student) => (
        <div
          key={student.id}
          className="w-fit border-2 border-gray-400 aspect-square p-2 rounded-md space-y-6"
        >
          <p>
            Name:{' '}
            <span className="text-3xl font-bold">
              {' '}
              {student.first_name}
              &nbsp;
              {student.second_name}
            </span>
          </p>
          <p>Phone Number: {student.phone_number}</p>
          <p>National ID: {student.national_id}</p>
          <p>Admission Number: {student.admission_number}</p>
        </div>
      ))}
    </section>
  )
}
