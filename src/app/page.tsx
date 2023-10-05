
import HomePage from '@/containers/HomePage/HomePage'
import { useDispatch } from 'react-redux'
import { getProducts } from '../action/productSlice'
import { AppDispatch, RootState, useRootSelector } from './store'
async function getImage(page: string) {
  try {
    const res = await fetch(process.env.BASE_URL + '/api/getImagesByPage?page=' + page)
    if (!res.ok) return []
    return res.json()
  } catch (error) {
    console.log(error)
  }
}
export default async function Home() {
  const banners = await getImage('home')
  return <HomePage banners={banners} />
}
