'use client'

import { FC, useEffect, useState } from 'react'
import useSWR from 'swr';
interface DashboardProps {
  
}



const Dashboard: FC<DashboardProps> = ({}) => {

const fetcher = (...args: [string, RequestInit]) => fetch(...args).then(res => res.json())
const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
console.log(data);


  return <main>Dashboard</main>
}

export default Dashboard