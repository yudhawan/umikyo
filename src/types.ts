import React from "react"

export interface ContexProvider {
    isLoading?: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    modalId?: string,
    setModalId: React.Dispatch<React.SetStateAction<string>>,
    textModal?: string,
    setTextModal: React.Dispatch<React.SetStateAction<string>>,
    title?: string,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    isOpen?: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export type IconProp = {
    name: { src: string },
    className?: string
}
export interface bannerProp {
    alt?: string,
    bg?: string,
    id: number,
    dir: string,
    link?: string,
    image: string,
    position?: string,
    text?: string
}
export type categoryProp = {
    id: number,
    category: string,
    sub_categories: object[]
    isSub?: boolean,
    classname?: string,
    onClick?: () => void
}
export type HomePageProp = {
    products: object[],
    testimonies: object[]
}
export type SellersProp = {
    alamat_lengkap: string,
    date: string,
    email: string,
    fb: string,
    id: number,
    ig: string,
    kode_ref: string,
    kota: string,
    nama: string,
    nama_lengkap: string,
    picture: string | null,
    shoope: string,
    status: string,
    ttl: string,
    verification: number,
    wa: string,
    wilayah: string
}
export type ProductsProp = {
    category: string,
    description: string,
    grosir_min: number,
    grosir_price: number,
    id: number,
    images: string,
    price: number,
    product_name: string,
    stock: number,
    sub: string,
    classname?: string,
    oneProduct?: boolean
}
export type TestimoniesProp = {
    id: number,
    img: string
}
export type LoaderProp = {
    isLoading: boolean
}
export type SearchInputProps = {
    search: string,
    classname?: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}
export type setStateAction = React.Dispatch<React.SetStateAction<boolean>>
export type eventProp = React.ChangeEvent<HTMLInputElement>