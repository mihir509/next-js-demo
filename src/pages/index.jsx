import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link';
import Layout from './layout'
import { useRouter } from 'next/router';

export default function index() {
    const [count, setCount] = useState(0);
    const [inputVal, setinputVal] = useState({})
    const router = useRouter()

    const addData = (e) => {
        setinputVal({ ...inputVal, [e.target.name]: e.target.value })
    }

    const displaycount = useMemo(() => {
        return count + 10;
    }, [count]);

    const handleClick = (e, id) => {
        e.preventDefault()
        setCount(count + 1);
        router.push({
            pathname: '/login',
            params: {
                name: 'SAJID',
            },
        });
        console.log(inputVal)
    }

    return (
        <Layout>
            <br />
            <h4>Welcome to django next chat app!</h4>
            <Link href='/about?name={name}'>Click here</Link>
            <Link href='/login' className='ms-5'>Login</Link>
            <br /><br />
            {/* 
            <input type='text' name='first_name' onChange={addData} /><br /><br />
            <input type='text' name='last_name' onChange={addData} /><br /><br />
            <input type='text' name='address' onChange={addData} /><br /><br />
            <br /><br /> */}
            <p>This is from use memo : {displaycount}</p>
            <p>The count is: {count}</p>
            <button type='button' className='btn btn-primary' onClick={(e) => handleClick(e, 1)}>Submit</button>
        </Layout>
    )
}