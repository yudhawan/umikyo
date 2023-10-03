'use client'
import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { useForm, SubmitHandler } from "react-hook-form"
import styles from './JoinPage.module.scss'
import { typeId } from '@/constant/typeId'
type Inputs = {
    nama_lengkap: string,
    nama: string,
    email: string,
    ttl: null,
    wa: string,
    ig?: string,
    fb?: string,
    shoope?: string,
    status: string,
    kode_ref: string,
    wilayah: string,
    kota: string,
    alamat_lengkap: string,
    password: string,
    verification: number
}
function Join() {
    const [statusState, setStatusState] = useState<boolean>(false)
    const [repass, setRepass] = useState<string>('')
    const {
        register,
        handleSubmit,
        watch, getValues,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if (getValues('password') === repass) console.log(data)
    }
    useEffect(() => {
        const subscription = watch((value) => {
            if (value.status === 'DS' || value.status === 'DVIP') setStatusState(true)
            else setStatusState(false)
        }
        )
        return () => subscription.unsubscribe()
    }, [watch])
    return (
        <div className={styles.main}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formData}>
                <div>
                    <input className={styles.input} placeholder='Nama Lengkap' {...register("nama_lengkap", { required: true })} />
                    <input className={styles.input} placeholder='Nama Panggilan' {...register("nama", { required: true })} />
                    <input className={styles.input} type="email" placeholder='Email' {...register("email", { required: true })} />
                    <span>Tanggal Lahir</span>
                    <input className={styles.input} type='date' placeholder='ttl' {...register("ttl", { required: true })} />
                    <input className={styles.input} placeholder='Provinsi' {...register("wilayah", { required: true })} />
                    <input className={styles.input} placeholder='Kota' {...register("kota", { required: true })} />
                    <input className={styles.input} placeholder='Alamat Lengkap' {...register("alamat_lengkap", { required: true })} />
                </div>
                <div>

                    <select className={styles.select} {...register('status')}>
                        {typeId.map(val => <option key={val.kode} value={val.kode}>{val.value}</option>)}
                    </select>
                    {!statusState && <input className={styles.input} placeholder='Kode Refferal' {...register("kode_ref", { required: true })} />}
                    <input className={styles.input} placeholder='WhatsApp' {...register("wa", { required: true })} />
                    <input className={styles.input} placeholder='Instagram' {...register("ig")} />
                    <input className={styles.input} placeholder='Facebook' {...register("fb")} />
                    <input className={styles.input} placeholder='Shopee' {...register("shoope")} />
                    <input className={styles.input} type='password' placeholder='Password' {...register("password", { required: true })} />
                    <input className={cx(styles.input, { [styles.error]: (repass !== '' && repass !== getValues('password') && getValues('password') !== '') })} type='password' placeholder='Ulangi Password' onChange={e => setRepass(e.target.value)} />
                </div>
                <div className={styles.submitContainer}>
                    <button>submit</button>
                </div>
            </form>
        </div>
    )
}

export default Join