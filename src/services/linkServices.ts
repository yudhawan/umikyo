import Home from '../icons/home.svg'
import Product from '../icons/products.svg'
import Users from '../icons/users.svg'
import Confirmation from '../icons/confirmation.svg'
import Cart from '../icons/cart.svg'
export const urlIcons = [
    {
        url: '/',
        icon: Home
    },
    {
        url: 'products',
        icon: Product
    },
    {
        url: 'cart',
        icon: Cart
    },
    {
        url: 'sellers',
        icon: Users
    },
    {
        url: 'konfirmasi',
        icon: Confirmation
    },
    {
        url: 'setting',
        icon: Product
    },
    {
        url: 'checkout',
        icon: ''
    },
]
export const getSimilarLink = (link: string) => {
    if (urlIcons.filter(val => val?.url === link)?.[0]?.['url']) return urlIcons.filter(val => val?.url === link)[0]['url']
}