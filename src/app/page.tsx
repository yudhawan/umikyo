
import HomePage from '@/containers/HomePage/HomePage'
import { useDispatch } from 'react-redux'
import { getProducts } from '../action/productSlice'
import { AppDispatch, RootState, useRootSelector } from './store'
export default function Home() {
  return <HomePage />
}
